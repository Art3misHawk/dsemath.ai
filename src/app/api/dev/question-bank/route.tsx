import { Question } from '@/app/_globals/questions'
import { NextResponse } from 'next/server';

const templateQuestion: Question[] = [
  {
    id: 1,
    topics: ["jf-areas-volumes"],
    question: 'Are you gay',
    answer: 'Yes'
  },
  {
    id: 2,
    topics: ["jf-areas-volumes"], 
    question: 'Is kpc gay',
    answer: 'Yes'
  },
    {
    id: 3,
    topics: ["jf-areas-volumes"], 
    question: 'Is billy gay',
    answer: 'Yes'
  },
  {
    id: 4,
    topics: ["jf-areas-volumes"], 
    question: 'Is Kaito gay',
    answer: 'Yes'
  },
  {
    id: 5,
    topics: ["jf-areas-volumes"], 
    question: 'Is Tim Chun gay',
    answer: 'No'
  }
]

export async function GET() {
  try {
    return NextResponse.json(templateQuestion, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch math topics by form' }, { status: 500 });
  }
}

