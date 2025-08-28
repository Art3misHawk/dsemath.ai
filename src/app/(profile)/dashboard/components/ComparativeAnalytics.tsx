'use client';

import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ComposedChart,
  Line,
  Bar,
  BarChart,
  Legend
} from 'recharts';
import { RiDashboardLine, RiBarChartLine } from 'react-icons/ri';
import { BiTrendingUp } from 'react-icons/bi';
import { TbTarget } from 'react-icons/tb';
import ChartContainer from './ChartContainer';

// Mock data for comparative analytics
const accuracySpeedData = [
  { accuracy: 95, speed: 45, difficulty: 'Easy', problems: 12 },
  { accuracy: 88, speed: 52, difficulty: 'Easy', problems: 15 },
  { accuracy: 92, speed: 38, difficulty: 'Medium', problems: 8 },
  { accuracy: 78, speed: 65, difficulty: 'Medium', problems: 18 },
  { accuracy: 85, speed: 42, difficulty: 'Medium', problems: 10 },
  { accuracy: 72, speed: 78, difficulty: 'Hard', problems: 6 },
  { accuracy: 68, speed: 85, difficulty: 'Hard', problems: 12 },
  { accuracy: 82, speed: 55, difficulty: 'Hard', problems: 4 },
  { accuracy: 58, speed: 95, difficulty: 'Expert', problems: 3 },
  { accuracy: 65, speed: 88, difficulty: 'Expert', problems: 2 }
];

const difficultySuccessData = [
  { difficulty: 1, successRate: 95, problemCount: 45, avgTime: 2.5 },
  { difficulty: 2, successRate: 92, problemCount: 38, avgTime: 3.2 },
  { difficulty: 3, successRate: 88, problemCount: 32, avgTime: 4.1 },
  { difficulty: 4, successRate: 82, problemCount: 28, avgTime: 5.8 },
  { difficulty: 5, successRate: 78, problemCount: 22, avgTime: 7.2 },
  { difficulty: 6, successRate: 72, problemCount: 18, avgTime: 9.5 },
  { difficulty: 7, successRate: 68, problemCount: 15, avgTime: 12.3 },
  { difficulty: 8, successRate: 62, problemCount: 12, avgTime: 15.8 },
  { difficulty: 9, successRate: 55, problemCount: 8, avgTime: 20.2 },
  { difficulty: 10, successRate: 48, problemCount: 5, avgTime: 25.5 }
];

const performanceDistributionData = [
  { range: '90-100%', you: 25, peers: 18, classAvg: 22 },
  { range: '80-89%', you: 35, peers: 28, classAvg: 31 },
  { range: '70-79%', you: 22, peers: 32, classAvg: 28 },
  { range: '60-69%', you: 12, peers: 18, classAvg: 15 },
  { range: '50-59%', you: 4, peers: 12, classAvg: 8 },
  { range: '<50%', you: 2, peers: 8, classAvg: 5 }
];

// Gauge chart data
const gaugeData = [
  { name: 'Current Progress', value: 78, max: 100, color: '#0ea5e9' },
  { name: 'Weekly Goal', value: 85, max: 100, color: '#10b981' },
  { name: 'Monthly Target', value: 92, max: 100, color: '#f59e0b' }
];

const CustomGauge = ({ data }: { data: typeof gaugeData[0] }) => {
  const percentage = (data.value / data.max) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={data.color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-slate-900">{data.value}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-slate-600 mt-2">{data.name}</span>
    </div>
  );
};

export default function ComparativeAnalytics() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '#10b981';
      case 'Medium': return '#f59e0b';
      case 'Hard': return '#ef4444';
      case 'Expert': return '#8b5cf6';
      default: return '#0ea5e9';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Accuracy vs Speed Scatter Plot */}
        <ChartContainer
          title="Accuracy vs Speed Analysis"
          description="Find the optimal balance between precision and efficiency"
        >
          <div className="flex items-center gap-2 mb-4">
            <RiDashboardLine className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Performance Balance</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={accuracySpeedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number" 
                dataKey="accuracy" 
                domain={[50, 100]}
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Accuracy (%)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                type="number" 
                dataKey="speed" 
                domain={[30, 100]}
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Speed (problems/hour)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value, name) => [
                  `${value}${name === 'accuracy' ? '%' : ' p/h'}`,
                  name === 'accuracy' ? 'Accuracy' : 'Speed'
                ]}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    return `${payload[0].payload.difficulty} Level - ${payload[0].payload.problems} problems`;
                  }
                  return '';
                }}
              />
              <Scatter name="Performance Points" dataKey="speed">
                {accuracySpeedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getDifficultyColor(entry.difficulty)} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {['Easy', 'Medium', 'Hard', 'Expert'].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: getDifficultyColor(level) }}
                />
                <span className="text-xs text-slate-600">{level}</span>
              </div>
            ))}
          </div>
        </ChartContainer>

        {/* Problem Difficulty vs Success Rate */}
        <ChartContainer
          title="Difficulty vs Success Rate"
          description="How your performance changes with problem complexity"
        >
          <div className="flex items-center gap-2 mb-4">
            <BiTrendingUp className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Difficulty Analysis</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={difficultySuccessData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="difficulty" 
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Difficulty Level', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                yAxisId="success"
                stroke="#64748b"
                fontSize={12}
                domain={[40, 100]}
                label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="time"
                orientation="right"
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Avg Time (min)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar 
                yAxisId="success"
                dataKey="successRate" 
                fill="#0ea5e9" 
                fillOpacity={0.6}
                radius={[4, 4, 0, 0]}
                name="Success Rate (%)"
              />
              <Line
                yAxisId="time"
                type="monotone"
                dataKey="avgTime"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                name="Average Time (min)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Distribution Comparison */}
        <ChartContainer
          title="Performance Distribution"
          description="Compare your score distribution with peers and class average"
        >
          <div className="flex items-center gap-2 mb-4">
            <RiBarChartLine className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Peer Comparison</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="range" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar 
                dataKey="you" 
                fill="#0ea5e9" 
                radius={[2, 2, 0, 0]}
                name="Your Performance"
              />
              <Bar 
                dataKey="peers" 
                fill="#06b6d4" 
                radius={[2, 2, 0, 0]}
                name="Similar Level Peers"
              />
              <Bar 
                dataKey="classAvg" 
                fill="#94a3b8" 
                radius={[2, 2, 0, 0]}
                name="Class Average"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Real-time Progress Gauges */}
        <ChartContainer
          title="Real-time Progress Indicators"
          description="Current progress toward various goals and targets"
        >
          <div className="flex items-center gap-2 mb-4">
            <TbTarget className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Goal Progress</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {gaugeData.map((item, index) => (
              <CustomGauge key={index} data={item} />
            ))}
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between items-center p-3 bg-sky-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Daily Streak</span>
              <span className="text-lg font-bold text-sky-600">12 days</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Weekly Improvement</span>
              <span className="text-lg font-bold text-green-600">+8.5%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Next Milestone</span>
              <span className="text-lg font-bold text-amber-600">Level 19</span>
            </div>
          </div>
        </ChartContainer>
      </div>
    </div>
  );
}
