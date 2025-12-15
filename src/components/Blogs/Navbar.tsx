import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Navbar(){
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
        <nav className="fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[90%] px-10 py-4 flex items-center justify-between rounded-xl backdrop-blur-xl bg-black/40 border border-white/10 text-white">
                <div className="flex items-center gap-2 text-2xl font-semibold select-none">
                    <svg className="w-7 h-7">
                    <path
                        d="M 10.111 1.21 C 10.569 0.422 11.581 0.154 12.372 0.61 C 13.162 1.066 13.432 2.075 12.974 2.863 L 6.382 14.242 C 5.924 15.03 4.912 15.298 4.121 14.842 C 3.331 14.386 3.061 13.377 3.519 12.589 Z"
                        fill="white"
                    />
                    </svg>
                    <button
                    className="font-bold tracking-tight"
                    onClick={() => router.push("/")}
                    >
                        Graphy
                    </button>
                    <button
                    className="ml-4 bg-red-500/80 hover:bg-red-500 px-2 py-1 rounded-lg text-sm"
                    onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
                <div className="flex items-center gap-8 text-sm">
                    <span className="cursor-pointer hover:text-blue-400">
                        <button onClick={()=>router.push("/")}>
                            Graphs
                        </button>
                    </span>
                    <span className="cursor-pointer hover:text-blue-400">
                        <button onClick={()=>router.push("/blogs")}>
                            Blog
                        </button>
                    </span>
                    <span className="cursor-pointer hover:text-blue-400">
                        <button onClick={()=> router.push("/pricing")}>
                            Pricing
                        </button>
                    </span>
                    <button
                        className="px-4 py-2 rounded-xl hover:bg-white/10"
                        onClick={handleLogin}
                    >
                        Log in
                    </button>
                    <button
                        className="px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-gray-200"
                        onClick={handleLogin}
                    >
                        Sign up
                    </button>
                </div>
            </nav>
    )
}