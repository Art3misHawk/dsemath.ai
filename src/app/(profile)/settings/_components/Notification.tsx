'use client'

import React from 'react';
import SettingsType from '@/app/_globals/settings';

export default function NotificationsSection(props: {
  notifications: SettingsType['notifications'];
  handleNotificationChange: (key: keyof SettingsType['notifications'], value: boolean) => void;
  isSaving: boolean;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Notifications</h2>
      <div className="space-y-4">
        <EmailNotificationSetting
          email={props.notifications.email}
          handleNotificationChange={props.handleNotificationChange}
          isSaving={props.isSaving}
        />
        <WeeklyReportsSetting
          weeklyReports={props.notifications.weeklyReports}
          handleNotificationChange={props.handleNotificationChange}
          isSaving={props.isSaving}
        />
      </div>
    </section>
  );
}

function EmailNotificationSetting(props: {
  email: SettingsType['notifications']['email'];
  handleNotificationChange: (key: keyof SettingsType['notifications'], value: boolean) => void;
  isSaving: boolean;
}) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={props.email}
        onChange={function(e: React.ChangeEvent<HTMLInputElement>) {
          props.handleNotificationChange('email', e.target.checked);
        }}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        disabled={props.isSaving}
      />
      <label className="ml-2 block text-sm text-gray-600">
        Email notifications
      </label>
    </div>
  );
}

function WeeklyReportsSetting(props: {
  weeklyReports: SettingsType['notifications']['weeklyReports'];
  handleNotificationChange: (key: keyof SettingsType['notifications'], value: boolean) => void;
  isSaving: boolean;
}) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={props.weeklyReports}
        onChange={function(e: React.ChangeEvent<HTMLInputElement>) {
          props.handleNotificationChange('weeklyReports', e.target.checked);
        }}
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        disabled={props.isSaving}
      />
      <label className="ml-2 block text-sm text-gray-600">
        Weekly reports
      </label>
    </div>
  );
}