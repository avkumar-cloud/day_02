export default function GlowIcon({ src, className, size = 120 }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,120,0.6) 0%, rgba(255,215,120,0.25) 40%, rgba(255,215,120,0) 75%)",
          }}
        />
        <img src={src} alt="" className="relative z-10" />
      </div>
    </div>
  );
}
