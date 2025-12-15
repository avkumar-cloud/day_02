import BlogFeatureCard from "./BlogCard";

export function BlogHero() {
  return (
    <>
      <section className="relative w-full h-[420px]  flex items-center justify-center">

      {/* LEFT ICONS */}

      {/* Top-left bar chart */}
      <img
        src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
        alt=""
        className="absolute left-[110px] top-[130px] drop-shadow-[0_0_25px_rgba(255,215,120,0.6)]"
      />

      {/* Slightly right bar chart */}
      <img
        src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
        alt=""
        className="absolute left-[260px] top-[130px] rotate-6 drop-shadow-[0_0_25px_rgba(255,215,120,0.6)]"
      />

      {/* Bottom-left donut */}
      <img
        src="https://framerusercontent.com/images/Gpdri8U12xk2xoEiaYodh76ZV0M.svg"
        alt=""
        className=" absolute left-[180px] bottom-[-45px] drop-shadow-[0_0_30px_rgba(255,215,120,0.7)]"
      />

      {/* RIGHT ICONS */}

      {/* Top-right grid */}
      <img
        src="https://framerusercontent.com/images/qL3vfoHxHmLgdKJuoCRtlbTak.svg"
        alt=""
        className="absolute right-[260px] top-[130px] drop-shadow-[0_0_25px_rgba(255,215,120,0.6)]"
      />

      {/* Tall rectangle */}
      <img
        src="https://framerusercontent.com/images/1PvWhyQHY47Woe0qWmrQ2V7clzs.svg"
        alt=""
        className="absolute right-[130px] top-[130px] rotate-0 drop-shadow-[0_0_25px_rgba(255,215,120,0.6)]"
      />

      {/* Bottom-right pie */}
      <img
        src="https://framerusercontent.com/images/kHZueVf59pHB0gMCYa5GP4mdrQ.png?scale-down-to=512"
        alt=""
        className="w-44 absolute right-[190px] bottom-[-45px] drop-shadow-[0_0_30px_rgba(255,215,120,0.7)]"
      />

      {/* CENTER TITLE */}
      <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight relative z-10">
        The Graphy blog
      </h1>

      {/* SMALL DUST DOTS (optional but matches UI) */}
      <span className="absolute left-[220px] top-[140px] w-1 h-1 bg-white/40 rounded-full" />
      <span className="absolute right-[260px] top-[150px] w-1 h-1 bg-white/40 rounded-full" />
      <span className="absolute left-[300px] bottom-[120px] w-1 h-1 bg-white/40 rounded-full" />
      <span className="absolute right-[300px] bottom-[130px] w-1 h-1 bg-white/40 rounded-full" />
      
      </section>
    </>
    
  );
}
