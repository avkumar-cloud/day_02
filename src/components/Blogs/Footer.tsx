import BottomInfo from "./BottomInfo";
import GlowIcon from "./GlowIcon";

export default function Footer() {
    
  return (
    <section className="relative w-full min-h-screen">

      {/* STAR DOTS */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* LOGO */}
      <div className="absolute top-30 w-full flex justify-center text-sm font-medium opacity-80">
        // Graphy
      </div>

      {/* HERO CONTENT */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-72] z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          The AI Graph Maker
        </h1>

        <p className="max-w-2xl text-gray-300 text-lg mb-10">
          From messy data to beautiful graphs in a click, Graphy is the
          fastest way to tell stories with data.
        </p>

        <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
          Start for free
        </button>
      </div>

      {/* LEFT ICONS */}
      <GlowIcon
        src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
        className="left-[180px] top-[260px]"
      />
      <GlowIcon
        src="https://framerusercontent.com/images/Gpdri8U12xk2xoEiaYodh76ZV0M.svg"
        className="left-[320px] top-[240px]"
        size={140}
      />
      <GlowIcon
        src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
        className="left-[260px] bottom-[280px] rotate-12"
      />

      {/* RIGHT ICONS */}
      <GlowIcon
        src="https://framerusercontent.com/images/qL3vfoHxHmLgdKJuoCRtlbTak.svg"
        className="right-[320px] top-[260px]"
      />
      <GlowIcon
        src="https://framerusercontent.com/images/1PvWhyQHY47Woe0qWmrQ2V7clzs.svg"
        className="right-[200px] top-[240px]"
      />
      <GlowIcon
        src="https://framerusercontent.com/images/kHZueVf59pHB0gMCYa5GP4mdrQ.png?scale-down-to=512"
        className="right-[260px] bottom-[260px]"
        size={160}
      />

      {/* BOTTOM INFO */}
      <BottomInfo />
    </section>
  );
}
