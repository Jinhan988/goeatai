export default function Footer() {
  return (
    <footer className="bg-[#0D1F12] border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center text-sm">🛒</div>
            <span className="font-display font-black text-white text-lg">
              Go<span className="text-orange-500">Eat</span>
              <span className="text-[9px] bg-green-500 text-[#0D1F12] font-bold px-1.5 py-0.5 rounded ml-1 align-middle">AI</span>
            </span>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {["Privacy Policy","Terms of Service","Contact"].map(l => (
              <a key={l} href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">{l}</a>
            ))}
          </div>
          <div className="text-white/30 text-xs text-center md:text-right">
            <div>© 2025 GoEat AI. All rights reserved.</div>
            <div className="mt-1">❤️ Supporting food banks worldwide</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
