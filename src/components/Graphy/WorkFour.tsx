import SlidesThatSpeak from "./SlideSpeak";
import AddData from "./Workone";

export default function TellStory(){
    return (    
        <div>
            <section className="w-full  py-10 px-4">
              <div className="mx-auto max-w-6xl flex gap-6">
                <div className="hidden sm:flex">
                  <span className="text-[48px]  inline-block font-bold text-black leading-none">
                    4
                  </span>
                </div>
                <div className="flex-1 rounded-2xl bg-white border border-[#e6e8ef] shadow-sm">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col h-full">
                   <div className="max-w-2xl">
                    <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#0f172a]">
                      Tell your <span className="text-[#3b5cff]">story</span>
                    </h2>
                     <p className="mt-3 text-[14px] leading-relaxed text-[#475569]">
                      Export or embed-your call
                     </p>
                   </div>
                  <div className="flex-1 flex items-center flex-col justify-center mt-10">
                    <SlidesThatSpeak 
                    h2="Slides That Speaks"  
                    p= "When you need the data to do the talking"
                    imgUrl="https://framerusercontent.com/images/EYt516Id2bPkgWucf8l2lmAh8J0.png?width=4740&height=3246"
                    />
                    <SlidesThatSpeak 
                    h2="Social posts that perform"  
                    p= "Share insights that actually get seen"
                    imgUrl="https://framerusercontent.com/images/afIBFiaKQ8DKbi2MgZrx7MbCQ.png?width=4737&height=3246"
                    />
                    <SlidesThatSpeak 
                    h2="Docs with direction"  
                    p= "Clarity for teams, right where they work"
                    imgUrl="https://framerusercontent.com/images/Rl6jo2Yro4l6wCzc28YEvIEEa8.png?width=4740&height=3246"
                    />
                    <SlidesThatSpeak 
                    h2="Updates that land"  
                    p= {`Keep your team in the loop without 
                        sending them to a dashboard`}
                    imgUrl="https://framerusercontent.com/images/dLXX0TlgXQuA6BwRg2rPMq9PjVg.png?width=4740&height=3246"
                    />
                  </div>
              </div>
            </div>
        </div>
    </section>
  </div>
    )
}