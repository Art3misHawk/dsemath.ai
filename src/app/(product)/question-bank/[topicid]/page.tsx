'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Question } from '@/app/_globals/questions'

export default function ExampleClientComponent() {
  const params = useParams<{ topicid: string }>()
  const topicId = params.topicid
  const [questions, setQuestions] = useState<Question[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/dev/question-bank`)
        if (!response.ok) {
          throw new Error('Failed to fetch questions')
        }
        const data: Question[] = await response.json()
        setQuestions(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    if (topicId) {
      fetchQuestions()
    }
  }, [topicId])

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    )
  }

  // Note: The loading state is handled by loading.tsx, so we don't need a loading UI here
  return (
    <div>
      <h1>Question Bank for {topicId}</h1>
      {questions.length > 0 ? (
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              Q: {question.question}
              A: <p className="opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">{question.answer}</p>
              </li>
          ))}
        </ul>
      ) : (
        <p>No questions found for this topic.</p>
      )}  
    </div>
  )
}