export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-300 flex items-center justify-center font-black text-navy-950 text-xs">
              JP
            </div>
            <span className="font-semibold text-white text-sm">
              JP Trading Capital
            </span>
          </div>

          <p className="text-slate-600 text-sm text-center">
            &copy; {new Date().getFullYear()} JP Trading Capital. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">
              Trading involves risk. Past performance is not indicative of future
              results.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
