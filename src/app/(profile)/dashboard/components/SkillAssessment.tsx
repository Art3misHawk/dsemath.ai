'use client';

import React, { useState } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { TbBrain, TbTarget, TbTrendingUp } from 'react-icons/tb';
import { BiStats } from 'react-icons/bi';
import ChartContainer from './ChartContainer';

interface SkillData {
  skill: string;
  current: number;
  target: number;
  classAverage: number;
  fullMark: number;
  category: 'core' | 'advanced' | 'application';
  description: string;
  improvement: number; // percentage change from last month
}

const skillsData: SkillData[] = [
  {
    skill: 'Algebra',
    current: 85,
    target: 90,
    classAverage: 78,
    fullMark: 100,
    category: 'core',
    description: 'Linear equations, quadratics, polynomials',
    improvement: 8.2
  },
  {
    skill: 'Geometry',
    current: 78,
    target: 85,
    classAverage: 75,
    fullMark: 100,
    category: 'core',
    description: 'Shapes, angles, area, volume',
    improvement: 5.6
  },
  {
    skill: 'Calculus',
    current: 92,
    target: 95,
    classAverage: 72,
    fullMark: 100,
    category: 'advanced',
    description: 'Differentiation, integration, limits',
    improvement: 12.1
  },
  {
    skill: 'Statistics',
    current: 74,
    target: 82,
    classAverage: 69,
    fullMark: 100,
    category: 'application',
    description: 'Data analysis, probability distributions',
    improvement: 3.4
  },
  {
    skill: 'Trigonometry',
    current: 88,
    target: 90,
    classAverage: 76,
    fullMark: 100,
    category: 'advanced',
    description: 'Sin, cos, tan functions and identities',
    improvement: 9.8
  },
  {
    skill: 'Problem Solving',
    current: 82,
    target: 88,
    classAverage: 71,
    fullMark: 100,
    category: 'application',
    description: 'Multi-step problems, logical reasoning',
    improvement: 7.2
  },
  {
    skill: 'Speed & Accuracy',
    current: 79,
    target: 85,
    classAverage: 73,
    fullMark: 100,
    category: 'application',
    description: 'Time management, calculation precision',
    improvement: 4.9
  },
  {
    skill: 'Conceptual Understanding',
    current: 87,
    target: 92,
    classAverage: 68,
    fullMark: 100,
    category: 'core',
    description: 'Mathematical principles and foundations',
    improvement: 11.3
  }
];

const SkillCard = ({ skill }: { skill: SkillData }) => {
  const progressPercentage = (skill.current / skill.target) * 100;
  const isAboveAverage = skill.current > skill.classAverage;
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return 'bg-blue-100 text-blue-700';
      case 'advanced': return 'bg-purple-100 text-purple-700';
      case 'application': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-slate-900">{skill.skill}</h4>
          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getCategoryColor(skill.category)} mt-1`}>
            {skill.category}
          </span>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-sky-600">{skill.current}%</div>
          <div className="text-xs text-slate-500">Target: {skill.target}%</div>
        </div>
      </div>
      
      <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
      
      <div className="space-y-2">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-sky-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className={`flex items-center gap-1 ${isAboveAverage ? 'text-green-600' : 'text-amber-600'}`}>
            <TbTrendingUp className="w-3 h-3" />
            {isAboveAverage ? 'Above' : 'Below'} average ({skill.classAverage}%)
          </span>
          <span className="text-green-600">
            +{skill.improvement}% this month
          </span>
        </div>
      </div>
    </div>
  );
};

export default function SkillAssessment() {
  const [selectedView, setSelectedView] = useState<'radar' | 'detailed'>('radar');
  
  // Prepare data for radar chart
  const radarData = skillsData.map(skill => ({
    skill: skill.skill,
    current: skill.current,
    target: skill.target,
    classAverage: skill.classAverage,
    fullMark: skill.fullMark
  }));
  
  // Calculate overall statistics
  const overallCurrent = Math.round(skillsData.reduce((sum, skill) => sum + skill.current, 0) / skillsData.length);
  const overallTarget = Math.round(skillsData.reduce((sum, skill) => sum + skill.target, 0) / skillsData.length);
  const overallImprovement = skillsData.reduce((sum, skill) => sum + skill.improvement, 0) / skillsData.length;
  
  const strengthsCount = skillsData.filter(skill => skill.current > skill.classAverage).length;
  const improvementAreas = skillsData.filter(skill => skill.current < skill.target).length;
  
  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-sky-50 rounded-lg">
          <div className="text-2xl font-bold text-sky-600">{overallCurrent}%</div>
          <div className="text-sm text-slate-600">Overall Score</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{strengthsCount}</div>
          <div className="text-sm text-slate-600">Strengths</div>
        </div>
        <div className="text-center p-4 bg-amber-50 rounded-lg">
          <div className="text-2xl font-bold text-amber-600">{improvementAreas}</div>
          <div className="text-sm text-slate-600">Improve Areas</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">+{overallImprovement.toFixed(1)}%</div>
          <div className="text-sm text-slate-600">Monthly Growth</div>
        </div>
      </div>
      
      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedView('radar')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedView === 'radar'
              ? 'bg-sky-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <BiStats className="w-4 h-4" />
            Radar View
          </div>
        </button>
        <button
          onClick={() => setSelectedView('detailed')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedView === 'detailed'
              ? 'bg-sky-600 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <TbTarget className="w-4 h-4" />
            Detailed View
          </div>
        </button>
      </div>
      
      {selectedView === 'radar' ? (
        <ChartContainer
          title="Multi-Dimensional Skill Analysis"
          description="Compare your performance across different math areas"
        >
          <div className="flex items-center gap-2 mb-4">
            <TbBrain className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Skill Radar Analysis</span>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fontSize: 12, fill: '#64748b' }}
                className="text-xs"
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: '#64748b' }}
                tickCount={6}
              />
              <Radar
                name="Your Performance"
                dataKey="current"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.3}
                strokeWidth={3}
                dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }}
              />
              <Radar
                name="Target Performance"
                dataKey="target"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
              />
              <Radar
                name="Class Average"
                dataKey="classAverage"
                stroke="#94a3b8"
                fill="#94a3b8"
                fillOpacity={0.05}
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={{ fill: '#94a3b8', strokeWidth: 1, r: 2 }}
              />
              <Legend />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  `${value}%`,
                  name === 'current' ? 'Your Score' : 
                  name === 'target' ? 'Target' : 'Class Average'
                ]}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      ) : (
        <ChartContainer
          title="Detailed Skill Breakdown"
          description="In-depth analysis of each skill area with improvement tracking"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </ChartContainer>
      )}
    </div>
  );
}
