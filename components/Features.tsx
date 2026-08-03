const FEATURES = [
  { icon:"🧊", title:"Fridge Scan",       desc:"Snap your fridge. AI identifies every ingredient and builds your plan around what you already have.",         tag:"Core Feature",  col:"bg-green-500/15 text-green-600" },
  { icon:"🧾", title:"Receipt Scan",      desc:"Just bought groceries? Scan your receipt and GoEat AI turns it into a zero-waste meal plan instantly.",       tag:"Smart Scan",    col:"bg-orange-500/15 text-orange-600" },
  { icon:"📅", title:"7-Day Meal Plan",   desc:"A full week of breakfast, lunch, and dinner tailored to your family size, diet, and favourite cuisine.",      tag:"Personalized",  col:"bg-green-500/15 text-green-600" },
  { icon:"🛒", title:"Shopping List",     desc:"Ingredient quantities calculated for your exact family size. Check items off as you shop.",                    tag:"Saves Time",    col:"bg-orange-500/15 text-orange-600" },
  { icon:"💰", title:"Budget Tracking",   desc:"Set your weekly budget. GoEat AI picks the right store and optimizes your plan to stay under it every time.", tag:"Save Money",    col:"bg-green-500/15 text-green-600" },
  { icon:"♻️", title:"Zero Food Waste",   desc:"Every ingredient used across multiple meals. No more forgotten vegetables rotting in your fridge.",            tag:"Eco-Friendly",  col:"bg-green-500/15 text-green-600" },
  { icon:"👨‍🍳", title:"Step-by-Step Recipes", desc:"Tap any meal to get the full recipe with steps, prep time, and chef tips. Watch it on YouTube too.",     tag:"Learn to Cook", col:"bg-orange-500/15 text-orange-600" },
  { icon:"🌍", title:"12 Cuisine Styles", desc:"Korean, Italian, Japanese, Mexican, Indian, Thai, Vietnamese, Mediterranean and more.",                        tag:"Variety",       col:"bg-green-500/15 text-green-600" },
  { icon:"❤️", title:"GoEat Gives Back",  desc:"A portion of every Premium subscription supports food banks. You eat better - someone else eats too.",        tag:"Social Good",   col:"bg-orange-500/15 text-orange-600" },
];

export default function Features() {
  return (
    <section id="features" className="py-28 bg-[#F8FAF8]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-bold px-4 py-2 rounded-full mb-6">
            Everything you need
          </div>
          <h2 className="font-display font-black text-[#0D1F12] text-4xl sm:text-5xl lg:text-6xl leading-tight">
            More than a meal planner.
            <span className="block text-green-600 italic mt-1">A smarter way to eat.</span>
          </h2>
          <p className="text-[#0D1F12]/60 text-lg mt-6 max-w-2xl mx-auto">
            GoEat AI combines fridge intelligence, budget awareness, and cuisine expertise into one seamless flow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className={`rounded-2xl p-6 card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1 ${
              i === 0 ? "bg-[#0D1F12] text-white sm:col-span-2 lg:col-span-1" : "bg-white"
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`text-3xl w-12 h-12 rounded-xl flex items-center justify-center ${i===0?"bg-green-500/20":"bg-[#F8FAF8]"}`}>{f.icon}</div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${i===0?"bg-green-500/20 text-green-300":f.col}`}>{f.tag}</span>
              </div>
              <h3 className={`font-display font-bold text-xl mb-2 ${i===0?"text-white":"text-[#0D1F12]"}`}>{f.title}</h3>
              <p className={`text-sm leading-relaxed ${i===0?"text-white/65":"text-[#0D1F12]/60"}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
