/**
 * Institution data shape prepared for future API integration.
 * V1 uses honest placeholders — no invented partner colleges.
 */
export const institutionTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'university', label: 'Universities' },
  { value: 'college', label: 'Colleges' },
];

export const programOptions = [
  { value: 'all', label: 'All Programs' },
  { value: 'UG', label: 'Under Graduate' },
  { value: 'PG', label: 'Post Graduate' },
];

/**
 * Placeholder entries communicate intent without fake partner claims.
 * Replace / expand when real college data is available.
 */
export const institutions = [
  {
    id: 'placeholder-healthcare',
    name: 'Healthcare & Nursing options',
    type: 'college',
    city: 'Bangalore',
    state: 'Karnataka',
    area: 'Bangalore & nearby',
    programs: ['UG'],
    courses: ['Nursing', 'Allied Health', 'Pharmacy'],
    streams: ['Nursing', 'Allied Health', 'Pharmacy'],
    category: 'healthcare',
    description:
      'College information for nursing, allied health and pharmacy is being updated. Talk to a counsellor for current options.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-medical',
    name: 'Medical & AYUSH pathways',
    type: 'college',
    city: 'Bangalore',
    state: 'Karnataka',
    area: 'Karnataka focus',
    programs: ['UG'],
    courses: ['MBBS', 'BDS', 'AYUSH'],
    streams: ['MBBS', 'BDS', 'AYUSH'],
    category: 'medical',
    description:
      'We help students understand eligibility and admission routes for medical and AYUSH programs. Ask us for current guidance.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-engineering',
    name: 'Engineering college options',
    type: 'college',
    city: 'Bangalore',
    state: 'Karnataka',
    area: 'Bangalore & Karnataka',
    programs: ['UG', 'PG'],
    courses: ['Engineering'],
    streams: ['Engineering'],
    category: 'professional',
    description:
      'Building our shortlist of trusted engineering options. A counsellor can help you explore what fits your profile.',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-law-management',
    name: 'Law, Management & other UG/PG',
    type: 'university',
    city: 'Bangalore',
    state: 'Karnataka',
    area: 'Multi-state exploration',
    programs: ['UG', 'PG'],
    courses: ['Law', 'Management', 'Commerce', 'Science'],
    streams: ['Law', 'Management', 'Commerce', 'Science'],
    category: 'other-ug-pg',
    description:
      'Exploring colleges beyond one city is often the right move. Tell us your interest and preferred location.',
    isPlaceholder: true,
  },
];
