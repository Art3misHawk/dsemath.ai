import { NextRequest, NextResponse } from 'next/server';
import SettingsType from '@/app/_globals/settings';

export async function GET() {
  try {
    // Template settings object
    const templateSettings: SettingsType = {
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
    };
    return NextResponse.json(templateSettings, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch template settings' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const settings = await req.json();
    // Save settings to database or perform server-side logic here
    console.log('Received settings:', settings);
    return NextResponse.json({ message: 'Settings updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}