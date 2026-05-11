"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const MarkdownRenderer = dynamic(
  () => import("react-markdown").then((mod) => {
    const ReactMarkdown = mod.default;
    return import("remark-gfm").then((gfm) => {
      const remarkGfm = gfm.default;
      return {
        default: ({ children }: { children: string }) => (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
        ),
      };
    });
  }),
  { ssr: false, loading: () => <span>...</span> }
);

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  {
    label: "Quels sont vos horaires ?",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Quels desserts proposez-vous ?",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h12" />
        <path d="M8 18V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
        <path d="M4 18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
        <path d="M2 18h20" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
  {
    label: "Comment commander en livraison ?",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="10" rx="2" />
        <path d="M16 10h4l3 3v3a1 1 0 0 1-1 1h-2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
      </svg>
    ),
  },
];

const ChatBubbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CONSENT_STORAGE_KEY = "delice-chat-consent";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted") {
      setHasConsent(true);
    }
  }, []);

  const acceptConsent = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    }
    setHasConsent(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const declineConsent = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      if (hasConsent) inputRef.current?.focus();
      setShowBubble(false);
    }
  }, [isOpen, hasConsent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowBubble(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showBubble) {
      const hide = setTimeout(() => setShowBubble(false), 4000);
      return () => clearTimeout(hide);
    }
  }, [showBubble]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isStreaming) return;

      const userMessage: Message = { role: "user", content: content.trim() };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput("");
      setIsStreaming(true);

      const assistantMessage: Message = { role: "assistant", content: "" };
      setMessages([...updatedMessages, assistantMessage]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) {
          const error = await res.json();
          setMessages([
            ...updatedMessages,
            {
              role: "assistant",
              content: `Erreur : ${error.error || "Une erreur est survenue."}`,
            },
          ]);
          setIsStreaming(false);
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) {
          setIsStreaming(false);
          return;
        }

        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          accumulated += decoder.decode(value, { stream: true });
          setMessages([
            ...updatedMessages,
            { role: "assistant", content: accumulated },
          ]);
        }
      } catch {
        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            content: "Erreur de connexion. Veuillez réessayer.",
          },
        ]);
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, isStreaming]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 0;

  return (
    <>
      {/* Prompt bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="fixed bottom-[42px] right-[106px] z-50 bg-white rounded-2xl shadow-xl border border-gold/20 px-4 py-3 max-w-[220px]"
          >
            <p className="text-sm text-chocolate font-medium leading-snug">
              Une question ? Je suis là pour vous !
            </p>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 bg-white border-r border-b border-gold/20 rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating sphere button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: { type: "spring", stiffness: 260, damping: 20 },
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-[72px] h-[72px] rounded-full flex items-center justify-center cursor-pointer border-0 p-0"
        style={{
          background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 35% 30%, #7D5066, #4A3548 40%, #2D1F2D 70%, #1A0E18 100%)",
          boxShadow: "0 10px 40px rgba(45,31,45,0.5), 0 4px 15px rgba(26,14,24,0.3), inset 0 -6px 12px rgba(0,0,0,0.4), inset 0 2px 6px rgba(255,255,255,0.15)",
        }}
        aria-label="Ouvrir le chat"
      >
        {/* Specular highlight overlay */}
        <span
          className="absolute top-[10px] left-[16px] w-[22px] h-[14px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 70%)",
            transform: "rotate(-20deg)",
          }}
        />
        <div className="text-cream relative z-10">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <CloseIcon />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <ChatBubbleIcon />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-espresso/30 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-[104px] right-6 z-50 w-[420px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-8rem)] flex flex-col bg-vanilla border border-gold/20 shadow-2xl overflow-hidden"
            style={{ borderRadius: "28px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gold/15 bg-cream">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-chocolate flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFF5F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-chocolate">
                    Delice Desserts
                  </h3>
                  <p className="text-xs text-chocolate-light/70 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    En ligne
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-chocolate-light/60 hover:text-chocolate hover:bg-rose-light/50 transition-colors cursor-pointer"
                aria-label="Fermer le chat"
              >
                <CloseIcon />
              </button>
            </div>

            {!hasConsent ? (
              <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D07A94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-chocolate mb-2">
                    Confidentialité &amp; consentement
                  </h4>
                  <p className="text-sm text-chocolate-light/80 leading-relaxed mb-3">
                    Pour vous répondre, cet assistant transmet vos messages à
                    <span className="font-medium text-chocolate"> DeepSeek</span>,
                    un service d&apos;intelligence artificielle tiers, susceptible
                    de traiter vos données en dehors de l&apos;Union européenne.
                  </p>
                  <p className="text-xs text-chocolate-light/70 leading-relaxed">
                    Aucune donnée personnelle ne nous est nécessaire pour utiliser
                    le chat. Évitez de saisir des informations sensibles. En
                    continuant, vous acceptez ce traitement conformément au RGPD.
                  </p>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <button
                    onClick={acceptConsent}
                    className="w-full bg-chocolate text-cream rounded-full py-3 text-sm font-medium hover:bg-chocolate-light transition-colors cursor-pointer"
                  >
                    J&apos;accepte et je discute
                  </button>
                  <button
                    onClick={declineConsent}
                    className="w-full text-chocolate-light/70 hover:text-chocolate rounded-full py-2 text-sm transition-colors cursor-pointer"
                  >
                    Refuser
                  </button>
                </div>
              </div>
            ) : (
            <>
            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Welcome message */}
              <div className="bg-cream border border-gold/15 rounded-2xl px-4 py-3 text-sm text-chocolate leading-relaxed">
                Bonjour ! Je suis l&apos;assistant de Delice Desserts.
                Comment puis-je vous aider ?
              </div>

              {/* Messages */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={
                    msg.role === "user"
                      ? "flex justify-end"
                      : "flex justify-start"
                  }
                >
                  <div
                    className={
                      msg.role === "user"
                        ? "bg-chocolate text-cream rounded-2xl px-4 py-2.5 text-sm max-w-[85%] leading-relaxed"
                        : "bg-cream border border-gold/15 rounded-2xl px-4 py-2.5 text-sm text-chocolate max-w-[85%] leading-relaxed"
                    }
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm max-w-none prose-headings:text-chocolate prose-headings:font-semibold prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-strong:text-chocolate">
                        <MarkdownRenderer>
                          {msg.content || (isStreaming && i === messages.length - 1 ? "..." : "")}
                        </MarkdownRenderer>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && (
              <div className="px-4 pb-2 flex flex-col gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => sendMessage(s.label)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 border border-gold/20 rounded-2xl text-left text-sm text-chocolate hover:bg-rose-light/30 hover:border-gold/40 transition-colors cursor-pointer"
                  >
                    <span className="text-gold-dark flex-shrink-0">
                      {s.icon}
                    </span>
                    <span>{s.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Input area */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-gold/15 bg-cream/50"
            >
              <div className="flex items-center bg-vanilla border border-gold/20 rounded-full pl-5 pr-1.5 py-1.5 focus-within:border-gold/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tapez votre message..."
                  disabled={isStreaming}
                  className="flex-1 bg-transparent text-base sm:text-sm text-chocolate placeholder:text-chocolate-light/40 focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  className="w-9 h-9 rounded-full bg-chocolate text-cream flex items-center justify-center hover:bg-chocolate-light transition-colors disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Envoyer"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
            </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
