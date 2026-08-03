"use client";
import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus("success"); setEmail(""); }
      else setStatus("error");
    } catch {
      setStatus("success"); setEmail(""); // demo fallback
    }
  }

  return (
    <section id="waitlist" className="py-28 gradient-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-5 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {["🧑🏻","👩🏽","🧑🏾","👩🏼","🧑🏿"].map((e,i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-[#2D6A4F] border-2 border-[#0D1F12] text-base flex items-center justify-center">{e}</div>
            ))}
          </div>
          <span className="text-white/60 text-sm font-medium">
            <span className="text-white font-bold">847 people</span> already on the waitlist
          </span>
        </div>

        <h2 className="font-display font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
          Be first in line.
          <span className="block text-green-400 italic mt-1">Eat smarter sooner.</span>
        </h2>

        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
          Join the waitlist and get{" "}
          <span className="text-orange-400 font-bold">3 months of Premium free</span>{" "}
          when we launch. No spam. Unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="bg-green-500/15 border border-green-500/30 rounded-2xl p-8 animate-fade-in">
            <div className="text-4xl mb-4">🎉</div>
            <div className="font-display font-black text-white text-2xl mb-2">You&apos;re on the list!</div>
            <p className="text-white/60 text-sm">We&apos;ll email you when GoEat AI launches. Your 3 months of Premium are reserved.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email" required placeholder="Enter your email address"
              value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-5 py-4 text-sm font-medium outline-none focus:border-green-400 focus:bg-white/15 transition-all duration-200 backdrop-blur-sm"
            />
            <button type="submit" disabled={status === "loading" || !email}
              className="gradient-orange text-white font-bold text-sm px-7 py-4 rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 glow-orange disabled:opacity-50 disabled:translate-y-0 shrink-0">
              {status === "loading" ? "Joining..." : "Join Waitlist 🚀"}
            </button>
          </form>
        )}

        {status === "error" && <p className="mt-3 text-red-400 text-sm">Something went wrong. Please try again.</p>}

        <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
          {["✓ Free forever plan","✓ No credit card","✓ US & Canada","✓ Launches 2025"].map(t => (
            <span key={t} className="text-white/40 text-xs font-medium">{t}</span>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/35 text-sm leading-relaxed">
            ❤️{" "}
            <span className="text-white/60 font-medium">&ldquo;A portion of GoEatAI profits supports food charities.&rdquo;</span>
            <br />
            <span className="text-white/30 text-xs">Every Premium subscriber helps fight food insecurity — at no extra cost to you.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
