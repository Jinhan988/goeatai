const FREE_FEAT = ["7-day AI meal plan","Fridge & receipt scan","Shopping list","3 cuisine styles","Calorie estimates"];
const PRO_FEAT  = ["Everything in Free","All 12 cuisine styles","Zero-waste optimization","Full recipe library","Budget & savings tracker","Save & export meal plans","Priority AI generation","Nutritional breakdown"];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#F8FAF8]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0D1F12]/10 border border-[#0D1F12]/15 text-[#0D1F12] text-xs font-bold px-4 py-2 rounded-full mb-6">
            Simple pricing
          </div>
          <h2 className="font-display font-black text-[#0D1F12] text-4xl sm:text-5xl leading-tight">
            Start free.
            <span className="text-green-600 italic"> Eat better forever.</span>
          </h2>
          <p className="text-[#0D1F12]/60 text-lg mt-4 max-w-xl mx-auto">
            No hidden fees. Cancel anytime. Premium helps fund food bank donations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free */}
          <div className="bg-white rounded-3xl p-8 card-shadow">
            <div className="mb-6">
              <div className="text-sm font-bold text-[#0D1F12]/50 uppercase tracking-wider mb-2">Free</div>
              <div className="font-display font-black text-5xl text-[#0D1F12]">
                $0<span className="text-base text-[#0D1F12]/40 font-sans font-normal"> /month</span>
              </div>
              <p className="text-[#0D1F12]/60 text-sm mt-2">Perfect to get started.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {FREE_FEAT.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-[#0D1F12]/80">
                  <span className="w-5 h-5 bg-green-500/15 text-green-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="block w-full text-center py-3.5 rounded-xl border-2 border-[#0D1F12]/20 text-[#0D1F12] font-bold text-sm hover:border-[#0D1F12]/40 hover:bg-[#0D1F12]/5 transition-all duration-200">
              Get Started Free
            </a>
          </div>

          {/* Premium */}
          <div className="relative bg-[#0D1F12] rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-6 right-6 bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
            <div className="mb-6 relative">
              <div className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">Premium</div>
              <div className="font-display font-black text-5xl text-white">
                $4.99<span className="text-base text-white/40 font-sans font-normal"> /month</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Less than one coffee a month.</p>
            </div>
            <ul className="space-y-3 mb-8 relative">
              {PRO_FEAT.map(f => (
                <li key={f} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="relative block w-full text-center py-3.5 rounded-xl gradient-orange text-white font-bold text-sm hover:opacity-90 transition-all duration-200 glow-orange">
              Join Waitlist — Get Premium Free
            </a>
            <div className="relative mt-4 flex items-center gap-2 justify-center">
              <span className="text-base">❤️</span>
              <span className="text-white/40 text-xs">A portion supports food banks worldwide</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-bold px-6 py-3 rounded-full">
            🎉 Early waitlist members get 3 months of Premium free at launch
          </div>
        </div>
      </div>
    </section>
  );
}
