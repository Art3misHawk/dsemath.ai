interface SettingsType {
  notifications: {
    email: boolean;
    weeklyReports: boolean;
  };
  appearance: {
    theme: 'light';
    fontSize: 'small';
  };
  privacy: {
    shareData: boolean;
    showOnlineStatus: boolean;
  };
}

export default SettingsType