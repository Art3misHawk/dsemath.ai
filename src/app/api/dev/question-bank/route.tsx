import { Question } from '@/app/_globals/questions'
import { NextResponse } from 'next/server';

const templateQuestion: Question[] = [
  {
    id: 1,
    topics: ["jf-areas-volumes"],
    question: '1+1=',
    answer: '2'
  },
  {
    id: 2,
    topics: ["jf-areas-volumes"], 
    question: '2+2=',
    answer: '4'
  },
    {
    id: 3,
    topics: ["jf-areas-volumes"], 
    question: '3+3',
    answer: '6'
  },
  {
    id: 4,
    topics: ["jf-areas-volumes"], 
    question: '4+4',
    answer: '8'
  },
  {
    id: 5,
    topics: ["jf-areas-volumes"], 
    question: '5+5',
    answer: '10'
  }
]

export async function GET() {
  try {
    return NextResponse.json(templateQuestion, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch math topics by form' }, { status: 500 });
  }
}

