"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Trophy, 
  Users, 
  MessageCircle, 
  Target, 
  Star, 
  Medal,
  TrendingUp,
  Calendar,
  Clock,
  Plus,
  Search,
  Filter,
  UserPlus,
  Send,
  ThumbsUp,
  Award,
  Flame,
  Zap,
  Crown,
  Gift
} from "lucide-react";
import {
  HiUserGroup,
  HiChatBubbleLeftRight,
  HiTrophy,
  HiChartBar
} from "react-icons/hi2";

// Types
type TabId = 'leaderboard' | 'friends' | 'discussions' | 'activity';
type LeaderboardFilter = 'weekly' | 'monthly' | 'alltime';

// Mock data - In real app, this would come from API
const mockLeaderboardData = [
  { id: 1, name: "Alice Chan", avatar: "AC", score: 2850, rank: 1, streak: 15, badge: "crown" },
  { id: 2, name: "Bob Li", avatar: "BL", score: 2720, rank: 2, streak: 12, badge: "star" },
  { id: 3, name: "Carol Wong", avatar: "CW", score: 2680, rank: 3, streak: 8, badge: "medal" },
  { id: 4, name: "David Chen", avatar: "DC", score: 2450, rank: 4, streak: 20, badge: "fire" },
  { id: 5, name: "Emma Lam", avatar: "EL", score: 2380, rank: 5, streak: 5, badge: "star" },
];

const mockFriendsData = [
  { id: 1, name: "Michael Zhang", avatar: "MZ", status: "online", lastActivity: "Solving calculus problems" },
  { id: 2, name: "Sophie Kim", avatar: "SK", status: "offline", lastActivity: "Completed Algebra Chapter 3" },
  { id: 3, name: "Ryan Ho", avatar: "RH", status: "online", lastActivity: "In study group discussion" },
  { id: 4, name: "Lisa Chiu", avatar: "LC", status: "away", lastActivity: "Generated 50 practice questions" },
];

const mockActivityFeed = [
  { id: 1, user: "Alice Chan", action: "completed", target: "Calculus Chapter 5", time: "2 hours ago", type: "achievement" },
  { id: 2, user: "Bob Li", action: "earned", target: "Problem Solver Badge", time: "4 hours ago", type: "badge" },
  { id: 3, user: "Carol Wong", action: "started", target: "30-day study streak", time: "1 day ago", type: "streak" },
  { id: 4, user: "David Chen", action: "joined", target: "Advanced Mathematics Study Group", time: "2 days ago", type: "group" },
];

const mockDiscussions = [
  { id: 1, title: "Help with Integration by Parts", author: "Jenny Wu", replies: 12, lastReply: "30 min ago", category: "Calculus" },
  { id: 2, title: "Best strategies for DSE Paper 2?", author: "Tom Ng", replies: 25, lastReply: "1 hour ago", category: "DSE Prep" },
  { id: 3, title: "Study group for Statistics", author: "Amy Lee", replies: 8, lastReply: "2 hours ago", category: "Study Groups" },
  { id: 4, title: "Common mistakes in probability questions", author: "Kevin Liu", replies: 15, lastReply: "3 hours ago", category: "Probability" },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<TabId>('leaderboard');
  const [leaderboardFilter, setLeaderboardFilter] = useState<LeaderboardFilter>('weekly');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <CommunityHeader />
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {activeTab === 'leaderboard' && (
              <LeaderboardSection filter={leaderboardFilter} setFilter={setLeaderboardFilter} />
            )}
            {activeTab === 'friends' && <FriendsSection />}
            {activeTab === 'discussions' && <DiscussionsSection />}
            {activeTab === 'activity' && <ActivityFeedSection />}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <QuickStats />
            <StudyGroups />
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}

function CommunityHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
        Community (In Development)
      </h1>
      <p className="text-xl lg:whitespace-nowrap text-gray-600 max-w-3xl mx-auto">
        Connect with fellow students, compete on leaderboards, and accelerate your learning together.
      </p>
    </div>
  );
}

