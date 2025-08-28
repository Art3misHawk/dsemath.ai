export const forms = [
  'Junior',
  'Form 4',
  'Form 5',
  'Form 6'
] as const;

export type FormType = typeof forms[number];

export interface mathTopicsType {
  id: string;
  name: string;
  form: FormType;
  questions: number;
  icon: string;
  color: string;
}

const mathTopics: mathTopicsType[] = [
  { id: 'jf-areas-volumes', name: 'Areas and Volumes', form: 'Junior', questions: 32, icon: '📐', color: '#10B981' },
  { id: 'jf-percentages', name: 'Percentages', form: 'Junior', questions: 28, icon: '%', color: '#10B981' },
  { id: 'jf-rate-ratio', name: 'Rate & Ratio', form: 'Junior', questions: 24, icon: '⚖️', color: '#10B981' },
  { id: 'jf-binary-numbers', name: 'Binary Numbers', form: 'Junior', questions: 18, icon: '🔢', color: '#10B981' },
  { id: 'jf-estimation-error', name: 'Estimation and Error', form: 'Junior', questions: 22, icon: '📊', color: '#10B981' },
  { id: 'jf-factorization', name: 'Factorization', form: 'Junior', questions: 26, icon: '🔤', color: '#10B981' },
  { id: 'jf-simultaneous-equations', name: 'Simultaneous Equations', form: 'Junior', questions: 30, icon: '🔗', color: '#10B981' },
  { id: 'jf-polygons', name: 'Polygons', form: 'Junior', questions: 25, icon: '🔷', color: '#10B981' },
  { id: 'jf-basic-triangles', name: 'Basic Triangles and its Properties', form: 'Junior', questions: 27, icon: '🔺', color: '#10B981' },
  { id: 'f4-quadratic', name: 'Quadratic Functions', form: 'Form 4', questions: 24, icon: '📊', color: '#059669' },
  { id: 'f4-geometry', name: 'Basic Geometry', form: 'Form 4', questions: 18, icon: '📐', color: '#059669' },
  { id: 'f4-rational-functions', name: 'Rational Functions', form: 'Form 4', questions: 20, icon: '🔢', color: '#059669' },
  { id: 'f4-logarithms', name: 'Logarithms Functions', form: 'Form 4', questions: 16, icon: '📈', color: '#059669' },
  { id: 'f4-exponential', name: 'Exponential Functions', form: 'Form 4', questions: 19, icon: '📊', color: '#059669' },
  { id: 'f4-circle-properties', name: 'Basic Properties of Circle', form: 'Form 4', questions: 21, icon: '⭕', color: '#059669' },
  { id: 'f4-trigonometry-more', name: 'More about Trigonometry', form: 'Form 4', questions: 17, icon: '📐', color: '#059669' },
  { id: 'f4-straight-lines', name: 'Equations of Straight Lines', form: 'Form 4', questions: 23, icon: '📏', color: '#059669' },
  { id: 'f4-functions', name: 'Functions', form: 'Form 4', questions: 25, icon: '🔤', color: '#059669' },
  { id: 'f5-trigo-2d', name: 'Trigo 2D', form: 'Form 5', questions: 28, icon: '📐', color: '#DC2626' },
  { id: 'f5-trigo-3d', name: 'Trigo 3D', form: 'Form 5', questions: 25, icon: '�', color: '#DC2626' },
  { id: 'f5-equations-circles', name: 'Equations of Circles', form: 'Form 5', questions: 22, icon: '⭕', color: '#DC2626' },
  { id: 'f5-variations', name: 'Variations', form: 'Form 5', questions: 14, icon: '⚖️', color: '#DC2626' },
  { id: 'f5-probability', name: 'Probability', form: 'Form 5', questions: 26, icon: '🎲', color: '#DC2626' },
  { id: 'f5-more-statistics', name: 'More about Statistics', form: 'Form 5', questions: 23, icon: '📊', color: '#DC2626' },
  { id: 'f5-inequality', name: 'Inequality', form: 'Form 5', questions: 19, icon: '≠', color: '#DC2626' },
  { id: 'f5-more-equations', name: 'More about Equations', form: 'Form 5', questions: 24, icon: '🔧', color: '#DC2626' },
  { id: 'f6-calculus', name: 'Introduction to Calculus', form: 'Form 6', questions: 32, icon: '∫', color: '#7C3AED' },
  { id: 'f6-matrices', name: 'Matrices & Determinants', form: 'Form 6', questions: 18, icon: '⬜', color: '#7C3AED' },
  { id: 'f6-4-centers', name: '4 Centers', form: 'Form 6', questions: 20, icon: '⊕', color: '#7C3AED' }
];

export const formUIColor = {
  "Junior": '#10B981',
  'Form 4': '#059669',
  'Form 5': '#DC2626',
  'Form 6': '#7C3AED',
}

export default mathTopics