"use client"

import { useRouter } from "next/navigation";

export default function Navbar(){
    const router = useRouter()

    const handleLogout = async()=>{
        await fetch("/api/auth/logout", {
         method: "POST",
        });
        window.location.href = "/login";
    }
           
    return(
        <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[90%] px-10 py-4 flex items-center justify-between rounded-xl backdrop-blur-md border border-white/5 ">
             <div className="flex items-center gap-2 text-2xl font-semibold select-none">
                    <button
                        className="font-bold tracking-tight cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        Graphy
                    </button>
                    <button
                        className="ml-4 px-2 py-1 rounded-lg text-sm hover:text-blue-400 cursor-pointer"
                        onClick={()=>{handleLogout}}
                    >
                     Logout
                    </button>
                </div>
                <div className="flex items-center gap-8 text-sm">
                    <span className="hover:text-blue-400">
                        <button 
                        onClick={()=>router.push("/")}
                        className="cursor-pointer"
                        >
                            Graphs
                        </button>
                    </span>
                    <span className="hover:text-blue-400">
                        <button 
                        onClick={()=>router.push("/blogs")}
                        className="cursor-pointer">
                            Blog
                        </button>
                    </span>
                    <span className="hover:text-blue-400">
                        <button 
                        onClick={()=> router.push("/pricing")}
                        className="cursor-pointer">
                            Pricing
                        </button>
                    </span>
                    <button
                        className="hover:text-blue-400 cursor-pointer"
                        onClick={()=>router.push("/login")}
                    >
                        Log in
                    </button>
                    <button
                        className="hover:text-blue-400 cursor-pointer"
                        onClick={()=>router.push("/signup")}
                    >
                        Sign up
                    </button>
                </div>
            </nav>
    )
}