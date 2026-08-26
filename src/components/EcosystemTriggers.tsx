export default function EcosystemTriggers() {
  return (
    <>
      {/* Left MENU Trigger */}
      <div className="fixed top-[90px] left-6 w-[100px] h-[100px] z-[1000] cursor-pointer group select-none">
        <div className="w-full h-full rounded-[22px] bg-white/10 border-[1.5px] border-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.45)] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-y-[-5deg] group-hover:shadow-[0_12px_28px_rgba(124,58,237,0.2)] group-active:translate-y-px">
          <div className="w-[72px] h-[72px] rounded-full bg-white/30 border border-white/40 shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_8px_rgba(255,255,255,0.6)] flex items-center justify-center transition-transform transform-gpu translate-z-12">
            <div className="w-[60px] h-[60px] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
              <span className="text-white text-[0.8rem] font-bold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">MENU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right SETTING Trigger */}
      <div className="fixed top-[90px] right-6 w-[100px] h-[100px] z-[1000] cursor-pointer group select-none">
        <div className="w-full h-full rounded-[22px] bg-white/10 border-[1.5px] border-white/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.45)] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-y-5 group-hover:shadow-[0_12px_28px_rgba(124,58,237,0.2)] group-active:translate-y-px">
          <div className="w-[72px] h-[72px] rounded-full bg-white/30 border border-white/40 shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_2px_8px_rgba(255,255,255,0.6)] flex items-center justify-center transition-transform transform-gpu translate-z-12">
            <div className="w-[60px] h-[60px] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
              <span className="text-white text-[0.65rem] font-bold tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">SETTING</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
