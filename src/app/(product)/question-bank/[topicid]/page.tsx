'use client'
 
import { useParams } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const params = useParams<{ topicid: string }>()
  const topicId = params.topicid

  return (
    <div>
      <h1>Question Bank for {topicId}</h1>
    </div>
  )
}