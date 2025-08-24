import { Sparkles } from "lucide-react";
import { HeroSectionNavigateButton } from "./client-components";

export default function HeroSection() {
  return (
    <div>
      <Island />
      <Slogan />
      <Description />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}

function Island(){
    return (
      <div>
        <Sparkles className="w-4 h-4 animate-pulse text-blue-600 dark:text-blue-400" /> 
          <span className="text-blue-600 font-medium dark:text-blue-300">
            AI-Powered Math Learning Platform
          </span>
      </div>
    )
}

function Slogan() {
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

function Description() {
  return (
    <p className="text-xl lg:text-3xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
      Skip expensive tutoring centers. Master <span className="font-medium text-blue-600 dark:text-blue-400">DSE Math</span> with AI that adapts to YOU.
    </p>
  )
}

function Features() {
  return (
    <div>
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300">
          <span className="text-green-500 font-bold text-xl">✓</span>
          <span>Unlimited practice questions</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300">
          <span className="text-green-500 font-bold text-xl">✓</span>
          <span>Instant step-by-step solutions</span>
        </div>
        <div className="flex items-center justify-center gap-3 text-lg text-slate-700 dark:text-slate-300">
          <span className="text-green-500 font-bold text-xl">✓</span>
          <span>Track weak areas automatically</span>
        </div>
      </div>
    </div>
  )
}

function Products() {

  return (
    <div>
      <HeroSectionNavigateButton target="ai-generator"><span className="relative z-10 flex items-center gap-3 text-xl">Generate Questions</span></HeroSectionNavigateButton>
      <HeroSectionNavigateButton target="ai-generator"><span className="relative z-10 flex items-center gap-3 text-xl">Browse Question Bank</span></HeroSectionNavigateButton>
    </div>
  )
}

function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 text-base text-slate-500 dark:text-slate-400">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse" />
        <span>10,000+ Questions</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse" />
        <span>AI-Powered</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-pulse" />
        <span>DSE Focused</span>
      </div>
    </div>
  )
}