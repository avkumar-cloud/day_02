export default function AddData(){
    return (
        <div> 
            <section className="w-full  py-10 px-4">
              <div className="mx-auto max-w-6xl flex gap-6">
                <div className="hidden sm:flex">
                  <span className="text-[48px]  inline-block font-bold text-black leading-none">
                    1
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-white border border-[#e6e8ef] shadow-sm">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                   <div className="max-w-2xl">
                    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0f172a]">
                      <span className="text-[#3b5cff]">Add</span> your data
                    </h2>
                     <p className="mt-3 text-[14px] leading-relaxed text-[#475569]">
                      Link a live Google Sheet, upload a CSV or Excel file, paste or
                      type values, call our API, or ask AI to search for data.
                     </p>
                    <p className="mt-2 text-[14px] text-[#475569]">
                      <span className="font-medium">
                        No need to prepare or format,
                      </span>{" "}
                      Graphy ingests it all.
                    </p>
                  </div>
                  <div className="flex-1 flex items-center justify-center mt-10">
                    <video 
                    src="https://assets.graphy.app/video/Graphy_Gif_A_Light_02.mp4"
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