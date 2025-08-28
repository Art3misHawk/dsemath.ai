import { MathTopicId } from '@/app/_globals/mathTopics'

export interface Question {
  id: number;
  topics: MathTopicId[];
  question: string;
  answer: string | number;
}