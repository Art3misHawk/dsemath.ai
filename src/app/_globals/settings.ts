interface SettingsType {
  notifications: {
    email: boolean;
    weeklyReports: boolean;
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
    fontSize: 'small' | 'medium' | 'large';
  };
  privacy: {
    shareData: boolean;
    showOnlineStatus: boolean;
  };
}

export default SettingsType