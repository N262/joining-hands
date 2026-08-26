import BackgroundPlayer from "@/components/BackgroundPlayer";
import EcosystemTriggers from "@/components/EcosystemTriggers";
import AboutOverlay from "@/components/AboutOverlay";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden font-sans">
      {/* Background Videos */}
      <BackgroundPlayer />

      {/* Main Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-[900] text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)] text-center tracking-tight mt-[10px] mb-0">
          The Group of Joining Hands
        </h1>
      </div>

      {/* Floating 3D Menus */}
      <EcosystemTriggers />

      {/* Bottom Ecosystem App Hub */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-[1001]">
        {/* App Tile 1 (Purple/Swastika) */}
        <div className="w-[85px] h-[85px] rounded-[24px] bg-gradient-to-br from-purple-500 to-purple-800 shadow-[0_15px_35px_rgba(147,51,234,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center border-t border-white/30 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
           <div className="w-[60px] h-[60px] rounded-full bg-purple-400/20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center border border-white/10">
              <span className="text-white text-3xl opacity-90 drop-shadow-md">卐</span>
           </div>
        </div>
        {/* App Tile 2 (Orange/Blank) */}
        <div className="w-[85px] h-[85px] rounded-[24px] bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_15px_35px_rgba(249,115,22,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center border-t border-white/30 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
           <div className="w-[60px] h-[60px] rounded-full bg-orange-400/20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center border border-white/10"></div>
        </div>
        {/* App Tile 3 (Red/Blank) */}
        <div className="w-[85px] h-[85px] rounded-[24px] bg-gradient-to-br from-red-500 to-red-700 shadow-[0_15px_35px_rgba(239,68,68,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center border-t border-white/30 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
           <div className="w-[60px] h-[60px] rounded-full bg-red-400/20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center border border-white/10"></div>
        </div>
        {/* App Tile 4 (Yellow/Blank) */}
        <div className="w-[85px] h-[85px] rounded-[24px] bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_15px_35px_rgba(234,179,8,0.4),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center border-t border-white/30 cursor-pointer hover:-translate-y-2 transition-transform duration-300">
           <div className="w-[60px] h-[60px] rounded-full bg-yellow-400/20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.2)] flex items-center justify-center border border-white/10"></div>
        </div>
      </div>

      {/* About Overlay */}
      <AboutOverlay />
    </main>
  );
}
