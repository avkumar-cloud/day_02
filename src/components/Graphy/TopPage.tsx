"use client"

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function TopPage(){
  const router = useRouter()
    const handleLogin = async() =>{
        await signIn("google", {
        callbackUrl: "/",
        prompt: "select_account", 
        redirect: true
    });
    
    }
    const handleLogout = async() =>{
        await signOut({
        redirect: false,
        
    });
    }
    return(
        <main className="min-h-screen bg-[#f8f9ff] text-[#1c1f33]">
          <nav className="z-50 w-[90%] left-1/2 -translate-x-1/2 flex justify-between items-center px-10 mt-6 opacity-[80%] rounded-lg fixed py-4 backdrop-blur-md bg-white/60 border-b border-gray-200">
            <div className="flex items-center gap-2 text-2xl font-semibold select-none">
              <svg className="w-7 h-7 drop-shadow-sm">
              <path d="M 10.111 1.21 C 10.569 0.422 11.581 0.154 12.372 0.61 C 13.162 1.066 13.432 2.075 12.974 2.863 L 6.382 14.242 C 5.924 15.03 4.912 15.298 4.121 14.842 C 3.331 14.386 3.061 13.377 3.519 12.589 Z M 13.408 6.9 C 13.865 6.112 14.877 5.843 15.668 6.3 C 16.458 6.756 16.728 7.764 16.27 8.552 L 12.974 14.242 C 12.516 15.03 11.504 15.298 10.714 14.842 C 9.923 14.386 9.654 13.377 10.111 12.589 Z M 3.519 1.21 C 3.977 0.422 4.989 0.154 5.78 0.61 C 6.57 1.066 6.84 2.075 6.382 2.863 L 3.086 8.552 C 2.628 9.34 1.616 9.609 0.825 9.152 C 0.035 8.696 -0.235 7.688 0.223 6.9 Z" fill="#1c1f33"></path>
              </svg>
              <span className="font-bold tracking-tight">
                <button onClick={()=>router.push("/")}>
                  Graphy
                </button>
              </span>
              <button 
              className="bg-red-500 rounded-lg px-2 py-1 cursor-pointer"
              onClick={()=>handleLogout()}>Logout</button>
            </div>
            <div className="flex gap-8 text-sm items-center">
              <span className="cursor-pointer hover:text-blue-600">
                <button onClick={()=>router.push("/")}>
                    Graphs
                </button>
              </span>
              <span className="cursor-pointer hover:text-blue-600">
                <button onClick={()=>router.push("/blogs")}>
                  Blog
                </button>
              </span>
              <span className="cursor-pointer hover:text-blue-600">
                <button onClick={()=>router.push("/pricing")}>
                  Pricing
                </button>
              </span>
              <button 
              className="px-4 py-2 rounded-xl hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLogin()}
              >Log in</button>
              <button 
              className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700"
              onClick={() => handleLogin()}
              >Sign up</button>
            </div>
          </nav>
          <div style={{ paddingTop: "40px", width:"100%", height:"500px",  display:"flex", justifyContent:"space-around"}}>
            <div style={{ width:"30%", height:"500px", position:"relative", opacity:0.5}}>
              <img
                className="absolute left-[40px] top-[80px] rotate-280" 
                src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
                alt=""
              />
              <img
                className="absolute right-[40px] top-[80px]"
                src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
                alt=""
              />
              <img
                className="absolute left-1/2 bottom-[60px] -translate-x-1/2"
                src="https://framerusercontent.com/images/Gpdri8U12xk2xoEiaYodh76ZV0M.svg"
                alt=""
              />
            </div>
            <div  className="flex flex-col items-center text-center mt-20 px-6"
             style={{ width:"30%", height:"500px" }} >
              <p className="text-xs tracking-wide text-blue-500 mb-2">ANNOUNCING GRAPHY AI</p>
              <h1 className="text-5xl sm:text-6xl font-bold max-w-3xl">The AI Graph Maker</h1>
              <p className="text-gray-600 mt-4 max-w-xl">
                From messy data to beautiful graphs in a click, Graphy is the fastest
                way to tell stories with data.
              </p>
            </div>
             <div style={{ width:"30%", height:"500px", position:"relative" }}>
                <img
                  className="absolute left-[40px] top-[80px]"
                  src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
                  alt=""
                />    
                <img
                  className="absolute right-[40px] top-[80px]"
                  src="https://framerusercontent.com/images/fqoIRNvwFUExCG171SurB7yxOc.svg"
                  alt=""
                />
                <img
                  className="absolute left-1/2 bottom-[60px] -translate-x-1/2"
                  src="https://framerusercontent.com/images/Gpdri8U12xk2xoEiaYodh76ZV0M.svg"
                  alt=""
                />
            </div>
          </div>
          <section className="relative overflow-hidden mt-20 pb-20">
              <div className="whitespace-nowrap flex items-center animate-scroll-left opacity-70">
                {["ElevenLabs", "miro", "ceros", "yonder", "desana", "RELEX", "Griffin", "Prolific"].map((logo) => (
                <span key={logo} className="mx-10 text-lg font-medium text-gray-500">
                {logo}
                </span>
                ))}
                {["ElevenLabs", "miro", "ceros", "yonder", "desana", "RELEX", "Griffin", "Prolific"].map((logo) => (
                <span key={logo + "-copy"} className="mx-10 text-lg font-medium text-gray-500">
                {logo}
                </span>
                ))}
              </div>
          </section>
    </main>
)
}