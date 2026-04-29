import Image from "next/image";
import Link from "next/link";
import { User2, Zap, EyeOff, Feather, LucideIcon } from 'lucide-react';
// import noise from '../../public/ruido.avif' // Removi o comentário se for usar

export function Logo() {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <span className="text-white font-bold animar-entrada text-[10svw] lg:text-6xl">Contacts</span>
      <User2 className="text-blue-400 animar-entrada" size={80}></User2>
    </div>
  )
}
export function FeatureCard({ CardName, CardMessage, Icon }: { CardName: string, CardMessage: string, Icon: LucideIcon }) {
  return (
    <div className="relative w-75 h-75 overflow-hidden rounded-2xl p-px shrink-0 animar-entrada transition transform ease-in-out duration-300 hover:-translate-y-3">
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute -inset-full animate-spin [animation-duration:4s] bg-[conic-gradient(from_0deg,#06b6d4_0deg,#06b6d4_40deg,transparent_60deg)]" />
      </span>
      <div className="relative z-10 w-full h-full p-8 bg-linear-to-br from-blue-700 shadow-2xl to-blue-800 backdrop-blur-3xl rounded-2xl flex-col justify-center flex items-center gap-2 text-center">
        <Icon className="text-cyan-300 drop-shadow-[0px_0px_20px_rgb(103,232,249)]" size={80}></Icon>
        <span className="text-white text-3xl">{CardName}</span>
        <p className="text-white text-[12px] mt-4">
          {CardMessage}</p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="homepage min-h-screen overflow-x-hidden w-full flex flex-col justify-start items-center gap-4  p-4 bg-linear-to-r from-indigo-900 to-indigo-950">
      <Logo />
      <p className="text-blue-200 text-[3svw] mt-10 lg:text-[30px] text-center animar-entrada">
        A website made for talking. It provides a simple interface where users can register an account and exchange messages with their contacts in real-time,
        focusing only on basic and direct communication.
      </p>

      <div className="flex justify-center items-center mt-10 gap-5">
        <Link href='/login' className="cursor-pointer hover:border-blue-600 transition transform duration-300 hover:-translate-y-0.5 border-2 text-3xl animar-entrada border-blue-300 text-white rounded-lg bg-linear-to-r from-blue-400 to-blue-500 hover:bg-blue-500/80 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%,transparent_100%)] before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-position-[-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] shadow-[0px_0px_10px_rgb(96,165,250,0.5)] px-6 p-2">
          Login
        </Link>
        <Link href='/register' className="transition transform duration-300 hover:-translate-y-0.5 hover:border-blue-600 backdrop-blur-3xl cursor-pointer border-2 text-3xl text-white hover:bg-black/50 animar-entrada rounded-lg bg-black/10 shadow-[0px_0px_10px_rgb(96,165,250,0.5)] px-6 p-2 border-blue-400">
          Register
        </Link>
      </div>

      <div className="flex justify-center flex-col lg:flex-row gap-8 items-center">
        <FeatureCard CardName="Fast" CardMessage="Real-time messages with almost no delay, focusing on instant, direct and responsive communication." Icon={Zap}></FeatureCard>
        <FeatureCard CardName="Light" CardMessage="This is a very simple website, no heavy code running in your device, can run even on low-end PC's and phones" Icon={Feather}></FeatureCard>
        <FeatureCard CardName="No distractions" CardMessage="Focused on direct messages without advertisement, infinite scroll or anything that could distract you." Icon={EyeOff}></FeatureCard>
      </div>
    </div>
  );
}