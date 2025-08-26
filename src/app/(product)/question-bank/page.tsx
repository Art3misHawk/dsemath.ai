'use client';

import { useState } from 'react';

// Main App Component
export default function QuestionBankSystem() {
  const [currentPage, setCurrentPage] = useState('question-bank');

  return (
    <div>
      {currentPage === 'question-bank' && (
        <QuestionBankPage onStartPractice={() => setCurrentPage('practice-session')} />
      )}
      {currentPage === 'practice-session' && (
        <PracticeSessionPage onBack={() => setCurrentPage('question-bank')} />
      )}
    </div>
  );
}

// Question Bank Page Component - Just for browsing topics
function QuestionBankPage({ onStartPractice }: { onStartPractice: () => void }) {
  const mathTopicsByForm = {
    'Form 4': {
      color: '#059669',
      topics: [
        { 
          id: 'f4-quadratic', 
          name: 'Quadratic Functions', 
          description: 'Solving quadratic equations, graphing parabolas, vertex form',
          questions: 24,
          difficulty: 'Basic to Intermediate',
          icon: '📊'
        },
        { 
          id: 'f4-geometry', 
          name: 'Basic Geometry', 
          description: 'Angles, triangles, polygons, and basic geometric proofs',
          questions: 18,
          difficulty: 'Basic',
          icon: '📐'
        },
        { 
          id: 'f4-probability', 
          name: 'Introduction to Probability', 
          description: 'Basic probability concepts, simple events, tree diagrams',
          questions: 15,
          difficulty: 'Basic to Intermediate',
          icon: '🎲'
        },
        { 
          id: 'f4-algebra', 
          name: 'Algebraic Expressions', 
          description: 'Factoring, expanding, simplifying algebraic expressions',
          questions: 22,
          difficulty: 'Basic to Intermediate',
          icon: '🔤'
        }
      ]
    },
    'Form 5': {
      color: '#DC2626',
      topics: [
        { 
          id: 'f5-trigonometry', 
          name: 'Trigonometry', 
          description: 'Sine, cosine, tangent, trigonometric identities and equations',
          questions: 28,
          difficulty: 'Intermediate to Advanced',
          icon: '📐'
        },
        { 
          id: 'f5-exponential', 
          name: 'Exponential & Logarithmic Functions', 
          description: 'Exponential growth/decay, logarithmic properties and equations',
          questions: 19,
          difficulty: 'Intermediate to Advanced',
          icon: '📈'
        },
        { 
          id: 'f5-sequences', 
          name: 'Sequences & Series', 
          description: 'Arithmetic and geometric sequences, series, and summation',
          questions: 16,
          difficulty: 'Intermediate',
          icon: '🔢'
        },
        { 
          id: 'f5-coordinate', 
          name: 'Coordinate Geometry', 
          description: 'Lines, circles, parabolas in coordinate systems',
          questions: 21,
          difficulty: 'Intermediate to Advanced',
          icon: '📍'
        }
      ]
    },
    'Form 6': {
      color: '#7C3AED',
      topics: [
        { 
          id: 'f6-calculus', 
          name: 'Introduction to Calculus', 
          description: 'Limits, derivatives, basic integration techniques',
          questions: 32,
          difficulty: 'Advanced',
          icon: '∫'
        },
        { 
          id: 'f6-complex', 
          name: 'Complex Numbers', 
          description: 'Complex arithmetic, polar form, De Moivre\'s theorem',
          questions: 14,
          difficulty: 'Advanced',
          icon: '🔄'
        },
        { 
          id: 'f6-matrices', 
          name: 'Matrices & Determinants', 
          description: 'Matrix operations, determinants, solving linear systems',
          questions: 18,
          difficulty: 'Advanced',
          icon: '⬜'
        },
        { 
          id: 'f6-statistics', 
          name: 'Advanced Statistics', 
          description: 'Normal distribution, hypothesis testing, regression',
          questions: 25,
          difficulty: 'Advanced',
          icon: '📊'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Question Bank
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive collection of topics from Form 4 to Form 6.
          </p>
        </div>

        {/* Topics by Form - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {Object.entries(mathTopicsByForm).map(([formName, formData]) => (
            <div key={formName} className="relative">
              {/* Form Header */}
              <div className="text-center mb-8">
                <div 
                  className="h-1 w-full rounded-full mx-auto mb-4"
                  style={{ backgroundColor: formData.color }}
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  {formName}
                </h2>
              </div>

              {/* Topics Grid - Browse Only */}
              <div className="space-y-6">
                {formData.topics.map((topic) => (
                  <div
                    key={topic.id}
                    className="group relative bg-white rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    {/* Gradient Background Effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ backgroundColor: formData.color }}
                    />
                    
                    {/* Topic Icon & Count */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-all duration-300"
                          style={{ backgroundColor: `${formData.color}15`, border: `2px solid ${formData.color}30` }}
                        >
                          {topic.icon}
                        </div>
                        <div 
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md"
                          style={{ backgroundColor: formData.color }}
                        >
                          {topic.questions}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Available</div>
                        <div className="text-lg font-bold" style={{ color: formData.color }}>
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
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {topic.description}
                      </p>
                    </div>

                    {/* Hover Effect Line */}
                    <div 
                      className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                      style={{ backgroundColor: formData.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practice Session CTA */}
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

              <button
                onClick={onStartPractice}
                className="px-12 py-4 bg-sky-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-sky-700 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Practice Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Practice Session Page Component - All selection happens here
function PracticeSessionPage({ onBack }: { onBack: () => void }) {
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState([3, 4, 5]);
  const [questionType, setQuestionType] = useState('multiple-choice');
  const [timeLimit, setTimeLimit] = useState(30);
  const [showExplanations, setShowExplanations] = useState(true);
  const [selectionMode, setSelectionMode] = useState('multiple');

  const mathTopics = [
    { id: 'f4-quadratic', name: 'Quadratic Functions', form: 'Form 4', questions: 24, icon: '📊', color: '#059669' },
    { id: 'f4-geometry', name: 'Basic Geometry', form: 'Form 4', questions: 18, icon: '📐', color: '#059669' },
    { id: 'f4-probability', name: 'Introduction to Probability', form: 'Form 4', questions: 15, icon: '🎲', color: '#059669' },
    { id: 'f4-algebra', name: 'Algebraic Expressions', form: 'Form 4', questions: 22, icon: '🔤', color: '#059669' },
    { id: 'f5-trigonometry', name: 'Trigonometry', form: 'Form 5', questions: 28, icon: '📐', color: '#DC2626' },
    { id: 'f5-exponential', name: 'Exponential & Logarithmic Functions', form: 'Form 5', questions: 19, icon: '📈', color: '#DC2626' },
    { id: 'f5-sequences', name: 'Sequences & Series', form: 'Form 5', questions: 16, icon: '🔢', color: '#DC2626' },
    { id: 'f5-coordinate', name: 'Coordinate Geometry', form: 'Form 5', questions: 21, icon: '📍', color: '#DC2626' },
    { id: 'f6-calculus', name: 'Introduction to Calculus', form: 'Form 6', questions: 32, icon: '∫', color: '#7C3AED' },
    { id: 'f6-complex', name: 'Complex Numbers', form: 'Form 6', questions: 14, icon: '🔄', color: '#7C3AED' },
    { id: 'f6-matrices', name: 'Matrices & Determinants', form: 'Form 6', questions: 18, icon: '⬜', color: '#7C3AED' },
    { id: 'f6-statistics', name: 'Advanced Statistics', form: 'Form 6', questions: 25, icon: '📊', color: '#7C3AED' }
  ];

  const questionCountOptions = [5, 10, 15, 20, 30, 45];
  const difficultyLevels = [
    { value: 3, label: 'Level 3', description: 'Foundation level', color: '#10B981' },
    { value: 4, label: 'Level 4', description: 'Intermediate level', color: '#F59E0B' },
    { value: 5, label: 'Level 5+', description: 'Advanced level', color: '#EF4444' }
  ];

  const handleTopicToggle = (topicId: string) => {
    if (selectionMode === 'single') {
      setSelectedTopics([topicId]);
    } else {
      if (selectedTopics.includes(topicId)) {
        setSelectedTopics(selectedTopics.filter(id => id !== topicId));
      } else {
        setSelectedTopics([...selectedTopics, topicId]);
      }
    }
  };

  const handleSelectAll = () => {
    setSelectedTopics(mathTopics.map(topic => topic.id));
  };

  const handleClearAll = () => {
    setSelectedTopics([]);
  };

  const handleDifficultyToggle = (difficulty: number) => {
    if (selectedDifficulty.includes(difficulty)) {
      setSelectedDifficulty(selectedDifficulty.filter(d => d !== difficulty));
    } else {
      setSelectedDifficulty([...selectedDifficulty, difficulty]);
    }
  };

  const getTotalAvailableQuestions = () => {
    return selectedTopics.reduce((total, topicId) => {
      const topic = mathTopics.find(t => t.id === topicId);
      return total + (topic?.questions || 0);
    }, 0);
  };

  const isReadyToStart = selectedTopics.length > 0 && selectedDifficulty.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white rounded-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Question Bank
          </button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Practice Session</h1>
            <p className="text-gray-600 mt-1">Configure your practice experience</p>
          </div>
          
          <div className="w-32"></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content - 3 columns */}
          <div className="xl:col-span-3 space-y-6">
            {/* Question Type */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Question Format</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setQuestionType('multiple-choice')}
                  className={`p-5 rounded-xl border-2 text-left transition-all ${
                    questionType === 'multiple-choice'
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">A</span>
                    </div>
                    <div className="font-semibold text-gray-900">Multiple Choice</div>
                  </div>
                  <p className="text-sm text-gray-600">Quick practice with 4 options per question</p>
                </button>
                
                <button
                  disabled
                  className="p-5 rounded-xl border-2 border-gray-200 bg-gray-50 text-left opacity-60 cursor-not-allowed"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">✍️</span>
                    </div>
                    <div className="font-semibold text-gray-500">Long Answer</div>
                  </div>
                  <p className="text-sm text-gray-500">Coming in next update</p>
                </button>
              </div>
            </div>

            {/* Settings Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Question Count */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-purple-600 text-lg font-bold">#</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Questions</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {questionCountOptions.slice(0, 4).map((count) => (
                    <button
                      key={count}
                      onClick={() => setQuestionCount(count)}
                      className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        questionCount === count
                          ? 'bg-purple-500 text-white shadow-lg scale-105'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-102'
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm font-medium transition-all"
                    placeholder="Custom amount"
                  />
                  <div className="absolute right-3 top-3 text-xs text-gray-400">max 100</div>
                </div>
              </div>

              {/* Time Limit */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <span className="text-orange-600 text-lg">⏱️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Time/Question</h3>
                </div>
                <div className="space-y-3">
                  {[20, 30, 45, 60].map((time) => (
                    <label key={time} className="flex items-center cursor-pointer group">
                      <input
                        type="radio"
                        name="timeLimit"
                        value={time}
                        checked={timeLimit === time}
                        onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                        className="w-5 h-5 text-orange-500 border-2 border-gray-300 focus:ring-orange-500 focus:ring-2"
                      />
                      <div className="ml-3 flex items-center justify-between w-full">
                        <span className={`font-medium transition-colors ${
                          timeLimit === time ? 'text-orange-600' : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                          {time} seconds
                        </span>
                        {time === 30 && (
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-medium">
                            Recommended
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Options */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-lg">⚙️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Options</h3>
                </div>
                <div className="space-y-4">
                  <label className="flex items-start cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={showExplanations}
                        onChange={(e) => setShowExplanations(e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-0.5"
                      />
                      <div className={`absolute inset-0 rounded transition-all ${
                        showExplanations ? 'bg-blue-500' : ''
                      }`} />
                    </div>
                    <div className="ml-3">
                      <div className={`font-medium transition-colors ${
                        showExplanations ? 'text-blue-600' : 'text-gray-900 group-hover:text-gray-700'
                      }`}>
                        Show explanations
                      </div>
                      <div className="text-sm text-gray-600">
                        Get detailed explanations after each question
                      </div>
                    </div>
                  </label>
                  
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Instant feedback</span>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${showExplanations ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <span className={`text-xs font-medium ${showExplanations ? 'text-green-600' : 'text-gray-400'}`}>
                          {showExplanations ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Difficulty Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <span className="text-red-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Difficulty Levels</h3>
                  <p className="text-sm text-gray-600">Choose your challenge level</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {difficultyLevels.map((level) => {
                  const isSelected = selectedDifficulty.includes(level.value);
                  return (
                    <div
                      key={level.value}
                      onClick={() => handleDifficultyToggle(level.value)}
                      className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        isSelected
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl ring-4 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-lg bg-white'
                      }`}
                    >
                      {/* Selection Indicator */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-blue-500 shadow-lg scale-100' 
                          : 'bg-gray-200 scale-75 hover:scale-90'
                      }`}>
                        {isSelected ? (
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>

                      {/* Level Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div 
                          className={`w-4 h-4 rounded-full shadow-sm ${
                            isSelected ? 'ring-2 ring-white ring-offset-2' : ''
                          }`}
                          style={{ backgroundColor: level.color }}
                        />
                        <div className={`font-bold text-lg transition-colors ${
                          isSelected ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          {level.label}
                        </div>
                      </div>

                      {/* Level Description */}
                      <p className={`text-sm transition-colors ${
                        isSelected ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {level.description}
                      </p>

                      {/* Difficulty Bars */}
                      <div className="flex items-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                              i < level.value 
                                ? isSelected 
                                  ? 'bg-blue-400' 
                                  : 'bg-current'
                                : 'bg-gray-200'
                            }`}
                            style={{ 
                              color: !isSelected && i < level.value ? level.color : undefined 
                            }}
                          />
                        ))}
                      </div>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                        isSelected 
                          ? 'bg-gradient-to-br from-blue-400/5 to-indigo-500/5'
                          : 'bg-gradient-to-br from-gray-400/0 to-gray-500/0 hover:from-gray-400/5 hover:to-gray-500/5'
                      }`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Topic Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Select Topics</h3>
                    <p className="text-sm text-gray-600">Choose what you want to practice</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Selection Mode */}
                  <div className="flex bg-gray-100 rounded-xl p-1 shadow-inner">
                    <button
                      onClick={() => {
                        setSelectionMode('single');
                        if (selectedTopics.length > 1) {
                          setSelectedTopics([selectedTopics[0]]);
                        }
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        selectionMode === 'single'
                          ? 'bg-white text-gray-900 shadow-md'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Single
                    </button>
                    <button
                      onClick={() => setSelectionMode('multiple')}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        selectionMode === 'multiple'
                          ? 'bg-white text-gray-900 shadow-md'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Multiple
                    </button>
                  </div>

                  {/* Quick Actions */}
                  {selectionMode === 'multiple' && (
                    <div className="flex gap-3">
                      <button
                        onClick={handleSelectAll}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all"
                      >
                        Select All
                      </button>
                      <button
                        onClick={handleClearAll}
                        className="text-sm font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all"
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mathTopics.map((topic) => {
                  const isSelected = selectedTopics.includes(topic.id);
                  return (
                    <div
                      key={topic.id}
                      onClick={() => handleTopicToggle(topic.id)}
                      className={`group relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] border-2 ${
                        isSelected
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl ring-4 ring-blue-100'
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                      }`}
                    >
                      {/* Selection Badge */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected 
                          ? 'bg-blue-500 shadow-lg scale-100' 
                          : 'bg-gray-200 scale-75 group-hover:scale-90'
                      }`}>
                        {isSelected ? (
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>

                      {/* Topic Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="relative">
                          <div 
                            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                              isSelected ? 'shadow-lg scale-105' : 'shadow-sm group-hover:scale-105'
                            }`}
                            style={{ 
                              backgroundColor: isSelected ? `${topic.color}20` : `${topic.color}10`,
                              border: `2px solid ${topic.color}${isSelected ? '40' : '20'}`
                            }}
                          >
                            {topic.icon}
                          </div>
                          {/* Form Badge */}
                          <div 
                            className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-md text-xs font-bold text-white shadow-sm"
                            style={{ backgroundColor: topic.color }}
                          >
                            {topic.form.replace('Form ', 'F')}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Questions</div>
                          <div className={`text-xl font-bold transition-colors ${
                            isSelected ? 'text-blue-600' : ''
                          }`} style={{ color: !isSelected ? topic.color : undefined }}>
                            {topic.questions}
                          </div>
                        </div>
                      </div>

                      {/* Topic Info */}
                      <div className="space-y-2">
                        <h4 className={`font-bold text-base transition-colors leading-tight ${
                          isSelected ? 'text-blue-700' : 'text-gray-900 group-hover:text-gray-700'
                        }`}>
                          {topic.name}
                        </h4>
                        <div className="text-xs text-gray-500 font-medium">
                          {topic.form}
                        </div>
                      </div>

                      {/* Selection Indicator Line */}
                      <div className={`absolute bottom-0 left-0 h-1 transition-all duration-300 ${
                        isSelected 
                          ? 'w-full bg-blue-500' 
                          : 'w-0 group-hover:w-1/3 bg-gray-300'
                      }`} />

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                        isSelected 
                          ? 'bg-gradient-to-br from-blue-400/5 to-indigo-500/5'
                          : 'bg-gradient-to-br from-gray-400/0 to-gray-500/0 group-hover:from-gray-400/5 group-hover:to-gray-500/5'
                      }`} />
                    </div>
                  );
                })}
              </div>

              {selectedTopics.length > 0 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-800 font-semibold">
                        <span className="text-lg">{selectedTopics.length}</span> topics selected
                      </div>
                      <div className="text-blue-600 text-sm">
                        <span className="font-medium">{getTotalAvailableQuestions()}</span> questions available for practice
                      </div>
                    </div>
                    <div className="text-blue-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Summary & Action */}
          <div className="space-y-6">
            {/* Session Summary */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Session Summary</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="opacity-90">Questions:</span>
                  <span className="font-semibold">{questionCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Time per Q:</span>
                  <span className="font-semibold">{timeLimit}s</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Total time:</span>
                  <span className="font-semibold">{Math.ceil(questionCount * timeLimit / 60)}min</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Topics:</span>
                  <span className="font-semibold">{selectedTopics.length || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-90">Difficulty:</span>
                  <span className="font-semibold text-xs">
                    {selectedDifficulty.length > 0 
                      ? selectedDifficulty.map(d => d === 5 ? '5+' : d).join(', ')
                      : 'None'
                    }
                  </span>
                </div>
              </div>

              <button
                disabled={!isReadyToStart}
                onClick={() => {
                  const selectedTopicNames = selectedTopics.map(id => 
                    mathTopics.find(t => t.id === id)?.name
                  ).join(', ');
                  alert(`Starting practice session!\n\nTopics: ${selectedTopicNames}\nQuestions: ${questionCount}\nTime: ${timeLimit}s per question\nDifficulty: ${selectedDifficulty.join(', ')}\nExplanations: ${showExplanations ? 'Yes' : 'No'}`);
                }}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  isReadyToStart
                    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
              >
                {isReadyToStart ? '🚀 Start Practice' : 'Select Topics & Difficulty'}
              </button>

              {!isReadyToStart && (
                <p className="text-center text-xs text-blue-200 mt-2">
                  Choose topics and difficulty to continue
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}