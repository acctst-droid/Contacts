"use client"
import { useState } from "react";
import Link from "next/link";
import { User, KeyRound, Mail, Eye, EyeOff } from "lucide-react";
export default function LoginPage() {
    const [showpassword, setshowpassword] = useState(false)
    return (
        <div className=" loginpage relative inset-0 min-h-screen w-full  flex p-4 justify-center items-center  bg-linear-to-br from-indigo-900 to-indigo-950">
            <div className="blob blob1 absolute"></div>
            <div className="blob blob2 absolute"></div>
            <div className="blob blob3 absolute"></div>
            <div className="blob blob4 absolute"></div>
            <div className="blob blob5 absolute"></div>
            <div className="blob blob6 absolute"></div>
            <div className="blob blob7 absolute"></div>
            <div className="blob blob8 absolute"></div>
            <div className="blob blob9 absolute"></div>
            <div className="blob blob10 absolute"></div>

            <form className="flex flex-col z-10 justify-center items-center max-w-full p-12 gap-6 bg-white/10 backdrop-blur-2xl rounded-2xl border-white/20 border shadow-lg">
                <div className="bg-gray-400  shadow-2xl rounded-full p-4">
                    <User className="text-white" size={100}></User>
                </div>
                {/* Campo de Email */}
                <div className="group gap-2 relative flex items-center w-full max-w-75">
                    <hr className="pointer-events-none absolute border-white transition ease-in-out duration-300 group-focus-within:scale-110 w-full mt-8" />
                    <Mail className="text-white" />
                    <input
                        className="w-full bg-transparent outline-none text-white placeholder-white"
                        type='email'
                        placeholder="Email ID"
                    />
                </div>

                {/* Campo de Senha */}
                <div className="group gap-2 relative flex items-center w-full max-w-75">
                    <hr className="pointer-events-none absolute border-white w-full mt-8 transition ease-in-out duration-300 group-focus-within:scale-110" />
                    <KeyRound className="text-white" />
                    <input
                        className="w-full bg-transparent outline-none text-white placeholder-white pr-10"
                        type={showpassword ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    <div className="absolute right-0 cursor-pointer text-white flex items-center" onClick={() => setshowpassword(!showpassword)}>
                        {showpassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </div>
                </div>
                <div className="flex justify-between w-full items-center">
                    <Link href='/resetpassword' className=" text-blue-300 hover:text-blue-500 hover:underline text-[12px] cursor-pointer">Forgot your password?</Link>
                    <Link href='/register' className="text-[12px] cursor-pointer text-blue-300 hover:text-blue-500 hover:underline">Sign up</Link>
                </div>
                <button className="cursor-pointer bg-linear-to-r from-indigo-800 to-indigo-950   border-indigo-600 border shadow-2xl text-white rounded-[10px] w-full p-2 transition ease-in-out duration-300 hover:-translate-y-0.5 text-2xl" type='submit'>Login</button>
            </form>
        </div>
    )
}