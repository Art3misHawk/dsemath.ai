'use client'

export default async function SingleTopicQuestionBankPage({ params }: {
  params: { topicId: string };
}) {
  // Example: Fetch data based on topicId
  const data = await fetchDataForTopic(params.topicId);

  return (
    <div>
      {params.topicId}
      {/* Render data */}
    </div>
  );
}

async function fetchDataForTopic(topicId: string) {
  // Simulated fetch
  return { topic: `Data for ${topicId}` };
}