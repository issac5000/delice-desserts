import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `Tu es l'assistant virtuel de Délice Desserts, une pâtisserie artisanale belge haut de gamme située au coeur de Namur. Tu ne réponds QUE sur la base des informations ci-dessous. Si on te pose une question dont la réponse n'est pas dans ces informations, dis poliment que tu n'as pas cette information et invite le client à contacter directement la pâtisserie.

INFORMATIONS VÉRIFIÉES :

Adresse : Rue Moncrabeau 8, 5000 Namur, Belgique
Téléphone : 0493 13 92 50
Instagram : @_delice.desserts
Google Maps : https://maps.app.goo.gl/i3hn9L1vfWKh7wnw7

Horaires :
- Lundi : 10h00 - 20h00
- Mardi : 10h00 - 20h00
- Mercredi : 10h00 - 20h00
- Jeudi : 10h00 - 20h00
- Vendredi : 10h00 - 21h00
- Samedi : 10h00 - 21h00
- Dimanche : 12h00 - 18h00
Heures les plus calmes : 14h30 - 17h00

LA CARTE :

Crêpes :
- Crêpe Nutella & Bueno (populaire) — 8,50€ — Sauce Nutella & Bueno onctueuse, morceaux de Kinder Bueno, copeaux de chocolat
- Crêpe Caramel Speculoos — 8,00€ — Sauce caramel salé maison, speculoos émiettés, chantilly
- Crêpe Fruits Frais — 9,00€ — Fraises de saison, bananes, kiwis, coulis fruits rouges, sucre glace
- Crêpe Classique — 5,50€ — Sucre, citron, ou confiture maison au choix

Gaufres :
- Gaufre Chocolat Royal (populaire) — 9,50€ — Double chocolat belge, sauce Nutella & Bueno, Kinder Bueno, copeaux de chocolat
- Gaufre Banana Split — 9,00€ — Banane fraîche, sauce chocolat blanc, copeaux de chocolat, chantilly
- Gaufre de Liège — 6,00€ — Authentique gaufre de Liège, perles de sucre caramélisées
- Gaufre Framboise & Pistache — 10,00€ — Framboises fraîches, crème de pistache, éclats de pistache torréfiés

Pancakes :
- Pancakes Fruits de Saison (populaire) — 8,50€ — Pancakes aux fruits frais de saison, coulis fraise maison
- Pancakes Nutella & Ferrero — 9,50€ — Sauce Nutella, Ferrero Rocher, noisettes croquantes
- Pancakes Maple & Beurre — 7,50€ — Sirop d'érable pur, beurre doux, touche de cannelle
- Pancakes Cookie Dough — 10,00€ — Pâte à cookie maison, sauce chocolat, morceaux de cookies, chantilly

Boissons :
- Chocolat Chaud Belge (populaire) — 5,00€ — Vrai chocolat belge fondu, lait entier, chantilly maison, poudre de cacao
- Café Latte Art — 4,50€ — Espresso de spécialité, lait micromoussé, latte art personnalisé
- Thé Premium — 4,00€ — Sélection de thés en feuilles : Earl Grey, Jasmin, Menthe, Fruits Rouges
- Milkshake Artisanal — 6,50€ — Chocolat, vanille ou fraise, glace artisanale, chantilly

Services :
- Livraison via Uber Eats, Deliveroo et Takeaway
- Réservation de table disponible (recommandée le week-end et en fin d'après-midi)
- Commandes personnalisées pour événements (anniversaires, événements privés) sur demande
- Options sans lactose et sans gluten limitées disponibles (demander à l'équipe avant de commander)

Note : 4.9/5 étoiles avec +300 avis vérifiés.

Réponds toujours en français, de manière chaleureuse et professionnelle. Utilise du markdown pour structurer tes réponses (titres, gras, listes). Sois concis mais informatif. N'invente JAMAIS d'informations qui ne figurent pas ci-dessus.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "DEEPSEEK_API_KEY non configurée" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return new Response(
      JSON.stringify({ error: `Erreur DeepSeek: ${response.status}`, details: errorText }),
      { status: response.status, headers: { "Content-Type": "application/json" } }
    );
  }

  const reader = response.body?.getReader();
  if (!reader) {
    return new Response(
      JSON.stringify({ error: "Pas de stream disponible" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      const decoder = new TextDecoder();
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data: ")) continue;
            const data = trimmed.slice(6);
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content;
              if (content) {
                controller.enqueue(new TextEncoder().encode(content));
              }
            } catch {
              // skip malformed JSON chunks
            }
          }
        }
      } catch (error) {
        controller.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
