interface SettingsType {
  notifications: {
    email: boolean;
    weeklyReports: boolean;
  };
  appearance: {
    theme: 'system';
    fontSize: 'medium';
  };
  privacy: {
    shareData: boolean;
    showOnlineStatus: boolean;
  };
}

export default SettingsType