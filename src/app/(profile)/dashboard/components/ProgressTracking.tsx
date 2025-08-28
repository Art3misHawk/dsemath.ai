'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { TbChartLine, TbChartArea, TbClock } from 'react-icons/tb';
import { HiOutlineClock } from 'react-icons/hi';
import ChartContainer from './ChartContainer';

// Mock data for progress tracking
const learningHoursData = [
  { week: 'Week 1', hours: 12, target: 15, efficiency: 78 },
  { week: 'Week 2', hours: 18, target: 15, efficiency: 82 },
  { week: 'Week 3', hours: 14, target: 15, efficiency: 85 },
  { week: 'Week 4', hours: 22, target: 15, efficiency: 88 },
  { week: 'Week 5', hours: 16, target: 15, efficiency: 90 },
  { week: 'Week 6', hours: 20, target: 15, efficiency: 87 },
  { week: 'Week 7', hours: 25, target: 15, efficiency: 92 },
  { week: 'Week 8', hours: 19, target: 15, efficiency: 89 }
];

const cumulativeProgressData = [
  { day: 'Day 1', cumulative: 2, daily: 2 },
  { day: 'Day 2', cumulative: 5, daily: 3 },
  { day: 'Day 3', cumulative: 7, daily: 2 },
  { day: 'Day 4', cumulative: 12, daily: 5 },
  { day: 'Day 5', cumulative: 15, daily: 3 },
  { day: 'Day 6', cumulative: 18, daily: 3 },
  { day: 'Day 7', cumulative: 25, daily: 7 },
  { day: 'Day 8', cumulative: 28, daily: 3 },
  { day: 'Day 9', cumulative: 33, daily: 5 },
  { day: 'Day 10', cumulative: 38, daily: 5 },
  { day: 'Day 11', cumulative: 42, daily: 4 },
  { day: 'Day 12', cumulative: 48, daily: 6 },
  { day: 'Day 13', cumulative: 52, daily: 4 },
  { day: 'Day 14', cumulative: 60, daily: 8 }
];

const difficultyTimeData = [
  { difficulty: 'Easy', timeSpent: 120, problems: 45, color: '#10b981' },
  { difficulty: 'Medium', timeSpent: 180, problems: 32, color: '#f59e0b' },
  { difficulty: 'Hard', timeSpent: 240, problems: 18, color: '#ef4444' },
  { difficulty: 'Expert', timeSpent: 300, problems: 8, color: '#8b5cf6' }
];

const performanceTargetData = [
  { month: 'Jan', current: 65, target: 70, projected: 68 },
  { month: 'Feb', current: 68, target: 72, projected: 71 },
  { month: 'Mar', current: 72, target: 74, projected: 74 },
  { month: 'Apr', current: 75, target: 76, projected: 77 },
  { month: 'May', current: 78, target: 78, projected: 80 },
  { month: 'Jun', current: 82, target: 80, projected: 83 },
  { month: 'Jul', current: 85, target: 82, projected: 86 },
  { month: 'Aug', current: 87, target: 84, projected: 89 }
];

export default function ProgressTracking() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current vs Target Performance */}
        <ChartContainer
          title="Current vs Target Performance"
          description="Track your progress against goals with projections"
        >
          <div className="flex items-center gap-2 mb-4">
            <TbChartLine className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Goal Tracking</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTargetData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748b"
                fontSize={12}
                domain={[60, 95]}
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
                dataKey="current"
                stroke="#0ea5e9"
                strokeWidth={3}
                dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }}
                name="Current Score"
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
              <Line
                type="monotone"
                dataKey="projected"
                stroke="#10b981"
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
                name="Projected"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Time Spent by Difficulty */}
        <ChartContainer
          title="Time Distribution by Difficulty"
          description="How you allocate time across problem difficulties"
        >
          <div className="flex items-center gap-2 mb-4">
            <HiOutlineClock className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Time Allocation</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={difficultyTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="difficulty" 
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
                formatter={(value, name) => [
                  name === 'timeSpent' ? `${value} min` : `${value} problems`,
                  name === 'timeSpent' ? 'Time Spent' : 'Problems Solved'
                ]}
              />
              <Legend />
              <Bar 
                dataKey="timeSpent" 
                fill="#0ea5e9" 
                radius={[4, 4, 0, 0]}
                name="Time (minutes)"
              />
              <Bar 
                dataKey="problems" 
                fill="#06b6d4" 
                radius={[4, 4, 0, 0]}
                name="Problems Solved"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cumulative Learning Hours */}
        <ChartContainer
          title="Cumulative Learning Progress"
          description="Your learning hours accumulation over time"
        >
          <div className="flex items-center gap-2 mb-4">
            <TbChartArea className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Learning Curve</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={cumulativeProgressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="day" 
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
                formatter={(value, name) => [
                  `${value} hours`,
                  name === 'cumulative' ? 'Total Hours' : 'Daily Hours'
                ]}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="cumulative"
                stackId="1"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.3}
                strokeWidth={2}
                name="Cumulative Hours"
              />
              <Area
                type="monotone"
                dataKey="daily"
                stackId="2"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.6}
                strokeWidth={2}
                name="Daily Hours"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Weekly Learning Hours with Efficiency */}
        <ChartContainer
          title="Weekly Learning Hours & Efficiency"
          description="Hours studied vs learning efficiency percentage"
        >
          <div className="flex items-center gap-2 mb-4">
            <TbClock className="w-5 h-5 text-sky-600" />
            <span className="text-sm font-medium">Weekly Progress</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={learningHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="week" 
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                yAxisId="hours"
                stroke="#64748b"
                fontSize={12}
              />
              <YAxis 
                yAxisId="efficiency"
                orientation="right"
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
              <ReferenceLine 
                y={15} 
                stroke="#94a3b8" 
                strokeDasharray="5 5" 
                yAxisId="hours"
                label={{ value: "Target", position: "insideTopRight" }}
              />
              <Bar 
                yAxisId="hours"
                dataKey="hours" 
                fill="#0ea5e9" 
                fillOpacity={0.6}
                radius={[4, 4, 0, 0]}
                name="Hours Studied"
              />
              <Line
                yAxisId="efficiency"
                type="monotone"
                dataKey="efficiency"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                name="Efficiency %"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
}
