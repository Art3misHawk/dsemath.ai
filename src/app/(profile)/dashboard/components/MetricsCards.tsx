'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TbTarget, 
  TbFlame, 
  TbTrophy, 
  TbClock, 
  TbTrendingUp, 
  TbBrain, 
  TbChartLine,
  TbMedal
} from 'react-icons/tb';
import { BiStats } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  description?: string;
  trend?: number[];
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon, 
  description,
  trend 
}: MetricCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-slate-600';
    }
  };

  const getChangeBackground = () => {
    switch (changeType) {
      case 'positive': return 'bg-green-50';
      case 'negative': return 'bg-red-50';
      default: return 'bg-slate-50';
    }
  };

  return (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-blue-50/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
              {title}
            </p>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {value}
            </p>
            {change && (
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getChangeBackground()} ${getChangeColor()}`}>
                {changeType === 'positive' && <TbTrendingUp className="w-3 h-3 mr-1" />}
                {change}
              </div>
            )}
            {description && (
              <p className="text-xs text-slate-500 mt-2">{description}</p>
            )}
          </div>
          <div className="flex-shrink-0 ml-4">
            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
              {icon}
            </div>
          </div>
        </div>
        
        {/* Mini trend line */}
        {trend && (
          <div className="mt-4 h-8">
            <svg width="100%" height="100%" className="overflow-visible">
              <polyline
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="2"
                points={trend.map((point, index) => 
                  `${(index / (trend.length - 1)) * 100},${40 - (point / Math.max(...trend)) * 30}`
                ).join(' ')}
              />
            </svg>
          </div>
        )}
      </CardContent>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sky-50/30 pointer-events-none" />
    </Card>
  );
};

export default function MetricsCards() {
  const metrics = [
    {
      title: "Total Problems Solved",
      value: "1,247",
      change: "+12 today",
      changeType: "positive" as const,
      icon: <TbTarget className="w-6 h-6" />,
      description: "Across all difficulty levels",
      trend: [45, 52, 48, 61, 67, 58, 72, 69, 75, 82, 78, 85]
    },
    {
      title: "Current Streak",
      value: "12 days",
      change: "Personal best!",
      changeType: "positive" as const,
      icon: <TbFlame className="w-6 h-6" />,
      description: "Consecutive days of practice",
      trend: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
      title: "Average Accuracy",
      value: "87.3%",
      change: "+2.1% this week",
      changeType: "positive" as const,
      icon: <TbTrophy className="w-6 h-6" />,
      description: "Last 30 days performance",
      trend: [82, 83, 85, 84, 86, 87, 85, 88, 89, 87, 88, 87]
    },
    {
      title: "Learning Time",
      value: "24.5h",
      change: "This week",
      changeType: "neutral" as const,
      icon: <TbClock className="w-6 h-6" />,
      description: "Goal: 20h per week",
      trend: [18, 22, 19, 25, 23, 20, 24.5]
    },
    {
      title: "Current Rank",
      value: "#47",
      change: "↑3 positions",
      changeType: "positive" as const,
      icon: <TbMedal className="w-6 h-6" />,
      description: "Out of 2,340 students",
      trend: [52, 51, 49, 48, 50, 47, 47]
    },
    {
      title: "Skill Level",
      value: "Advanced",
      change: "Level 18",
      changeType: "positive" as const,
      icon: <TbBrain className="w-6 h-6" />,
      description: "2,340 XP to next level",
      trend: [14, 15, 15, 16, 16, 17, 17, 18]
    },
    {
      title: "Weekly Improvement",
      value: "+8.5%",
      change: "Above average",
      changeType: "positive" as const,
      icon: <TbChartLine className="w-6 h-6" />,
      description: "Performance gain",
      trend: [2.1, 3.4, 5.2, 4.8, 6.1, 7.3, 8.5]
    },
    {
      title: "Topics Mastered",
      value: "15/22",
      change: "+2 this month",
      changeType: "positive" as const,
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      description: "DSE Math syllabus",
      trend: [10, 11, 12, 12, 13, 14, 15]
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          changeType={metric.changeType}
          icon={metric.icon}
          description={metric.description}
          trend={metric.trend}
        />
      ))}
    </div>
  );
}
