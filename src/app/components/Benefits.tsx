const FEATURES = [
  "Actionable insights",
  "No ambiguity",
  "Fewer meetings",
  "Faster decisions",
  "Stronger alignment",
  "Shared understanding",
];

export default function Benefit() {
  return (
    <div className="w-full h-full p-3">
      <svg
        width="164"
        height="164"
        viewBox="0 0 184 184"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
        >
        <defs>
            <radialGradient
            id="svg362473231_10318_paint0_radial_28_3041"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(92 92) scale(92)"
            >
            <stop offset="0%" stopColor="#e7e2e2ff" />
            <stop offset="100%" stopColor="#191818ff" />
            </radialGradient>
        </defs>

        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.969 49.4622C104.391 45.2184 109.776 43.7612 113.997 46.1969C118.218 48.6326 119.667 54.0465 117.245 58.2903L82.0699 119.555C79.6473 123.799 74.2626 125.256 70.0416 122.821C65.8207 120.385 64.3713 114.971 66.7939 110.727L101.969 49.4622Z"
            fill="url(#svg362473231_10318_paint0_radial_28_3041)"
            fillOpacity="0.6"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M66.7832 49.4303C69.2269 45.1864 74.6327 43.7399 78.8432 46.1969C83.0641 48.6539 84.5029 54.0784 82.0591 58.3222L64.4664 88.9547C62.0227 93.1986 56.6274 94.6452 52.4064 92.1882C48.1854 89.7312 46.7467 84.3067 49.1904 80.0628L66.7832 49.4303Z"
            fill="url(#svg362473231_10318_paint0_radial_28_3041)"
            fillOpacity="0.6"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M119.551 80.0947C121.974 75.8508 127.358 74.3936 131.579 76.8293C135.8 79.265 137.25 84.6789 134.827 88.9228L117.234 119.555C114.812 123.799 109.427 125.256 105.206 122.821C100.985 120.385 99.5357 114.971 101.958 110.727L119.551 80.0947Z"
            fill="url(#svg362473231_10318_paint0_radial_28_3041)"
            fillOpacity="0.6"
        />
      </svg>
      <h2 className="text-center text-3xl font-bold mb-8"
        data-styles-preset="oqyF_Rwy0"
        style={{ "color": "rgb(32, 41, 90)" }}>
        Benefits of data storytelling
      </h2>
      <div className="text-center justify-center flex items-end ">
        <img src="https://framerusercontent.com/images/WfyKifX0DZV0QReD06r0Yo4SMo.png?width=1770&height=1770"
        style={{height: "230px", width: "250px"}}
        alt="" />
        <img src="https://framerusercontent.com/images/gvkgyyQfCON5VEI6KAVUmi40.png?width=2163&height=1956"
        style={{height: "270px", width: "330px", zIndex: "10"}}
        alt="" />
        <img src="https://framerusercontent.com/images/4LWMp0S0psUuFX0b1pa9G5elGs.png?width=1180&height=1075"
         alt=""
         className="object-contain block -ml-20"
         style={{height: "200px", width: "250px"}}
         />
      </div>
      <div
      className="flex w-[70%] items-center justify-between px-[10px] py-[10px] mx-auto m-10 rounded-[14px] border border-[#e5eaf1] bg-gradient-to-b from-[#f4f7fb] to-[#eef2f7]"
      >
      {FEATURES.map((item) => (
        <div
          key={item}
          className="flex flex-col items-center gap-[5px] min-w-[35px]"
        >
          <span
            className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-[#3b82f6] text-[8px] font-bold leading-none text-white "
          >
            ✓
          </span>

          <span
            className="text-[12px] font-medium text-[#0f172a] text-center whitespace-nowrap"
          >
            {item}
          </span>
        </div>
      ))}
      </div>
      <h2 className="text-center text-3xl font-bold">
          How it works
        </h2>
    </div>
  );
}
