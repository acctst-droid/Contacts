import Image from "next/image";
import Link from "next/link";
import { User2 } from 'lucide-react';
// import noise from '../../public/ruido.avif' // Removi o comentário se for usar

export function Logo() {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <span className="text-white font-bold animar-entrada text-[10svw] lg:text-5xl">Contacts</span>
      <User2 className="text-blue-400 animar-entrada" size={40}></User2>
    </div>
  )
}

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-start items-center overflow-hidden gap-4">
      {/* Bloco de segurança para a animação funcionar sem depender do globals.css bugado */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animar-entrada {
          animation: fadeDown 0.8s ease-out forwards !important;
        }
      `}} />

      <Logo></Logo>
      <p className="text-blue-200 text-[3svw] mt-10 lg:text-[30px] text-center animar-entrada">
        A website made for talking. It provides a simple interface where users can register an account and exchange messages with their contacts in real-time, 
        focusing only on basic and direct communication.
      </p>
      <div className="flex justify-center items-center mt-10 gap-5">
        <button className="cursor-pointer border-2 text-3xl animar-entrada border-blue-300 text-white rounded-lg bg-linear-to-r from-blue-300 to-blue-500 hover:bg-blue-500/80 relative  before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] shadow-[0px_0px_10px_rgb(96,165,250,0.5)] px-6 p-2 ">
          Login
        </button>  
        <button className="cursor-pointer border-2 text-3xl text-white animar-entrada rounded-lg bg-black/10 shadow-[0px_0px_10px_rgb(96,165,250,0.5)] px-6 p-2 border-blue-400">
          Register
        </button>  
      </div>
    </div>
  );
}