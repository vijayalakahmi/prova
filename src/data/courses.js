/**
 * High-level course categories for discovery.
 * Structure is ready for future API/CMS expansion.
 */
export const courseCategories = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🩺',
    description: 'Practical, in-demand healthcare pathways after 12th or diploma.',
    courses: [
      {
        id: 'nursing',
        name: 'Nursing',
        category: 'healthcare',
        level: 'UG',
        description: 'B.Sc Nursing and related nursing programs.',
      },
      {
        id: 'allied-health',
        name: 'Allied Health Sciences',
        category: 'healthcare',
        level: 'UG',
        description: 'Paramedical and allied health science programs.',
      },
      {
        id: 'pharmacy',
        name: 'Pharmacy',
        category: 'healthcare',
        level: 'UG / PG',
        description: 'B.Pharm, D.Pharm and related pharmacy options.',
      },
    ],
  },
  {
    id: 'medical',
    name: 'Medical',
    icon: '🏥',
    description: 'Medical and AYUSH pathways with clear eligibility guidance.',
    courses: [
      {
        id: 'mbbs',
        name: 'MBBS',
        category: 'medical',
        level: 'UG',
        description: 'Medical degree pathway — eligibility and admission guidance.',
      },
      {
        id: 'bds',
        name: 'BDS',
        category: 'medical',
        level: 'UG',
        description: 'Dental science programs and admission routes.',
      },
      {
        id: 'ayush',
        name: 'AYUSH',
        category: 'medical',
        level: 'UG',
        description: 'Ayurveda, Homoeopathy, Unani, Siddha and related programs.',
      },
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: '⚙️',
    description: 'Career-focused professional degrees for ambitious students.',
    courses: [
      {
        id: 'engineering',
        name: 'Engineering',
        category: 'professional',
        level: 'UG / PG',
        description: 'B.E. / B.Tech and related engineering pathways.',
      },
      {
        id: 'law',
        name: 'Law',
        category: 'professional',
        level: 'UG / PG',
        description: 'LL.B, integrated law and related legal studies.',
      },
    ],
  },
  {
    id: 'other-ug-pg',
    name: 'Other UG / PG',
    icon: '🎓',
    description: 'Broader higher-education options we can help you explore.',
    courses: [
      {
        id: 'management',
        name: 'Management',
        category: 'other-ug-pg',
        level: 'UG / PG',
        description: 'BBA, MBA and related management programs.',
      },
      {
        id: 'commerce',
        name: 'Commerce',
        category: 'other-ug-pg',
        level: 'UG / PG',
        description: 'B.Com, M.Com and commerce-focused pathways.',
      },
      {
        id: 'science',
        name: 'Science',
        category: 'other-ug-pg',
        level: 'UG / PG',
        description: 'Science degrees across relevant specialisations.',
      },
      {
        id: 'other',
        name: 'Other programs',
        category: 'other-ug-pg',
        level: 'UG / PG',
        description: 'Tell us what you are considering — we will help you explore.',
      },
    ],
  },
];

export const dreamOptions = [
  { id: 'healthcare', label: 'Healthcare', icon: '🩺', courseInterest: 'healthcare' },
  { id: 'technology', label: 'Technology', icon: '💻', courseInterest: 'engineering' },
  { id: 'law', label: 'Law', icon: '⚖️', courseInterest: 'law' },
  { id: 'business', label: 'Business', icon: '📊', courseInterest: 'management' },
  { id: 'exploring', label: 'Still figuring it out', icon: '🎓', courseInterest: 'not-sure' },
];

export const courseInterestOptions = [
  { value: 'nursing', label: 'Nursing' },
  { value: 'allied-health', label: 'Allied Health Sciences' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'mbbs', label: 'MBBS' },
  { value: 'bds', label: 'BDS' },
  { value: 'ayush', label: 'AYUSH' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'law', label: 'Law' },
  { value: 'management', label: 'Management' },
  { value: 'commerce', label: 'Commerce' },
  { value: 'science', label: 'Science' },
  { value: 'healthcare', label: 'Healthcare (general)' },
  { value: 'not-sure', label: 'Not sure yet — help me choose' },
  { value: 'other', label: 'Other' },
];

export const qualificationOptions = [
  { value: '10th', label: '10th / SSLC' },
  { value: '12th', label: '12th / Plus Two' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'degree', label: 'Degree / Graduation' },
  { value: 'other', label: 'Other' },
];

export const locationOptions = [
  { value: 'kerala', label: 'Kerala' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'bangalore', label: 'Bangalore' },
  { value: 'other-india', label: 'Other part of India' },
  { value: 'open', label: 'Open to options' },
];
