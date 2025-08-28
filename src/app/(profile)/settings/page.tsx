'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type SettingsType from '@/app/_globals/settings';

// Helper function to fetch settings from server
function fetchSettings(
  setSettings: React.Dispatch<React.SetStateAction<SettingsType>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): void {
  setIsLoading(true);
  fetch('/api/dev/settings')
    .then(function(response: Response) {
      if (!response.ok) {
        throw new Error('Failed to fetch settings');
      }
      return response.json();
    })
    .then(function(data: SettingsType) {
      setSettings(data);
      toast.success('Settings loaded successfully!');
    })
    .catch(function(error: Error) {
      toast.error('Failed to load settings.');
    })
    .finally(function() {
      setIsLoading(false);
    });
}

// Helper function to update settings on server
function updateSettingsOnServer(
  updatedSettings: SettingsType,
  setIsSaving: React.Dispatch<React.SetStateAction<boolean>>
): void {
  setIsSaving(true);
  fetch('/api/dev/settings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedSettings),
  })
    .then(function(response: Response) {
      if (!response.ok) {
        throw new Error('Failed to update settings');
      }
      toast.success('Settings updated successfully!');
    })
    .catch(function(error: Error) {
      toast.error('Failed to update settings.');
    })
    .finally(function() {
      setIsSaving(false);
    });
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsType>({
    appearance: {
      theme: 'system',
      fontSize: 'medium',
    },
    privacy: {
      shareData: false,
      showOnlineStatus: true,
    },
    notifications: {
      email: true,
      weeklyReports: true,
    },
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Fetch settings on mount
  useEffect(function() {
    fetchSettings(setSettings, setIsLoading);
  }, []);

  // Update settings on server when settings change
  useEffect(function() {
    if (!isLoading) {
      const timeout = setTimeout(function() {
        updateSettingsOnServer(settings, setIsSaving);
      }, 500); // Debounce to prevent too many API calls
      return function() { clearTimeout(timeout); };
    }
  }, [settings, isLoading]);

  function handleAppearanceChange(key: keyof SettingsType['appearance'], value: string): void {
    setSettings(function(prev: SettingsType) {
      return {
        ...prev,
        appearance: {
          ...prev.appearance,
          [key]: value,
        },
      };
    });
  }

  function handlePrivacyChange(key: keyof SettingsType['privacy'], value: boolean): void {
    setSettings(function(prev: SettingsType) {
      return {
        ...prev,
        privacy: {
          ...prev.privacy,
          [key]: value,
        },
      };
    });
  }

  function handleNotificationChange(key: keyof SettingsType['notifications'], value: boolean): void {
    setSettings(function(prev: SettingsType) {
      return {
        ...prev,
        notifications: {
          ...prev.notifications,
          [key]: value,
        },
      };
    });
  }

  // Inline component sections to avoid import issues
  const AppearanceSection = () => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Appearance</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Theme</label>
          <select
            value={settings.appearance.theme}
            onChange={(e) => handleAppearanceChange('theme', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isSaving}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Font Size</label>
          <select
            value={settings.appearance.fontSize}
            onChange={(e) => handleAppearanceChange('fontSize', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isSaving}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>
  );

  const PrivacySection = () => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Privacy</h2>
      <div className="space-y-4">
        <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
          <div>
            <span className="font-medium text-gray-700">Share Data</span>
            <p className="text-sm text-gray-500">Allow sharing of anonymized usage data</p>
          </div>
          <input
            type="checkbox"
            checked={settings.privacy.shareData}
            onChange={(e) => handlePrivacyChange('shareData', e.target.checked)}
            className="rounded focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
        </label>
        <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
          <div>
            <span className="font-medium text-gray-700">Show Online Status</span>
            <p className="text-sm text-gray-500">Let others see when you&apos;re online</p>
          </div>
          <input
            type="checkbox"
            checked={settings.privacy.showOnlineStatus}
            onChange={(e) => handlePrivacyChange('showOnlineStatus', e.target.checked)}
            className="rounded focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
        </label>
      </div>
    </div>
  );

  const NotificationsSection = () => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Notifications</h2>
      <div className="space-y-4">
        <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
          <div>
            <span className="font-medium text-gray-700">Email Notifications</span>
            <p className="text-sm text-gray-500">Receive important updates via email</p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.email}
            onChange={(e) => handleNotificationChange('email', e.target.checked)}
            className="rounded focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
        </label>
        <label className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
          <div>
            <span className="font-medium text-gray-700">Weekly Reports</span>
            <p className="text-sm text-gray-500">Get weekly progress summaries</p>
          </div>
          <input
            type="checkbox"
            checked={settings.notifications.weeklyReports}
            onChange={(e) => handleNotificationChange('weeklyReports', e.target.checked)}
            className="rounded focus:ring-2 focus:ring-blue-500"
            disabled={isSaving}
          />
        </label>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Loading settings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <div>
            {<AppearanceSection />}
            <NotificationsSection />
          </div>
          <div>
            <PrivacySection />
          </div>
        </div>
        
        {isSaving && (
          <div className="text-sm text-gray-500 mt-4">Saving settings...</div>
        )}
      </div>
    </div>
  );
}