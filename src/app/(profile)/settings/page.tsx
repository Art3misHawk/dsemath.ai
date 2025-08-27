'use client';

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Settings {
  appearance: {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
  };
  privacy: {
    shareData: boolean;
    showOnlineStatus: boolean;
  };
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
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
      push: true,
      sms: false,
    },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch settings from server on mount
  useEffect(() => {
    const fetchSettings = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/settings');
        if (!response.ok) {
          throw new Error('Failed to fetch settings');
        }
        const data = await response.json();
        setSettings(data);
        toast.success('Settings loaded successfully!');
      } catch (error) {
        toast.error('Failed to load settings.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  // Simulate API call to update settings
  const updateSettingsOnServer = async (updatedSettings: Settings) => {
    setIsSaving(true);
    try {
      await fetch('/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSettings),
      });
      toast.success('Settings updated successfully!');
    } catch (error) {
      toast.error('Failed to update settings.');
    } finally {
      setIsSaving(false);
    }
  };

  // Update settings and send to server
  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        updateSettingsOnServer(settings);
      }, 500); // Debounce to prevent too many API calls
      return () => clearTimeout(timeout);
    }
  }, [settings, isLoading]);

  const handleAppearanceChange = (
    key: keyof Settings['appearance'],
    value: string
  ) => {
    setSettings((prev) => ({
      ...prev,
      appearance: {
        ...prev.appearance,
        [key]: value,
      },
    }));
  };

  const handlePrivacyChange = (
    key: keyof Settings['privacy'],
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [key]: value,
      },
    }));
  };

  const handleNotificationChange = (
    key: keyof Settings['notifications'],
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

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

        {/* Appearance Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Appearance</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Theme</label>
              <select
                value={settings.appearance.theme}
                onChange={(e) => handleAppearanceChange('theme', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                disabled={isSaving}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Font Size</label>
              <select
                value={settings.appearance.fontSize}
                onChange={(e) => handleAppearanceChange('fontSize', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                disabled={isSaving}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </section>

        {/* Privacy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Privacy</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.privacy.shareData}
                onChange={(e) => handlePrivacyChange('shareData', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                disabled={isSaving}
              />
              <label className="ml-2 block text-sm text-gray-600">
                Share data with third parties
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.privacy.showOnlineStatus}
                onChange={(e) => handlePrivacyChange('showOnlineStatus', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                disabled={isSaving}
              />
              <label className="ml-2 block text-sm text-gray-600">
                Show online status
              </label>
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={(e) => handleNotificationChange('email', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                disabled={isSaving}
              />
              <label className="ml-2 block text-sm text-gray-600">
                Email notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.push}
                onChange={(e) => handleNotificationChange('push', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                disabled={isSaving}
              />
              <label className="ml-2 block text-sm text-gray-600">
                Push notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications.sms}
                onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                disabled={isSaving}
              />
              <label className="ml-2 block text-sm text-gray-600">
                SMS notifications
              </label>
            </div>
          </div>
        </section>

        {isSaving && (
          <div className="text-sm text-gray-500">Saving settings...</div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;