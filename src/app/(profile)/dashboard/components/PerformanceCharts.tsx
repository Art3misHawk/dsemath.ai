'use client';

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { FiTrendingUp, FiBarChart, FiActivity } from 'react-icons/fi';
import { BiStats } from 'react-icons/bi';
import ChartContainer from './ChartContainer';

// Mock data for performance analytics
const scoreProgressionData = [
  { date: 'Jan', score: 65, target: 70, problems: 45 },
  { date: 'Feb', score: 68, target: 72, problems: 52 },
  { date: 'Mar', score: 72, target: 74, problems: 58 },
  { date: 'Apr', score: 75, target: 76, problems: 64 },
  { date: 'May', score: 78, target: 78, problems: 71 },
  { date: 'Jun', score: 82, target: 80, problems: 78 },
  { date: 'Jul', score: 85, target: 82, problems: 85 },
  { date: 'Aug', score: 87, target: 84, problems: 92 }
];

const topicPerformanceData = [
  { topic: 'Algebra', score: 85, total: 100, color: '#0ea5e9' },
  { topic: 'Geometry', score: 78, total: 100, color: '#06b6d4' },
  { topic: 'Calculus', score: 92, total: 100, color: '#8b5cf6' },
  { topic: 'Statistics', score: 74, total: 100, color: '#10b981' },
  { topic: 'Trigonometry', score: 88, total: 100, color: '#f59e0b' },
  { topic: 'Probability', score: 81, total: 100, color: '#ef4444' }
];

const skillRadarData = [
  { skill: 'Problem Solving', A: 85, B: 90, fullMark: 100 },
  { skill: 'Speed', A: 78, B: 85, fullMark: 100 },
  { skill: 'Accuracy', A: 92, B: 88, fullMark: 100 },
  { skill: 'Concepts', A: 88, B: 85, fullMark: 100 },
  { skill: 'Applications', A: 82, B: 80, fullMark: 100 },
  { skill: 'Analysis', A: 75, B: 82, fullMark: 100 }
];

export default function PerformanceCharts() {
  const [timeRange, setTimeRange] = useState('6M');

  return (
    <div className="space-y-6">
      {/* Score Progression Chart */}
      <ChartContainer
        title="Score Progression Over Time"
        description="Track your improvement with target comparison"
        className="col-span-full lg:col-span-2"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FiTrendingUp className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Progress Trend</span>
          </div>
          <div className="flex gap-2">
            {['3M', '6M', '1Y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-xs rounded-md transition-colors ${
                  timeRange === range
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={scoreProgressionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="date" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
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
            <Line
              type="monotone"
              dataKey="score"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }}
              name="Your Score"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#94a3b8', strokeWidth: 2, r: 3 }}
              name="Target Score"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Topic Performance Bar Chart */}
        <ChartContainer
          title="Performance by Math Topics"
          description="Your mastery level across different areas"
        >
          <div className="flex items-center gap-2 mb-4">
            <FiBarChart className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Topic Breakdown</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topicPerformanceData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" domain={[0, 100]} stroke="#64748b" fontSize={12} />
              <YAxis 
                type="category" 
                dataKey="topic" 
                stroke="#64748b" 
                fontSize={12}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                formatter={(value) => [`${value}%`, 'Score']}
              />
              <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                {topicPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Skill Assessment Radar Chart */}
        <ChartContainer
          title="Skill Assessment"
          description="Multi-dimensional analysis of your abilities"
        >
          <div className="flex items-center gap-2 mb-4">
            <BiStats className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Skill Radar</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={skillRadarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis 
                dataKey="skill" 
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fontSize: 10, fill: '#64748b' }}
              />
              <Radar
                name="Your Performance"
                dataKey="A"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="Class Average"
                dataKey="B"
                stroke="#94a3b8"
                fill="#94a3b8"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Legend />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
