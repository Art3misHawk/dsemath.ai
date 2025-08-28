import mathTopics, { mathTopicsType, forms } from '@/app/_globals/mathTopics';

export interface NestedMathTopics {
  [key: string]: mathTopicsType[];
}

let cachedestMathTopicsByForm: NestedMathTopics | null = null;

export function nestMathTopicsByForm(): NestedMathTopics {
  if (cachedestMathTopicsByForm) {
    console.log('Returning cached math topics nested dictionary');
    return cachedestMathTopicsByForm;
  }

  // Group topics by form
  const nested: NestedMathTopics = {};

  // Initialize empty arrays for each form in order
  forms.forEach((form) => {
    nested[form] = [];
  });

  // Group topics
  mathTopics.forEach((topic) => {
    nested[topic.form].push(topic);
  });

  cachedestMathTopicsByForm = nested;
  console.log('Computed and cached math topics nested dictionary');

  return nested;
}