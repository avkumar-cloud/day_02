"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "../Blogs/Navbar";

export default function TopPage(){
  const router = useRouter()
    const handleLogout = async()=>{
        await fetch("/api/auth/logout", {
         method: "POST",
  });

  window.location.href = "/login";
    }
    
    
    return(
        <main className="min-h-screen bg-[#f8f9ff] text-[#1c1f33]">
          <Navbar/>
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
          <div className="relative mt-16 overflow-hidden text-center" >
            <div className="flex w-[60%] animate-marquee gap-14 px-6 mx-auto">
              {["ElevenLabs", "miro", "ceros", "yonder", "desana", "RELEX", "Griffin", "Prolific"].map((brand, index) => (
                <span
                  key={index}
                  className="text-lg font-semibold text-gray-400 whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
      </div>
    </main>
)
}