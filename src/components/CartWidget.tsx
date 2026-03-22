"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  Send,
  ArrowLeft,
  Check,
} from "lucide-react";
import { useCart, getCartTotals } from "@/context/CartContext";

type View = "cart" | "form" | "confirmation";

export default function CartWidget() {
  const { state, dispatch } = useCart();
  const { totalItems, totalPrice } = getCartTotals(state.items);

  const [view, setView] = useState<View>("cart");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mode, setMode] = useState("Retrait en boutique");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: state.items.map((i) => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
          })),
          total: totalPrice,
          customer: { nom, telephone, mode, notes: notes || undefined },
        }),
      });

      if (res.ok) {
        setView("confirmation");
        dispatch({ type: "CLEAR_CART" });
        setNom("");
        setTelephone("");
        setMode("Retrait en boutique");
        setNotes("");
      } else {
        const data = await res.json();
        setError(data.error || "Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    dispatch({ type: "SET_CART_OPEN", payload: false });
    if (view === "confirmation") setView("cart");
  };

  return (
    <>
      {/* Floating sphere button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        onClick={() => dispatch({ type: "TOGGLE_CART" })}
        className="fixed bottom-6 left-6 z-50 w-[72px] h-[72px] rounded-full flex items-center justify-center cursor-pointer border-0 p-0"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 35% 30%, #7D5066, #4A3548 40%, #2D1F2D 70%, #1A0E18 100%)",
          boxShadow:
            "0 10px 40px rgba(45,31,45,0.5), 0 4px 15px rgba(26,14,24,0.3), inset 0 -6px 12px rgba(0,0,0,0.4), inset 0 2px 6px rgba(255,255,255,0.15)",
        }}
        aria-label="Ouvrir le panier"
      >
        {/* Specular highlight */}
        <span
          className="absolute top-[10px] left-[16px] w-[22px] h-[14px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 70%)",
            transform: "rotate(-20deg)",
          }}
        />
        <div className="text-cream relative z-10">
          <AnimatePresence mode="wait">
            {state.isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="cart"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ShoppingCart size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Badge */}
        {totalItems > 0 && !state.isOpen && (
          <motion.span
            key={totalItems}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.3, 1] }}
            transition={{ duration: 0.3 }}
            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold-dark text-cream text-xs font-bold flex items-center justify-center shadow-lg"
          >
            {totalItems}
          </motion.span>
        )}
      </motion.button>

      {/* Cart panel */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-[104px] left-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] flex flex-col bg-vanilla border border-gold/20 shadow-2xl overflow-hidden"
            style={{ borderRadius: "28px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gold/15 bg-cream shrink-0">
              <div className="flex items-center gap-3">
                {view === "form" && (
                  <button
                    onClick={() => setView("cart")}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-chocolate/60 hover:text-chocolate hover:bg-rose-light/50 transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                  </button>
                )}
                <div className="w-8 h-8 rounded-full bg-chocolate flex items-center justify-center">
                  <ShoppingCart size={14} className="text-cream" />
                </div>
                <h3 className="text-sm font-semibold text-chocolate">
                  {view === "form"
                    ? "Votre commande"
                    : view === "confirmation"
                      ? "Confirmation"
                      : "Votre Panier"}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-chocolate-light/60 hover:text-chocolate hover:bg-rose-light/50 transition-colors cursor-pointer"
                aria-label="Fermer le panier"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              {view === "cart" && (
                <motion.div
                  key="cart-view"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  {state.items.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center py-12 px-6 text-center">
                      <div className="text-5xl mb-4">🍪</div>
                      <p className="text-chocolate/60 text-sm">
                        Votre panier est vide
                      </p>
                      <p className="text-chocolate/40 text-xs mt-1">
                        Ajoutez des cookies depuis la carte !
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Items list */}
                      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                        {state.items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 py-2 border-b border-gold/10 last:border-b-0"
                          >
                            {/* Thumbnail */}
                            <div
                              className="w-12 h-12 rounded-xl shrink-0 bg-cover bg-center"
                              style={{
                                backgroundImage: `url('${item.image}')`,
                              }}
                            />
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-chocolate truncate">
                                {item.name}
                              </p>
                              <p className="text-xs text-chocolate/50">
                                {item.price.toFixed(2)} EUR
                              </p>
                            </div>
                            {/* Quantity controls */}
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {
                                      id: item.id,
                                      quantity: item.quantity - 1,
                                    },
                                  })
                                }
                                className="w-7 h-7 rounded-full border border-gold/20 flex items-center justify-center text-chocolate/60 hover:bg-rose-light/40 hover:border-gold/40 transition-colors cursor-pointer"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="text-sm font-semibold text-chocolate w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "UPDATE_QUANTITY",
                                    payload: {
                                      id: item.id,
                                      quantity: item.quantity + 1,
                                    },
                                  })
                                }
                                className="w-7 h-7 rounded-full border border-gold/20 flex items-center justify-center text-chocolate/60 hover:bg-rose-light/40 hover:border-gold/40 transition-colors cursor-pointer"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            {/* Remove */}
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_ITEM",
                                  payload: { id: item.id },
                                })
                              }
                              className="w-7 h-7 rounded-full flex items-center justify-center text-chocolate/30 hover:text-red-400 hover:bg-red-50 transition-colors cursor-pointer"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Total + order button */}
                      <div className="px-5 py-4 border-t border-gold/15 bg-cream/50 shrink-0">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-chocolate/60">
                            Total
                          </span>
                          <span
                            className="text-xl font-bold text-gold-dark"
                            style={{ fontFamily: "var(--font-playfair)" }}
                          >
                            {totalPrice.toFixed(2)} EUR
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            setView("form");
                            setError("");
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-chocolate text-cream px-5 py-3 text-sm font-semibold hover:bg-gold-dark transition-colors cursor-pointer"
                        >
                          <Send size={14} />
                          Commander
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {view === "form" && (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
                  >
                    {/* Order summary */}
                    <div className="rounded-xl bg-cream/60 border border-gold/15 px-4 py-3 text-sm text-chocolate/70">
                      {totalItems} article{totalItems > 1 ? "s" : ""} —{" "}
                      <span className="font-semibold text-gold-dark">
                        {totalPrice.toFixed(2)} EUR
                      </span>
                    </div>

                    {/* Nom */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                        Nom *
                      </label>
                      <input
                        type="text"
                        required
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full bg-vanilla border border-gold/20 rounded-xl px-4 py-2.5 text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>

                    {/* Telephone */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        placeholder="0486 XX XX XX"
                        className="w-full bg-vanilla border border-gold/20 rounded-xl px-4 py-2.5 text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold/50 transition-colors"
                      />
                    </div>

                    {/* Mode */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                        Mode de retrait *
                      </label>
                      <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full bg-vanilla border border-gold/20 rounded-xl px-4 py-2.5 text-sm text-chocolate focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option>Retrait en boutique</option>
                        <option>Livraison</option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] font-semibold text-chocolate/70 mb-1.5">
                        Notes
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Instructions spéciales..."
                        className="w-full bg-vanilla border border-gold/20 rounded-xl px-4 py-2.5 text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <p className="text-sm text-red-500 bg-red-50 rounded-xl px-4 py-2">
                        {error}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-chocolate text-cream px-5 py-3 text-sm font-semibold hover:bg-gold-dark transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full"
                          />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Envoyer la commande
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {view === "confirmation" && (
                <motion.div
                  key="confirmation-view"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex-1 flex flex-col items-center justify-center py-12 px-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5"
                  >
                    <Check size={28} className="text-green-600" />
                  </motion.div>
                  <h4
                    className="text-xl font-bold text-chocolate mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Commande envoyée !
                  </h4>
                  <p className="text-sm text-chocolate/60 mb-6 leading-relaxed">
                    Nous vous contacterons sous peu pour confirmer votre
                    commande.
                  </p>
                  <button
                    onClick={handleClose}
                    className="rounded-full border border-gold/25 px-6 py-2.5 text-sm font-semibold text-chocolate hover:bg-rose-light/30 hover:border-gold/40 transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
