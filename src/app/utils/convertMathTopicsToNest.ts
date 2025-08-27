import mathTopics, { FormType, mathTopicsType } from '@/app/_globals/mathTopics';

export interface NestedMathTopics {
  [key in keyof FormType]: mathTopicsType[];
}

export function nestMathTopicsByForm(topics: mathTopicsType[]): NestedMathTopics {
  // Define the order of forms
  const formOrder: mathTopicsType['form'][] = ['Junior', 'Form 4', 'Form 5', 'Form 6'];

  // Group topics by form
  const nested: NestedMathTopics = {};

  // Initialize empty arrays for each form in order
  formOrder.forEach((form) => {
    nested[form] = [];
  });

  // Group topics
  topics.forEach((topic) => {
    nested[topic.form].push(topic);
  });

  // Sort each form's topics by name (optional, for consistency)
  Object.keys(nested).forEach((form) => {
    nested[form].sort((a, b) => a.name.localeCompare(b.name));
  });

  return nested;
}

// Precompute the nested structure
export const nestedMathTopics = nestMathTopicsByForm(mathTopics);