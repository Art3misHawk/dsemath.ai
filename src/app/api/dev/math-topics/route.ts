import mathTopics from '@/app/_globals/mathTopics'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(mathTopics, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch math topics by form' }, { status: 500 });
  }
}