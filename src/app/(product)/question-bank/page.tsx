import Link from "next/link";
import Head from "next/head";
import { nestMathTopicsByForm } from "@/app/utils/NestMathTopics";
import { formUIColor } from '@/app/_globals/mathTopics'

export default function QuestionBankPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Header />
        <QuestionTopicBank />
        <PracticeSessionCTA />
      </div>
    </div>
  );
}



function Header() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Question Bank
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed whitespace-nowrap">Explore our comprehensive collection of topics from Junior Form to Form 6</p>
    </div>
  )
}

function QuestionTopicBank() {
  return (
    <>

      {/* Topics by Form - 4 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {Object.entries(nestMathTopicsByForm()).map(([formName, topics]) => (
          <div key={formName} className="relative">
            {/* Form Header */}
            <div className="text-center mb-8">
              <div 
                className="h-1 w-full rounded-full mx-auto mb-4"
                style={{ backgroundColor: formUIColor[formName] }}
              />
              <h2 className="text-2xl font-bold text-gray-800">
                {formName}
              </h2>
            </div>
          
        {/* Topics Grid - Browse Only */}
            <div className="space-y-6">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="group relative bg-white rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <Link href={`/question-bank/${topic.id}`}>
                    {/* Gradient Background Effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ backgroundColor: formUIColor[formName] }}
                    />
                    
                    {/* Topic Icon & Count */}
                                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-all duration-300"
                          style={{ backgroundColor: `${formUIColor[formName]}15`, border: `2px solid ${formUIColor[formName]}30` }}
                        >
                          {topic.icon}
                        </div>
                        <div 
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                          style={{ backgroundColor: formUIColor[formName] }}
                        >
                          {topic.questions}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Available</div>
                        <div className="text-lg font-bold" style={{ color: formUIColor[formName] }}>
                          {topic.questions}
                        </div>
                        <div className="text-xs text-gray-400">questions</div>
                      </div>
                    </div>

                    {/* Topic Info */}
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                        {topic.name}
                      </h3>
                    </div>

                    {/* Hover Effect Line */}
                    <div 
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: formUIColor[formName] }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-400 text-[10px]">
          * Topic classifications are based on a general secondary school curriculum and may vary between different schools or education systems.
        </p>
      </div>
    </>
  )
}

function PracticeSessionCTA() {
  return (
    <div className="mt-20">
      <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ready to Start Practicing?
            </h3>
            <p className="text-gray-600 text-lg">
              Choose your topics, difficulty level, and practice settings to begin your math journey
            </p>
          </div>

          <Link href="/question-bank/practice-session">
            <button
              className="px-12 py-4 bg-sky-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-sky-700 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Practice Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}