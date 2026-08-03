"use client";
import { useState, useEffect } from "react";

const FRIDGE_ITEMS = [
  { emoji: "🥦", label: "Broccoli",   delay: 0   },
  { emoji: "🥚", label: "Eggs x8",    delay: 120 },
  { emoji: "🐔", label: "Chicken",    delay: 240 },
  { emoji: "🥕", label: "Carrots",    delay: 360 },
  { emoji: "🧀", label: "Cheddar",    delay: 480 },
  { emoji: "🍅", label: "Tomatoes",   delay: 600 },
  { emoji: "🥛", label: "Milk 2L",    delay: 720 },
  { emoji: "🧄", label: "Garlic",     delay: 840 },
];

const MEAL_PLAN = [
  { day: "Mon", meal: "Chicken stir-fry & rice" },
  { day: "Tue", meal: "Veggie omelette & toast" },
  { day: "Wed", meal: "Tomato pasta bake"        },
  { day: "Thu", meal: "Carrot & lentil soup"     },
  { day: "Fri", meal: "Cheesy broccoli bake"     },
];

export default function Hero() {
  const [phase, setPhase] = useState<"idle"|"scanning"|"done">("idle");
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [visibleMeals, setVisibleMeals] = useState<number[]>([]);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => { const t = setTimeout(() => runDemo(), 1200); return () => clearTimeout(t); }, []);

  function runDemo() {
    setPhase("scanning"); setVisibleItems([]); setVisibleMeals([]); setScanProgress(0);
    let p = 0;
    const prog = setInterval(() => { p += 3; setScanProgress(Math.min(p, 100)); if (p >= 100) clearInterval(prog); }, 40);
    FRIDGE_ITEMS.forEach((_, i) => setTimeout(() => setVisibleItems(prev => [...prev, i]), 800 + i * 130));
    setTimeout(() => {
      setPhase("done");
      MEAL_PLAN.forEach((_, i) => setTimeout(() => setVisibleMeals(prev => [...prev, i]), i * 120));
    }, 2600);
  }

  function resetDemo() { setPhase("idle"); setVisibleItems([]); setVisibleMeals([]); setScanProgress(0); setTimeout(() => runDemo(), 400); }

  return (
    <section className="relative min-h-screen gradient-forest flex flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 pt-32 pb-20 flex-1 flex flex-col lg:flex-row items-center gap-16">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-bold px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Now in Beta — Free to Join
          </div>

          <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-up animation-fill-both">
            Turn your fridge into a
            <span className="block mt-1">
              <em className="gradient-text not-italic">weekly meal plan</em>
            </span>
            <span className="block text-white/90">in 30 seconds.</span>
          </h1>

          <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 animate-fade-up animation-fill-both animation-delay-200">
            No typing. No searching. Snap your fridge — GoEat AI builds your 7-day meal plan, shopping list, and grocery budget instantly.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-8 mb-10 animate-fade-up animation-fill-both animation-delay-300">
            {[{val:"30s",label:"to generate"},{val:"$0",label:"to start"},{val:"7-day",label:"meal plan"}].map(({val,label}) => (
              <div key={label} className="text-center lg:text-left">
                <div className="font-display font-black text-2xl text-green-400">{val}</div>
                <div className="text-white/50 text-xs font-medium">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up animation-fill-both animation-delay-400">
            <a href="#waitlist"
              className="gradient-orange text-white font-bold text-base px-8 py-4 rounded-2xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 glow-orange w-full sm:w-auto text-center">
              🚀 Join the Waitlist — Free
            </a>
            <button onClick={resetDemo}
              className="text-white/70 hover:text-white text-sm font-medium border border-white/20 hover:border-white/40 px-6 py-4 rounded-2xl transition-all duration-200 w-full sm:w-auto">
              ▶ Watch the demo
            </button>
          </div>
          <p className="mt-4 text-white/35 text-xs animate-fade-up animation-fill-both animation-delay-500">No credit card required · Works in US & Canada</p>
        </div>

        {/* Phone Demo */}
        <div className="flex-1 w-full max-w-sm lg:max-w-md animate-fade-up animation-fill-both animation-delay-300">
          <div className="relative">
            <div className="bg-[#1B3A22] border border-white/10 rounded-3xl p-1 card-shadow-lg">
              <div className="bg-[#111A14] rounded-[22px] overflow-hidden">
                <div className="flex items-center justify-between px-5 pt-4 pb-3">
                  <span className="font-display font-black text-white text-sm">
                    Go<span className="text-orange-500">Eat</span>
                    <span className="text-[8px] bg-green-500 text-[#0D1F12] font-bold px-1 py-0.5 rounded ml-1">AI</span>
                  </span>
                  <span className="text-white/30 text-xs">9:41 AM</span>
                </div>

                {/* Fridge area */}
                <div className="relative mx-4 rounded-2xl overflow-hidden bg-[#1A2B1E] h-44">
                  <div className="absolute inset-0 grid grid-cols-4 gap-3 p-4 text-3xl opacity-40">
                    {["🥦","🥚","🐔","🥕","🧀","🍅","🥛","🧄","🫐","🥬","🍋","🥩"].map((e,i) => (
                      <span key={i} className="flex items-center justify-center">{e}</span>
                    ))}
                  </div>
                  {phase === "scanning" && (
                    <div className="absolute inset-0 bg-green-500/10">
                      {["top-2 left-2 border-t-2 border-l-2","top-2 right-2 border-t-2 border-r-2","bottom-2 left-2 border-b-2 border-l-2","bottom-2 right-2 border-b-2 border-r-2"].map((cls,i) => (
                        <div key={i} className={`absolute w-5 h-5 border-green-400 ${cls}`} />
                      ))}
                      <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"
                        style={{ top:`${scanProgress}%`, transition:"top 0.05s linear" }} />
                    </div>
                  )}
                  <div className="absolute top-3 left-0 right-0 flex justify-center">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                      phase==="idle" ? "bg-white/10 text-white/60" :
                      phase==="scanning" ? "bg-green-500/30 text-green-300" : "bg-green-500 text-white"
                    }`}>
                      {phase==="idle" ? "📸 Tap to scan fridge" : phase==="scanning" ? `Scanning... ${scanProgress}%` : "✓ Scan complete"}
                    </span>
                  </div>
                </div>

                {/* Detected items */}
                <div className="px-4 pt-3 pb-2">
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {visibleItems.length > 0 ? `Detected ${visibleItems.length} ingredients` : "Ingredients"}
                  </div>
                  <div className="flex flex-wrap gap-1.5 min-h-[36px]">
                    {FRIDGE_ITEMS.map((item,i) => visibleItems.includes(i) ? (
                      <span key={i}
                        className="inline-flex items-center gap-1 bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-semibold px-2 py-1 rounded-full animate-pop-in animation-fill-both"
                        style={{ animationDelay:`${item.delay}ms` }}>
                        {item.emoji} {item.label}
                      </span>
                    ) : null)}
                  </div>
                </div>

                {/* Meal plan */}
                {phase === "done" && (
                  <div className="px-4 pb-4 pt-1 border-t border-white/5 mt-2 animate-fade-in">
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Your 7-day plan</div>
                    <div className="space-y-1.5">
                      {MEAL_PLAN.map((m,i) => visibleMeals.includes(i) ? (
                        <div key={i} className="flex items-center gap-2.5 animate-fade-up animation-fill-both" style={{animationDelay:`${i*80}ms`}}>
                          <span className="text-green-400 font-bold text-[10px] w-7 shrink-0">{m.day}</span>
                          <span className="text-white/80 text-[11px] truncate">{m.meal}</span>
                        </div>
                      ) : null)}
                    </div>
                    {visibleMeals.length === MEAL_PLAN.length && (
                      <div className="mt-3 bg-orange-500 text-white text-xs font-bold text-center py-2 rounded-xl animate-pop-in animation-fill-both animation-delay-500">
                        View full plan + shopping list
                      </div>
                    )}
                  </div>
                )}
                <div className="h-4" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 animate-float">
              <span className="text-lg">💰</span>
              <div>
                <div className="text-[#0D1F12] font-black text-sm leading-none">$43 saved</div>
                <div className="text-[#0D1F12]/50 text-[10px]">vs eating out</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2 animate-float animation-delay-500">
              <span className="text-lg">♻️</span>
              <div>
                <div className="text-[#0D1F12] font-black text-sm leading-none">Zero waste</div>
                <div className="text-[#0D1F12]/50 text-[10px]">all ingredients used</div>
              </div>
            </div>
          </div>
          <button onClick={resetDemo} className="mt-8 w-full text-center text-white/40 hover:text-white/70 text-xs font-medium transition-colors">
            Replay demo
          </button>
        </div>
      </div>

      <div className="relative pb-8 flex justify-center animate-bounce">
        <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