function TabNavigation({ activeTab, setActiveTab }: { 
  activeTab: TabId; 
  setActiveTab: (tab: TabId) => void;
}) {
  const tabs = [
    { id: 'leaderboard', label: 'Leaderboard', icon: HiTrophy },
    { id: 'friends', label: 'Friends', icon: HiUserGroup },
    { id: 'discussions', label: 'Discussions', icon: HiChatBubbleLeftRight },
    { id: 'activity', label: 'Activity', icon: HiChartBar },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <div className="flex space-x-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 justify-center ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LeaderboardSection({ filter, setFilter }: { 
  filter: LeaderboardFilter; 
  setFilter: (filter: LeaderboardFilter) => void;
}) {
  const filters = [
    { id: 'weekly', label: 'This Week' },
    { id: 'monthly', label: 'This Month' },
    { id: 'alltime', label: 'All Time' },
  ];

  return (
    <Card className="bg-sky-100">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <span>Leaderboard</span>
          </CardTitle>
          <div className="flex space-x-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as LeaderboardFilter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === f.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockLeaderboardData.map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md ${
                index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' : 'bg-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  index === 0 ? 'bg-yellow-500 text-white' :
                  index === 1 ? 'bg-gray-400 text-white' :
                  index === 2 ? 'bg-orange-600 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.avatar}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{user.score} points</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span>{user.streak} day streak</span>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {user.badge === 'crown' && <Crown className="w-6 h-6 text-yellow-500" />}
                {user.badge === 'star' && <Star className="w-6 h-6 text-blue-500" />}
                {user.badge === 'medal' && <Medal className="w-6 h-6 text-orange-500" />}
                {user.badge === 'fire' && <Flame className="w-6 h-6 text-red-500" />}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function FriendsSection() {
  return (
    <div className="space-y-6">
      <Card className="bg-sky-100">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-600" />
              <span>Friends</span>
            </CardTitle>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              <UserPlus className="w-4 h-4" />
              <span>Add Friend</span>
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockFriendsData.map((friend) => (
              <div key={friend.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {friend.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    friend.status === 'online' ? 'bg-green-500' :
                    friend.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{friend.name}</h3>
                  <p className="text-sm text-gray-600">{friend.lastActivity}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function DiscussionsSection() {
  return (
    <Card className="bg-sky-100">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <span>Discussions</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
              <Filter className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockDiscussions.map((discussion) => (
            <div key={discussion.id} className="p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  {discussion.title}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {discussion.category}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>by {discussion.author}</span>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{discussion.replies} replies</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{discussion.lastReply}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ActivityFeedSection() {
  return (
    <Card className="bg-sky-100">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivityFeed.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'achievement' ? 'bg-green-100 text-green-600' :
                activity.type === 'badge' ? 'bg-yellow-100 text-yellow-600' :
                activity.type === 'streak' ? 'bg-orange-100 text-orange-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {activity.type === 'achievement' && <Target className="w-5 h-5" />}
                {activity.type === 'badge' && <Award className="w-5 h-5" />}
                {activity.type === 'streak' && <Flame className="w-5 h-5" />}
                {activity.type === 'group' && <Users className="w-5 h-5" />}
              </div>
              
              <div className="flex-1">
                <p className="text-gray-800">
                  <span className="font-semibold">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium text-blue-600">{activity.target}</span>
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
              
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
                <ThumbsUp className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function QuickStats() {
  return (
    <Card className="bg-sky-100">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Current Rank</span>
          <span className="font-bold text-blue-600">#47</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Points</span>
          <span className="font-bold text-green-600">1,890</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Study Streak</span>
          <span className="font-bold text-orange-600 flex items-center space-x-1">
            <Flame className="w-4 h-4" />
            <span>7 days</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Friends</span>
          <span className="font-bold text-purple-600">24</span>
        </div>
      </CardContent>
    </Card>
  );
}

function StudyGroups() {
  return (
    <Card className="bg-sky-100">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold text-gray-800">Study Groups</CardTitle>
          <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="p-3 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-800">Advanced Calculus</h4>
          <p className="text-sm text-gray-600">12 members • Active</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-800">DSE Prep Squad</h4>
          <p className="text-sm text-gray-600">8 members • Very Active</p>
        </div>
        <div className="p-3 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-800">Statistics Study</h4>
          <p className="text-sm text-gray-600">15 members • Moderate</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Achievements() {
  return (
    <Card className="bg-sky-100">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-gray-800">Recent Achievements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <Trophy className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Problem Solver</h4>
            <p className="text-xs text-gray-600">Solved 100 problems</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Speed Demon</h4>
            <p className="text-xs text-gray-600">Completed quiz in under 5 min</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Gift className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">Helper</h4>
            <p className="text-xs text-gray-600">Helped 10 community members</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}