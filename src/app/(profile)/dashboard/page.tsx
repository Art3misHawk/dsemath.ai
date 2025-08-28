'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TbChartLine, TbBrain, TbTarget, TbCalendar, TbDashboard } from 'react-icons/tb';
import { BiStats } from 'react-icons/bi';

// Import new analytics components
import MetricsCards from './components/MetricsCards';
import PerformanceCharts from './components/PerformanceCharts';
import ProgressTracking from './components/ProgressTracking';
import ComparativeAnalytics from './components/ComparativeAnalytics';
import SkillAssessment from './components/SkillAssessment';

const DashboardPage = () => {
  const [activeMainTab, setActiveMainTab] = useState('overview');
  const [analyticsTab, setAnalyticsTab] = useState('performance');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Analytics Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Comprehensive insights into your learning journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Main Dashboard Tabs */}
        <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <TbDashboard className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BiStats className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <MetricsCards />
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <Tabs value={analyticsTab} onValueChange={setAnalyticsTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 max-w-3xl">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="comparative">Comparative</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="performance">
                <PerformanceCharts />
              </TabsContent>

              <TabsContent value="progress">
                <ProgressTracking />
              </TabsContent>

              <TabsContent value="comparative">
                <ComparativeAnalytics />
              </TabsContent>

              <TabsContent value="skills">
                <SkillAssessment />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
