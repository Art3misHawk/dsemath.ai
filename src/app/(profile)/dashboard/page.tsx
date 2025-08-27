'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, Button } from './ui/ui-components';
import { Trophy, Users, TrendingUp, Target } from 'lucide-react';
import GamificationDashboard from './gamification/GamificationDashboard';
import Leaderboard from './LeaderboardNew';

const DashboardPage = () => {
  const [activeMainTab, setActiveMainTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                DSE Math Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Track your progress and compete with others
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Export Progress
              </Button>
              <Button size="sm">
                Start Practice
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Current Level</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">18</p>
                </div>
                <Target className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Study Streak</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">12 days</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Global Rank</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">#47</p>
                </div>
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total XP</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">15,750</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              My Dashboard
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <GamificationDashboard />
          </TabsContent>

          <TabsContent value="leaderboard">
            <div className="mt-8">
              <Leaderboard />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
