export default function ShineData(){
    return (
        <div>
            <section className="w-full  py-10 px-4">
              <div className="mx-auto max-w-6xl flex gap-6">
                <div className="hidden sm:flex">
                  <span className="text-[48px]  inline-block font-bold text-black leading-none">
                    3
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-white border border-[#e6e8ef] shadow-sm">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                   <div className="max-w-2xl">
                    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0f172a]">
                      Make your data <span className="text-[#3b5cff]">shine</span> 
                    </h2>
                     <p className="mt-3 text-[14px] leading-relaxed text-[#475569]">
                      Instantly brand all your charts with your colors and fonts. 
                      Then, use annotations to call out the big wins.
                     </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center mt-10">
                    <video 
                    src="https://assets.graphy.app/video/Graphy_Web_D.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="100%"
                    ></video>
                  </div>
              </div>
            </div>
        </div>
    </section>
  </div>
    )
}