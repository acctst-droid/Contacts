import Image from "next/image";
import Link from "next/link";
import { User2, Zap, Feather, Square } from 'lucide-react';
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
    <div className="min-h-screen overflow-x-hidden w-full flex flex-col justify-start items-center gap-4">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animar-entrada {
          animation: fadeDown 0.8s ease-out forwards !important;
        }
      `}} />

      <Logo />
      <p className="text-blue-200 text-[3svw] mt-10 lg:text-[30px] text-center animar-entrada">
        A website made for talking. It provides a simple interface where users can register an account and exchange messages with their contacts in real-time,
        focusing only on basic and direct communication.
      </p>

      <div className="flex justify-center items-center mt-10 gap-5">
        <Link href='/login' className="cursor-pointer border-2 text-3xl animar-entrada border-blue-300 text-white rounded-lg bg-linear-to-r from-blue-400 to-blue-500 hover:bg-blue-500/80 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] shadow-[0px_0px_10px_rgb(96,165,250,0.5)] px-6 p-2">
          Login
        </Link>
        <Link href='/register' className="backdrop-blur-3xl cursor-pointer border-2 text-3xl text-white hover:bg-black/50 animar-entrada rounded-lg bg-black/10 shadow-[0px_0px_10px_rgb(96,165,250,0.5)] px-6 p-2 border-blue-400">
          Register
        </Link>
      </div>

      <div className="flex justify-center flex-col lg:flex-row gap-8 mt-10 items-center">
        {/* Card Fast */}
        <div className="relative w-75 h-75 overflow-hidden rounded-2xl p-px shrink-0 animar-entrada transition transform ease-in-out duration-300 hover:-translate-y-3">
          <span className="absolute inset-0 pointer-events-none">
            <span className="absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,#06b6d4_0deg,#06b6d4_40deg,transparent_60deg)]" />
          </span>
          <div className="relative z-10 w-full h-full p-8 bg-linear-to-br from-blue-700 shadow-2xl to-blue-800 backdrop-blur-3xl rounded-2xl flex-col justify-center flex items-center gap-2 text-center">
            <Zap className="text-cyan-300 drop-shadow-[0px_0px_20px_rgb(103,232,249)]" size={80}></Zap>
            <span className="text-white text-3xl">Fast</span>
            <p className="text-white text-[12px] mt-4">
              Real-time messages with almost no delay,
              focusing on instant, direct
              and responsive communication.</p>
          </div>
        </div>

        {/* Card Clean */}
        <div className="relative h-75 w-75 overflow-hidden rounded-2xl p-px shrink-0 animar-entrada transition transform ease-in-out duration-300 hover:-translate-y-3">
          <span className="absolute inset-0 pointer-events-none">
            <span className="absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,#06b6d4_0deg,#06b6d4_40deg,transparent_60deg)]" />
          </span>
          <div className="relative z-10 w-full h-full p-8 bg-linear-to-br from-blue-700 shadow-2xl to-blue-800 backdrop-blur-3xl rounded-2xl flex-col justify-center flex items-center gap-2 text-center">
            <Square className="text-cyan-300 drop-shadow-[0px_0px_20px_rgb(103,232,249)]" size={80}></Square>
            <span className="text-white text-3xl">Clean</span>
            <p className="text-white text-[12px] mt-4">Minimalist interface with no visual clutter,
              focusing on simple, essential
              and distraction-free design.</p>
          </div>
        </div>

        {/* Card Light */}
        <div className="relative h-75 w-75 overflow-hidden rounded-2xl p-px shrink-0 animar-entrada transition transform ease-in-out duration-300 hover:-translate-y-3">
          <span className="absolute inset-0 pointer-events-none">
            <span className="absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,#06b6d4_0deg,#06b6d4_40deg,transparent_60deg)]" />
          </span>
          <div className="relative z-10 w-full h-full p-8 bg-linear-to-br from-blue-700 shadow-2xl to-blue-800 backdrop-blur-3xl rounded-2xl flex-col justify-center flex items-center gap-2 text-center">
            <Feather className="text-cyan-300 drop-shadow-[0px_0px_20px_rgb(103,232,249)]" size={80}></Feather>
            <span className="text-white text-3xl">Light</span>
            <p className="text-white text-[12px] mt-4">Lightweight codebase with no heavy dependencies,
              focusing on essential, direct
              and simple functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
}