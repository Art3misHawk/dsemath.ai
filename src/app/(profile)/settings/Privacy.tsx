import { SettingsType } from '@/app/_types/settings';

export default function PrivacySection(props: {
  privacy: SettingsType['privacy'];
  handlePrivacyChange: (key: keyof SettingsType['privacy'], value: boolean) => void;
  isSaving: boolean;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Privacy</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={props.privacy.shareData}
            onChange={function(e: React.ChangeEvent<HTMLInputElement>) {
              props.handlePrivacyChange('shareData', e.target.checked);
            }}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            disabled={props.isSaving}
          />
          <label className="ml-2 block text-sm text-gray-600">
            Share data with third parties
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={props.privacy.showOnlineStatus}
            onChange={function(e: React.ChangeEvent<HTMLInputElement>) {
              props.handlePrivacyChange('showOnlineStatus', e.target.checked);
            }}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            disabled={props.isSaving}
          />
          <label className="ml-2 block text-sm text-gray-600">
            Show online status
          </label>
        </div>
      </div>
    </section>
  );
}