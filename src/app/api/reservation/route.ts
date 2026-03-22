import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.nom || !body.telephone || !body.date || !body.heure || !body.personnes) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.N8N_RESERVATION_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("N8N_RESERVATION_WEBHOOK_URL not configured");
      return NextResponse.json(
        { error: "Configuration serveur manquante" },
        { status: 500 }
      );
    }

    const webhookPayload = {
      ...body,
      timestamp: new Date().toISOString(),
      source: "delice-desserts-website",
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      console.error("n8n webhook error:", webhookResponse.status);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de la réservation" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reservation API error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
