'use client';

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SettingsType from '@/app/_globals/settings';
import AppearanceSection from './_components/Apparance';
import PrivacySection from './_components/Privacy';
import NotificationsSection from './_components/Notification';

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
        <AppearanceSection
          appearance={settings.appearance}
          handleAppearanceChange={handleAppearanceChange}
          isSaving={isSaving}
        />
        <PrivacySection
          privacy={settings.privacy}
          handlePrivacyChange={handlePrivacyChange}
          isSaving={isSaving}
        />
        <NotificationsSection
          notifications={settings.notifications}
          handleNotificationChange={handleNotificationChange}
          isSaving={isSaving}
        />
        {isSaving && (
          <div className="text-sm text-gray-500">Saving settings...</div>
        )}
      </div>
    </div>
  );
}