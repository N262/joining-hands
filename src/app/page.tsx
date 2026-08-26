import BackgroundPlayer from "@/components/BackgroundPlayer";
import EcosystemTriggers from "@/components/EcosystemTriggers";
import AboutOverlay from "@/components/AboutOverlay";

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Background Videos */}
      <BackgroundPlayer />

      {/* Main Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 drop-shadow-[0_4px_15px_rgba(255,255,255,0.4)] text-center tracking-tight">
          The Group of Joining Hands
        </h1>
      </div>

      {/* Floating 3D Menus */}
      <EcosystemTriggers />

      {/* About Overlay */}
      <AboutOverlay />
    </main>
  );
}
