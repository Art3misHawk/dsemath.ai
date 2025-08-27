import React from 'react';
import SettingsType from '@/app/_globals/settings';

export default function AppearanceSection(props: {
  appearance: SettingsType['appearance'];
  handleAppearanceChange: (key: keyof SettingsType['appearance'], value: string) => void;
  isSaving: boolean;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Appearance</h2>
      <div className="space-y-4">
        <ThemeSetting
          theme={props.appearance.theme}
          handleAppearanceChange={props.handleAppearanceChange}
          isSaving={props.isSaving}
        />
        <FontSizeSetting
          fontSize={props.appearance.fontSize}
          handleAppearanceChange={props.handleAppearanceChange}
          isSaving={props.isSaving}
        />
      </div>
    </section>
  );
}

function ThemeSetting(props: {
  theme: SettingsType['appearance']['theme'];
  handleAppearanceChange: (key: keyof SettingsType['appearance'], value: string) => void;
  isSaving: boolean;
}){
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600">Theme</label>
      <select
        value={props.theme}
        onChange={function(e: React.ChangeEvent<HTMLSelectElement>) {
          props.handleAppearanceChange('theme', e.target.value);
        }}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        disabled={props.isSaving}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}

function FontSizeSetting(props: {
  fontSize: SettingsType['appearance']['fontSize'];
  handleAppearanceChange: (key: keyof SettingsType['appearance'], value: string) => void;
  isSaving: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600">Font Size</label>
      <select
        value={props.fontSize}
        onChange={function(e: React.ChangeEvent<HTMLSelectElement>) {
          props.handleAppearanceChange('fontSize', e.target.value);
        }}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        disabled={props.isSaving}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
}