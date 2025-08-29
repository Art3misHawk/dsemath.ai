/* 'use client';

import { useState, useEffect } from 'react';
import { questions } from '../../../lib/server/appwrite';
import { Question } from '@/app/_globals/questions';

interface ApiResponse {
  success: boolean;
  questions?: Question[];
  message?: string;
}

export default function QuestionsList(): JSX.Element {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async (): Promise<void> => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/questions');
      const data: ApiResponse = await response.json();

      if (data.success && data.questions) {
        setQuestions(data.questions);
      } else {
        setError(data.message || 'Failed to load questions');
      }
    } catch (err) {
      setError('Failed to load questions');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Questions</h2>
      {questions.length === 0 ? (
        <p>No questions found</p>
      ) : (
        <ul>
          {questions.map((question: Question) => (
            <li key={question.$id}>
              <h3>{question.title}</h3>
              <p>{question.content}</p>
              <small>
                Created: {new Date(question.$createdAt).toLocaleDateString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} */