import { nestMathTopicsByForm } from '@/app/utils/NestMathTopics'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json(nestMathTopicsByForm(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch math topics by form' }, { status: 500 });
  }
}