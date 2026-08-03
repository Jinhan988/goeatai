const STEPS = [
  { step:"1", icon:"📸", title:"Snap your fridge",    desc:"Open GoEat AI and take a photo of your fridge, pantry, or grocery receipt. Takes 3 seconds.",                          color:"bg-green-500"  },
  { step:"2", icon:"⚡", title:"AI builds your plan", desc:"Our AI scans your ingredients, checks your budget, and generates a 7-day meal plan in under 30 seconds.",              color:"bg-orange-500" },
  { step:"3", icon:"🛒", title:"Shop the list",       desc:"Get a ready-to-use shopping list with quantities and estimated costs. Check items off as you shop.",                    color:"bg-green-500"  },
  { step:"4", icon:"🍽️", title:"Cook and enjoy",     desc:"Tap any meal for the full recipe with step-by-step instructions. Zero waste. Maximum flavor.",                          color:"bg-orange-500" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-600 text-xs font-bold px-4 py-2 rounded-full mb-6">
            Simple as 1-2-3-4
          </div>
          <h2 className="font-display font-black text-[#0D1F12] text-4xl sm:text-5xl leading-tight">
            From fridge to fork
            <span className="block text-orange-500 italic">in four steps.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`relative w-20 h-20 ${s.color} rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg transition-transform duration-300 group-hover:-translate-y-1`}>
                {s.icon}
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-[#0D1F12] text-white rounded-full text-xs font-black flex items-center justify-center border-2 border-white">
                  {s.step}
                </div>
              </div>
              <h3 className="font-display font-bold text-xl text-[#0D1F12] mb-2">{s.title}</h3>
              <p className="text-[#0D1F12]/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#F8FAF8] rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {val:"30s",   label:"Average plan generation"},
              {val:"$43",   label:"Avg weekly savings"},
              {val:"2.1 kg",label:"Food waste avoided/week"},
              {val:"12+",   label:"Cuisine styles supported"},
            ].map(({val,label}) => (
              <div key={label}>
                <div className="font-display font-black text-3xl text-[#0D1F12] mb-1">{val}</div>
                <div className="text-[#0D1F12]/50 text-xs font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
