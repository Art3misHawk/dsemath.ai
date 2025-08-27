'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  TbBrain, 
  TbFileText, 
  TbSettings, 
  TbDownload, 
  TbRefresh,
  TbPlus,
  TbMinus,
  TbClock,
  TbTarget,
  TbChartBar,
  TbBook,
  TbClipboard
} from 'react-icons/tb';

// Types for form data
interface QuestionGeneratorForm {
  paperType: string;
  topics: string[];
  questionTypes: string[];
  difficulty: string;
  numberOfQuestions: number;
}

interface PaperGeneratorForm {
  paperFormat: string;
  topics: string[];
  duration: string;
  mcqQuestions: number;
  shortQuestions: number;
  longQuestions: number;
  difficultyMix: {
    level3: number;
    level4: number;
    level5: number;
  };
  includeAnswers: boolean;
  includeMarkingScheme: boolean;
}

const AIGeneratorPage = () => {
  const [questionForm, setQuestionForm] = useState<QuestionGeneratorForm>({
    paperType: 'paper2',
    topics: [],
    questionTypes: [],
    difficulty: 'level4',
    numberOfQuestions: 10
  });

  const [paperForm, setPaperForm] = useState<PaperGeneratorForm>({
    paperFormat: 'exam',
    topics: [],
    duration: '120',
    mcqQuestions: 15,
    shortQuestions: 8,
    longQuestions: 3,
    difficultyMix: {
      level3: 30,
      level4: 50,
      level5: 20
    },
    includeAnswers: true,
    includeMarkingScheme: false
  });

  const [questionLoading, setQuestionLoading] = useState(false);
  const [paperLoading, setPaperLoading] = useState(false);

  // Math topics for DSE
  const mathTopics = [
    'Algebra and Polynomials',
    'Exponential and Logarithmic Functions',
    'Trigonometry',
    'Geometry and Mensuration',
    'Coordinate Geometry',
    'Statistics and Probability',
    'Calculus and Applications',
    'Mathematical Induction',
    'Sequences and Series',
    'Binomial Theorem'
  ];

  const questionTypes = {
    paper2: ['Multiple Choice Questions (MCQ)'],
    paper1: ['Section A - Short Questions', 'Section B - Long Questions']
  };

  const handleGenerateQuestions = async () => {
    setQuestionLoading(true);
    // Simulate API call
    setTimeout(() => {
      setQuestionLoading(false);
      // Handle generated questions
    }, 3000);
  };

  const handleGeneratePaper = async () => {
    setPaperLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPaperLoading(false);
      // Handle generated paper
    }, 4000);
  };

  const totalQuestions = paperForm.mcqQuestions + paperForm.shortQuestions + paperForm.longQuestions;
  const totalDifficulty = paperForm.difficultyMix.level3 + paperForm.difficultyMix.level4 + paperForm.difficultyMix.level5;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              AI Question & Paper Generator
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Generate custom DSE Mathematics questions and complete exam papers using advanced AI technology
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: AI Question Generator */}
          <Card className="bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-black">
                <TbBrain className="w-6 h-6 text-sky-600" />
                AI Question Generator
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="default" className="bg-green-100 text-green-800">
                  Paper 2 Available
                </Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-500">
                  Paper 1 Coming Soon
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Paper Type Selection */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <TbFileText className="w-4 h-4" />
                  Paper Type
                </Label>
                <Tabs value={questionForm.paperType} onValueChange={(value) => 
                  setQuestionForm(prev => ({ ...prev, paperType: value }))
                }>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="paper2">Paper 2</TabsTrigger>
                    <TabsTrigger value="paper1" disabled>Paper 1</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Topics Selection */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <TbBook className="w-4 h-4" />
                  Topics
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select topics..." />
                  </SelectTrigger>
                  <SelectContent>
                    {mathTopics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="flex flex-wrap gap-2 mt-2">
                  {questionForm.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                      <button 
                        className="ml-1 hover:text-red-500"
                        onClick={() => setQuestionForm(prev => ({
                          ...prev,
                          topics: prev.topics.filter(t => t !== topic)
                        }))}
                      >
                        <TbMinus className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Question Types */}
              <div className="space-y-2">
                <Label>Question Types</Label>
                <div className="space-y-2">
                  {questionTypes[questionForm.paperType as keyof typeof questionTypes].map((type) => (
                    <Badge key={type} variant="outline" className="block text-center py-2">
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Difficulty */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <TbTarget className="w-4 h-4" />
                  Difficulty Level
                </Label>
                <Select value={questionForm.difficulty} onValueChange={(value) =>
                  setQuestionForm(prev => ({ ...prev, difficulty: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="level3">Level 3 (Basic)</SelectItem>
                    <SelectItem value="level4">Level 4 (Intermediate)</SelectItem>
                    <SelectItem value="level5">Level 5+ (Advanced)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Number of Questions */}
              <div className="space-y-2">
                <Label>Number of Questions</Label>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    min="1"
                    max="50"
                    value={questionForm.numberOfQuestions}
                    onChange={(e) => setQuestionForm(prev => ({
                      ...prev,
                      numberOfQuestions: parseInt(e.target.value) || 1
                    }))}
                    className="w-20"
                  />
                  <Slider
                    value={[questionForm.numberOfQuestions]}
                    onValueChange={([value]) => setQuestionForm(prev => ({
                      ...prev,
                      numberOfQuestions: value
                    }))}
                    max={50}
                    min={1}
                    step={1}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={handleGenerateQuestions}
                disabled={questionLoading || questionForm.topics.length === 0}
                className="w-full bg-sky-600 hover:bg-sky-700"
                size="lg"
              >
                {questionLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating Questions...
                  </>
                ) : (
                  <>
                    <TbBrain className="w-4 h-4 mr-2" />
                    Generate Questions
                  </>
                )}
              </Button>

              {/* Output Options */}
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <TbClipboard className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <TbDownload className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Column 2: AI Paper Generator */}
          <Card className="bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-black">
                <TbFileText className="w-6 h-6  text-sky-600" />
                AI Paper Generator
              </CardTitle>
              <p className="text-sm text-slate-600 mt-2">
                Generate Complete Printable Papers
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Paper Format */}
              <div className="space-y-2">
                <Label>Paper Format</Label>
                <Select value={paperForm.paperFormat} onValueChange={(value) =>
                  setPaperForm(prev => ({ ...prev, paperFormat: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exam">Exam Paper</SelectItem>
                    <SelectItem value="practice">Practice Sheet</SelectItem>
                    <SelectItem value="quiz">Quiz</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Topics */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <TbBook className="w-4 h-4" />
                  Topics
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select topics..." />
                  </SelectTrigger>
                  <SelectContent>
                    {mathTopics.map((topic) => (
                      <SelectItem key={topic} value={topic}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time Duration */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <TbClock className="w-4 h-4" />
                  Time Duration
                </Label>
                <Select value={paperForm.duration} onValueChange={(value) =>
                  setPaperForm(prev => ({ ...prev, duration: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="90">1.5 hours</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Question Distribution */}
              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <TbChartBar className="w-4 h-4" />
                  Question Distribution
                </Label>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-sm">Paper 2 (MCQ)</Label>
                      <span className="text-sm font-medium">{paperForm.mcqQuestions}</span>
                    </div>
                    <Slider
                      value={[paperForm.mcqQuestions]}
                      onValueChange={([value]) => setPaperForm(prev => ({
                        ...prev,
                        mcqQuestions: value
                      }))}
                      max={45}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-sm">Paper 1 Section A (SQ)</Label>
                      <span className="text-sm font-medium">{paperForm.shortQuestions}</span>
                    </div>
                    <Slider
                      value={[paperForm.shortQuestions]}
                      onValueChange={([value]) => setPaperForm(prev => ({
                        ...prev,
                        shortQuestions: value
                      }))}
                      max={14}
                      min={0}
                      step={1}
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <Label className="text-sm">Paper 1 Section B (LQ)</Label>
                      <span className="text-sm font-medium">{paperForm.longQuestions}</span>
                    </div>
                    <Slider
                      value={[paperForm.longQuestions]}
                      onValueChange={([value]) => setPaperForm(prev => ({
                        ...prev,
                        longQuestions: value
                      }))}
                      max={5}
                      min={0}
                      step={1}
                    />
                  </div>
                </div>

                <div className="bg-slate-100 p-3 rounded-lg">
                  <p className="text-sm font-medium">
                    Total Questions: <span className="text-sky-600">{totalQuestions}</span>
                  </p>
                </div>
              </div>

              {/* Difficulty Mix */}
              <div className="space-y-3">
                <Label>Difficulty Mix</Label>
                <div className="space-y-2">
                  {Object.entries(paperForm.difficultyMix).map(([level, percentage]) => (
                    <div key={level}>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="text-sm capitalize">
                          {level.replace('level', 'Level ')}
                        </Label>
                        <span className="text-sm font-medium">{percentage}%</span>
                      </div>
                      <Slider
                        value={[percentage]}
                        onValueChange={([value]) => setPaperForm(prev => ({
                          ...prev,
                          difficultyMix: {
                            ...prev.difficultyMix,
                            [level]: value
                          }
                        }))}
                        max={100}
                        min={0}
                        step={5}
                      />
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-500">
                  Total: {totalDifficulty}% {totalDifficulty !== 100 && '(Should equal 100%)'}
                </div>
              </div>

              {/* Generate Button */}
              <Button 
                onClick={handleGeneratePaper}
                disabled={paperLoading || paperForm.topics.length === 0 || totalDifficulty !== 100}
                className="w-full bg-sky-600 hover:bg-sky-700"
                size="lg"
              >
                {paperLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating Paper...
                  </>
                ) : (
                  <>
                    <TbFileText className="w-4 h-4 mr-2" />
                    Generate Paper
                  </>
                )}
              </Button>

              {/* Paper Options */}
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  <TbSettings className="w-4 h-4 mr-2" />
                  Options
                </Button>
                <Button variant="outline" size="sm">
                  <TbRefresh className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <Card className="bg-blue-50/50 mt-8">
          <CardHeader>
            <CardTitle>Preview & Downloads</CardTitle>
            <p className="text-sm text-slate-600">
              Generated content will appear here for review before downloading
            </p>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12 text-slate-500">
              <TbFileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No content generated yet. Use the generators above to create questions or papers.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIGeneratorPage;
