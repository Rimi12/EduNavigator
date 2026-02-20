import { modules } from "@/data/courseData";
import { ModuleCard } from "@/components/ModuleCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] p-4 sm:p-8 pb-20 gap-10">

      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-8 sm:p-12 border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-primary/20 text-indigo-300 text-sm font-medium border border-primary/30 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
            1 Hetes Intenzív Képzés
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Ismerd meg az AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 ml-3">
              Valós Erejét
            </span>
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            Kezdőtől a haladó szintig. Sajátítsd el a generatív AI, az autonóm ügynökök és a RAG technológiák gyakorlati alkalmazását lépésről lépésre.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex items-end justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Képzési Modulok</h2>
            <p className="text-muted-foreground mt-1">Válaszd ki a modult a tanulás megkezdéséhez</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

    </div>
  );
}
