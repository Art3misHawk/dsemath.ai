'use client'

import { useState } from "react";

import { Mail } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';

interface NotificationSettingsType {
  emailNotifications: boolean;
  pushNotifications: boolean;
  weeklyReports: boolean;
  achievementAlerts: boolean;
  studyReminders: boolean;
  reminderTime: string;
}

export default function NotificationPage() {
const [settings, setSettings] = useState<NotificationSettingsType>({
    emailNotifications: true,
    pushNotifications: true,
    weeklyReports: true,
    achievementAlerts: true,
    studyReminders: true,
    reminderTime: '19:00',
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return(
    <div className="flex flex-col gap-10">
      <EmailNotifications settings={settings} updateSetting={updateSetting}/>
      <WeeklyProgressReports settings={settings} updateSetting={updateSetting} />
      <DailyStudyReminders settings={settings} updateSetting={updateSetting} />
    </div>
  );
}

function EmailNotifications({
  settings,
  updateSetting,
}: {
  settings: NotificationSettingsType;
  updateSetting: (key: keyof NotificationSettingsType, value: boolean | string) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="email-notifications" className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Email Notifications
        </Label>
        <div className="text-sm text-muted-foreground">
          Receive updates via email
        </div>
      </div>
      <Switch
        id="email-notifications"
        checked={settings.emailNotifications}
        onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
      />
    </div>
  );
}

function WeeklyProgressReports ({
  settings,
  updateSetting,
}: {
  settings: NotificationSettingsType;
  updateSetting: (key: keyof NotificationSettingsType, value: boolean | string) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="weekly-reports">Weekly Progress Reports</Label>
        <div className="text-sm text-muted-foreground">
          Summary of your weekly performance
        </div>
      </div>
      <Switch
        id="weekly-reports"
        checked={settings.weeklyReports}
        onCheckedChange={(checked) => updateSetting('weeklyReports', checked)}
      />
    </div>
  )
}

function DailyStudyReminders ({
  settings,
  updateSetting,
}: {
  settings: NotificationSettingsType;
  updateSetting: (key: keyof NotificationSettingsType, value: boolean | string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="study-reminders">Daily Study Reminders</Label>
          <div className="text-sm text-muted-foreground">
            Remind you to practice daily
          </div>
        </div>
        <Switch
          id="study-reminders"
          checked={settings.studyReminders}
          onCheckedChange={(checked) => updateSetting('studyReminders', checked)}
        />
      </div>
      
      {settings.studyReminders && (
        <div className="space-y-2 ml-6">
          <Label htmlFor="reminder-time">Reminder Time</Label>
          <Input
            id="reminder-time"
            type="time"
            value={settings.reminderTime}
            onChange={(e) => updateSetting('reminderTime', e.target.value)}
            className="w-32 bg-grey-500"
          />
        </div>
      )}
    </div>
  )
}