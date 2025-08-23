import { Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <div>
            <HeroSectionIsland />
            <HeroSectionTitle />
        </div>
    );
}

function HeroSectionIsland(){
    return (
        <div>
          <Sparkles className="w-4 h-4 animate-pulse text-blue-600 dark:text-blue-400" /> 
            <span className="text-blue-600 font-medium dark:text-blue-300">
              AI-Powered Math Learning Platform
            </span>
        </div>
    )
}

function HeroSectionTitle() {
    return (
        <div>
                        <h1 className="text-6xl lg:text-9xl font-bold leading-tight tracking-tight">
                <div className="flex flex-col items-center gap-4 mb-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:justify-start sm:pl-8">
                    <span className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors duration-300 text-4xl lg:text-6xl font-normal tracking-wide">
                      Pay
                    </span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent font-bold text-7xl lg:text-[12rem] drop-shadow-2xl">
                        10%
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 via-green-500/30 to-teal-600/30 rounded-2xl blur-2xl animate-pulse" />
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 sm:justify-end sm:pr-8">
                    <span className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors duration-300 text-4xl lg:text-6xl font-normal tracking-wide">
                      Achieve
                    </span>
                    <span className="relative">
                      <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-bold text-7xl lg:text-[12rem] drop-shadow-2xl">
                        200%
                      </span>
                      <div className="absolute -inset-2 bg-gradient-to-r from-violet-400/30 via-purple-500/30 to-indigo-600/30 rounded-2xl blur-2xl animate-pulse" />
                    </span>
                  </div>
                </div>
              </h1>
        </div>
    )
}