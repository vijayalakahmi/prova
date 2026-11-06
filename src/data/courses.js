/**
 * Full PROVA course catalogue.
 * Hierarchy: Field → Subcategory → Course
 * Empty / "add later" groups from the content draft are omitted to keep discovery clean.
 */

export const courseFields = [
  {
    id: 'healthcare',
    name: 'Healthcare & Allied Health',
    shortName: 'Healthcare',
    icon: '🩺',
    tone: 'teal',
    description:
      'Medicine, AYUSH, nursing, pharmacy, physiotherapy and allied health pathways after 12th.',
    tags: ['Nursing', 'MBBS / BDS', 'Pharmacy'],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&h=640&q=80',
    imagePosition: 'center 20%',
    imageAlt: 'Healthcare professionals smiling in a clinical setting',
    note: 'Durations are typical Indian programme lengths and can vary by university. Always verify eligibility, internship and recognition for the specific college and year. NEET-UG is required for MBBS, BDS, BAMS, BHMS, BUMS and BSMS.',
    subcategories: [
      {
        id: 'medicine-dentistry',
        name: 'Medicine & Dentistry',
        courses: [
          {
            id: 'mbbs',
            name: 'MBBS',
            duration: '5½ years (incl. internship)',
            eligibility: 'NEET',
            description:
              'The 5½-year professional medical degree (including internship) leading to a doctor’s qualification (NEET exam required).',
            scope:
              'Become a doctor and build a respected career in hospitals, clinics or your own practice. Specialise as a surgeon, physician or researcher, in India or abroad through further qualification.',
          },
          {
            id: 'bds',
            name: 'Dentistry (BDS)',
            duration: '5 years',
            eligibility: 'NEET',
            description:
              'A 5-year undergraduate dental surgery program (NEET exam required).',
            scope:
              'Run your own dental clinic or join leading hospitals. Specialise in orthodontics, implants or cosmetic dentistry, a field with growing demand worldwide.',
          },
        ],
      },
      {
        id: 'nursing',
        name: 'Nursing & Midwifery',
        courses: [
          {
            id: 'bsc-nursing',
            name: 'B.Sc Nursing',
            duration: '4 years',
            level: 'Undergraduate',
            description:
              'A professional undergraduate degree combining nursing theory, clinical training and hospital experience to prepare students for careers in patient care, community health and nursing practice.',
            scope:
              'One of the most in-demand healthcare careers worldwide. Work as a staff nurse, ICU or OT nurse, community health nurse or nurse educator, with doors open in India and abroad after meeting each country’s licensing requirements.',
          },
          {
            id: 'pb-bsc-nursing',
            name: 'Post Basic B.Sc Nursing (P.B.B.Sc)',
            duration: '2 years',
            level: 'Undergraduate',
            description:
              'A degree programme designed for qualified GNM nurses who want to upgrade their nursing qualification and advance their professional careers.',
            scope:
              'Take your GNM experience to degree level. Move into senior nursing, supervision and teaching, and open the way to M.Sc Nursing and wider career options.',
          },
          {
            id: 'gnm',
            name: 'GNM – General Nursing & Midwifery',
            duration: '3 years',
            level: 'Diploma',
            description:
              'A professional nursing diploma covering patient care, medical and surgical nursing, maternal healthcare, child health and community nursing.',
            scope:
              'Start your nursing career sooner. Work in hospitals, clinics and care homes, then upgrade to a degree and unlock bigger opportunities.',
          },
          {
            id: 'anm',
            name: 'ANM – Auxiliary Nurse Midwifery',
            duration: '2 years',
            level: 'Diploma',
            description:
              'A foundational nursing and midwifery programme focusing on maternal and child healthcare, immunisation, community health and basic nursing services.',
            scope:
              'A fast route into healthcare. Serve in maternal and child health, immunisation and community care, with the option to grow further in nursing.',
          },
        ],
      },
      {
        id: 'ayush',
        name: 'AYUSH & Traditional Medicine',
        courses: [
          {
            id: 'bams',
            name: 'BAMS',
            duration: '5½ years (incl. internship)',
            eligibility: 'NEET-UG',
            description:
              'The 5½-year degree exploring Ayurveda and traditional Indian medical practices. (NEET-UG required.)',
            scope:
              'Practise Ayurveda in clinics, wellness resorts and government AYUSH services. Global interest in natural healing is opening new paths for Ayurveda professionals.',
          },
          {
            id: 'bhms',
            name: 'BHMS',
            duration: '5½ years (incl. internship)',
            eligibility: 'NEET-UG',
            description:
              'The 5½-year degree studying homeopathy and its healthcare practices. (NEET-UG required.)',
            scope:
              'Build a homeopathy practice, join AYUSH hospitals or work in wellness and research. A trusted system of medicine with loyal patients.',
          },
          {
            id: 'bums',
            name: 'BUMS',
            duration: '5½ years (incl. internship)',
            eligibility: 'NEET-UG',
            description:
              'The 5½-year degree focusing on Unani medicine and traditional healthcare practices. (NEET-UG required.)',
            scope:
              'Practise Unani medicine in clinics and government health services, or specialise through postgraduate study.',
          },
          {
            id: 'bsms',
            name: 'BSMS',
            duration: '5½ years (incl. internship)',
            eligibility: 'NEET-UG',
            description:
              'The 5½-year degree exploring Siddha medicine and traditional healing systems. (NEET-UG required.)',
            scope:
              'Practise Siddha medicine in clinics and government institutions; a rare, specialised field with growing wellness interest.',
          },
          {
            id: 'bnys',
            name: 'BNYS',
            duration: '5½ years (incl. internship)',
            eligibility: 'Varies by state',
            description:
              'The 5½-year degree combining naturopathy and yoga-based healthcare practices. (Admission requirements vary by institution and state.)',
            scope:
              'Become a naturopathy and yoga therapist in wellness centres, resorts and lifestyle-health programmes as holistic health becomes more popular worldwide.',
          },
        ],
      },
      {
        id: 'pharmacy',
        name: 'Pharmacy',
        courses: [
          {
            id: 'bpharm',
            name: 'B.Pharm',
            duration: '4 years',
            description:
              'The 4-year undergraduate degree covering medicines, drug formulation, pharmaceutical science and medication safety.',
            scope:
              'Go beyond the pharmacy counter: drug research, manufacturing, quality control, regulatory affairs and hospital pharmacy in a globally connected industry.',
          },
          {
            id: 'pharmd',
            name: 'Pharm.D',
            duration: '6 years (incl. internship)',
            description:
              'The 6-year professional pharmacy programme focusing on clinical pharmacy and patient medication management.',
            scope:
              'Be the clinical pharmacist who guides doctors on medication. Hospital pharmacy, clinical research and drug safety roles, a profile valued by healthcare systems worldwide.',
          },
        ],
      },
      {
        id: 'physiotherapy',
        name: 'Physiotherapy & Rehabilitation',
        courses: [
          {
            id: 'bpt',
            name: 'BPT – Bachelor of Physiotherapy',
            duration: 'Typically 4½ years',
            description:
              'The professional programme teaching students to help patients recover movement, strength and physical function.',
            scope:
              'Help people move, recover and perform again. Work in hospitals, sports teams and rehab centres, or start your own clinic. Demand keeps rising with lifestyle and ageing needs.',
          },
          {
            id: 'bot',
            name: 'BOT – Bachelor of Occupational Therapy',
            duration: 'Typically 4–4½ years',
            description:
              'A programme helping individuals regain independence in everyday activities.',
            scope:
              'Help patients regain independence in daily life. Roles in rehabilitation, child development and mental-health care, a specialised profession with strong demand.',
          },
          {
            id: 'baslp',
            name: 'BASLP – Audiology & Speech-Language Pathology',
            duration: '4 years',
            description:
              'The professional programme specialising in speech, language, communication and hearing disorders.',
            scope:
              'Be the expert who helps people speak, hear and communicate. Work in hospitals, clinics and schools in a field with few trained professionals.',
          },
          {
            id: 'bpo',
            name: 'BPO – Prosthetics and Orthotics',
            duration: 'Typically 4½ years',
            description:
              'A professional programme training students to design artificial limbs and supportive orthopaedic devices.',
            scope:
              'Design artificial limbs and supports that change lives. A rare, specialised profession in rehab centres and orthopaedic device companies.',
          },
        ],
      },
      {
        id: 'lab-diagnostics',
        name: 'Medical Laboratory & Diagnostics',
        courses: [
          {
            id: 'bsc-mlt',
            name: 'B.Sc Medical Laboratory Technology (MLT)',
            duration: 'Typically 3–4 years',
            description:
              'Training students to analyse blood, tissue and clinical samples for disease diagnosis.',
            scope:
              'Behind every diagnosis is a lab expert. Work in hospitals, diagnostic chains and research labs in a field that keeps growing with healthcare.',
          },
          {
            id: 'bsc-mls',
            name: 'B.Sc Medical Laboratory Science (MLS)',
            duration: 'Typically 3–4 years',
            description:
              'Developing practical skills in clinical laboratory testing and diagnostics.',
            scope:
              'Be the person who turns samples into answers. Careers in pathology, diagnostics and hospital laboratories.',
          },
          {
            id: 'bsc-blood-bank',
            name: 'B.Sc Blood Bank Technology',
            duration: 'Typically 3–4 years',
            description:
              'Teaching blood collection, testing and transfusion-related procedures.',
            scope:
              'Play a life-saving role in blood banks and transfusion services, a specialised niche with steady need.',
          },
        ],
      },
      {
        id: 'radiology',
        name: 'Radiology & Imaging',
        courses: [
          {
            id: 'bsc-radiology',
            name: 'B.Sc Radiology & Imaging Technology',
            duration: 'Typically 3–4 years',
            description:
              'Training students to work with X-ray, CT, MRI and other medical imaging technologies.',
            scope:
              'Operate X-ray, CT and MRI machines that show what the eye can’t. Hospital and diagnostic-centre careers in a technology-driven field.',
          },
          {
            id: 'bsc-medical-imaging',
            name: 'B.Sc Medical Imaging Technology',
            duration: 'Typically 3–4 years',
            description:
              'Teaching advanced diagnostic imaging and scanning techniques.',
            scope:
              'Work with advanced scanning technology at hospitals and imaging centres where skilled technologists are always needed.',
          },
          {
            id: 'bsc-nuclear-medicine',
            name: 'B.Sc Nuclear Medicine Technology',
            duration: 'Typically 3–4 years',
            description:
              'Exploring nuclear imaging techniques used in disease diagnosis.',
            scope:
              'A rare, high-tech specialty working with nuclear imaging in advanced hospitals and cancer centres.',
          },
          {
            id: 'bsc-radiotherapy',
            name: 'B.Sc Radiotherapy Technology',
            duration: 'Typically 3–4 years',
            description:
              'Training students to support cancer treatment using advanced radiation technologies.',
            scope:
              'Support cancer treatment with advanced radiation technology in oncology hospitals, a career with real purpose.',
          },
        ],
      },
    ],
  },
  {
    id: 'technology',
    name: 'Technology & Emerging Fields',
    shortName: 'Technology',
    icon: '💻',
    tone: 'indigo',
    description:
      'AI, data science, cybersecurity and computer science pathways — plus guidance across engineering and IT.',
    tags: ['AI & Data', 'CSE', 'Cybersecurity'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=640&q=80',
    imagePosition: 'center',
    imageAlt: 'Technology and engineering circuit board close-up',
    note: 'PROVA also guides students across other B.E./B.Tech, diplomas, BCA, B.Sc CS/IT, and relevant postgraduate programmes.',
    subcategories: [
      {
        id: 'ai-data',
        name: 'Artificial Intelligence & Data Science',
        courses: [
          {
            id: 'btech-ai-ds',
            name: 'B.Tech Artificial Intelligence & Data Science',
            duration: '4 years',
            description:
              'Learn to build intelligent systems using machine learning, big data and advanced AI technologies.',
            scope:
              'Build the AI systems businesses are racing to adopt. Careers as data scientist, ML engineer or AI developer in global tech, finance and healthcare.',
          },
          {
            id: 'btech-ai-ml',
            name: 'B.Tech Artificial Intelligence & Machine Learning',
            duration: '4 years',
            description:
              'Explore how machines learn, analyse information and make intelligent decisions.',
            scope:
              'Teach machines to learn. Roles in AI engineering, automation and smart software across industries worldwide.',
          },
        ],
      },
      {
        id: 'advanced-cs',
        name: 'Advanced Computer Science',
        courses: [
          {
            id: 'btech-cse-ai',
            name: 'B.Tech CSE (AI Specialisation)',
            duration: '4 years',
            description:
              'Combine core computer science with AI to build next-generation software and intelligent applications.',
            scope:
              'Combine strong software skills with AI for careers in product companies, startups and global tech teams.',
          },
          {
            id: 'btech-cse-cyber',
            name: 'B.Tech CSE (Cybersecurity)',
            duration: '4 years',
            description:
              'Learn to protect digital systems, networks and information from evolving cyber threats.',
            scope:
              'Be the digital defender. Security analyst and ethical hacker roles in a field where companies everywhere need skilled people.',
          },
        ],
      },
      {
        id: 'data-analytics',
        name: 'Data Science & Analytics',
        courses: [
          {
            id: 'bsc-data-science',
            name: 'B.Sc Data Science',
            duration: '3–4 years',
            description:
              'Turn complex data into meaningful insights using statistics, programming and data analytics.',
            scope:
              'Turn data into decisions. Analyst and business-intelligence roles in almost every industry.',
          },
        ],
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity & Digital Forensics',
        courses: [
          {
            id: 'bca-cybersecurity',
            name: 'BCA Cybersecurity',
            duration: '3–4 years',
            description:
              'Build skills in ethical hacking, network security and digital protection to fight cybercrime.',
            scope:
              'Start early in cyber defence: ethical hacking, network security and digital forensics with strong growth potential.',
          },
        ],
      },
    ],
  },
  {
    id: 'law',
    name: 'Law & Legal Studies',
    shortName: 'Law',
    icon: '⚖️',
    tone: 'amber',
    description: 'Integrated and 3-year law degrees for advocacy, corporate law and public service.',
    tags: ['BA LL.B', 'BBA LL.B', 'LL.B'],
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&h=640&q=80',
    imagePosition: 'center 30%',
    imageAlt: 'Law books and scales of justice on a desk',
    subcategories: [
      {
        id: 'law-degrees',
        name: 'Law Degrees',
        courses: [
          {
            id: 'ba-llb',
            name: 'BA LL.B',
            duration: '5 years',
            description:
              'Combine arts, humanities and social sciences with professional legal education to build a career in law.',
            scope:
              'Argue in court, advise clients or shape policy. Paths to advocacy, judiciary and public service, with scope for LL.M. in India and abroad.',
          },
          {
            id: 'bba-llb',
            name: 'BBA LL.B',
            duration: '5 years',
            description:
              'Combine business management, corporate studies and legal education for careers in corporate law and business.',
            scope:
              'Step into corporate law, compliance and company legal teams where business and law meet.',
          },
          {
            id: 'bcom-llb',
            name: 'B.Com LL.B',
            duration: '5 years',
            description:
              'Integrate commerce, accounting, finance and legal studies for careers in taxation, corporate law and legal practice.',
            scope:
              'Specialise in taxation, corporate finance and legal advisory, a combination firms value.',
          },
          {
            id: 'bsc-llb',
            name: 'B.Sc LL.B',
            duration: '5 years',
            description:
              'Combine scientific knowledge and analytical skills with professional legal education.',
            scope:
              'Enter the growing world of technology, patents and intellectual property law.',
          },
          {
            id: 'llb',
            name: 'LL.B',
            duration: '3 years',
            description:
              'Pursue a professional law degree after graduation, preparing for careers in legal practice, litigation and corporate law.',
            scope:
              'Already a graduate? Become an advocate, legal advisor or in-house counsel in just 3 years.',
          },
        ],
      },
    ],
  },
  {
    id: 'science-design',
    name: 'Science, Design & Other Careers',
    shortName: 'Science & Design',
    icon: '🔬',
    tone: 'violet',
    description:
      'Pure sciences, design, media, psychology, hospitality, education, architecture, aviation and sports.',
    tags: ['B.Des', 'Psychology', 'Hospitality'],
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&h=640&q=80',
    imagePosition: 'center 30%',
    imageAlt: 'Science laboratory representing science and design careers',
    subcategories: [
      {
        id: 'pure-sciences',
        name: 'Pure Sciences',
        courses: [
          {
            id: 'bsc-physics',
            name: 'B.Sc Physics',
            description: 'Explore matter, energy and the fundamental laws of nature.',
            scope:
              'Open the door to research, space and defence organisations, technology and teaching, with PhD paths worldwide.',
          },
          {
            id: 'bsc-chemistry',
            name: 'B.Sc Chemistry',
            description: 'Study chemical substances, reactions and materials.',
            scope:
              'Work in pharma, materials and chemical industries or research labs; a base for many specialised careers.',
          },
          {
            id: 'bsc-mathematics',
            name: 'B.Sc Mathematics',
            description: 'Develop advanced mathematical and analytical skills.',
            scope:
              'Strong maths skills are valued in analytics, finance, data science and research.',
          },
          {
            id: 'bsc-statistics',
            name: 'B.Sc Statistics',
            description: 'Learn statistical analysis, modelling and data interpretation.',
            scope:
              'Be the person companies rely on for data insights in banking, research and analytics.',
          },
          {
            id: 'bsc-environmental',
            name: 'B.Sc Environmental Science',
            description: 'Study environmental protection and sustainability.',
            scope:
              'Build a career in sustainability, a growing priority for governments and companies.',
          },
          {
            id: 'bsc-agriculture',
            name: 'B.Sc Agriculture',
            description: 'Learn modern agricultural science and farming technologies.',
            scope:
              'Lead modern farming and agri-business, from research to government agriculture services.',
          },
          {
            id: 'bsc-horticulture',
            name: 'B.Sc Horticulture',
            description: 'Specialise in fruits, vegetables, flowers and plant cultivation.',
            scope:
              'Grow a career in plantations, nurseries, floriculture and horticulture research.',
          },
        ],
      },
      {
        id: 'design-arts',
        name: 'Design & Creative Arts',
        courses: [
          {
            id: 'bdes',
            name: 'B.Des – Bachelor of Design',
            description: 'Develop creative and practical design skills.',
            scope:
              'Design products and digital experiences people use every day, in studios and companies.',
          },
          {
            id: 'bdes-fashion',
            name: 'B.Des Fashion Design',
            description: 'Explore fashion, clothing and textile design.',
            scope: 'Create fashion for brands, boutiques or your own label.',
          },
          {
            id: 'bdes-interior',
            name: 'B.Des Interior Design',
            description: 'Create functional and visually appealing interior spaces.',
            scope: 'Turn spaces into experiences. Join design firms or start your own studio.',
          },
          {
            id: 'bdes-communication',
            name: 'B.Des Communication Design',
            description: 'Design visual identities, graphics and digital communication.',
            scope: 'Shape brands and visual stories in agencies and digital media.',
          },
          {
            id: 'bfa',
            name: 'BFA – Bachelor of Fine Arts',
            description: 'Develop artistic skills in visual and creative arts.',
            scope: 'Turn your art into a career as an artist, illustrator or art director.',
          },
          {
            id: 'bsc-animation',
            name: 'B.Sc Animation & Multimedia',
            description: 'Create animations, digital graphics and multimedia content.',
            scope: 'Bring characters and worlds to life in animation, VFX and gaming studios.',
          },
        ],
      },
      {
        id: 'media',
        name: 'Media & Communication',
        courses: [
          {
            id: 'ba-journalism',
            name: 'BA Journalism',
            description: 'Learn reporting, news writing and media communication.',
            scope: 'Tell stories that matter in print, TV and digital media.',
          },
          {
            id: 'ba-mass-comm',
            name: 'BA Mass Communication',
            description: 'Explore journalism, broadcasting and media production.',
            scope: 'Careers in media, PR, advertising and content creation.',
          },
          {
            id: 'ba-film-tv',
            name: 'BA Film & Television Production',
            description: 'Develop skills in filmmaking and television production.',
            scope: 'Direct, edit or produce for film, TV and OTT platforms.',
          },
          {
            id: 'bsc-visual-comm',
            name: 'B.Sc Visual Communication',
            description: 'Combine photography, graphic design and digital media.',
            scope: 'Combine photography, design and digital media for creative careers.',
          },
        ],
      },
      {
        id: 'psychology-social',
        name: 'Psychology & Social Sciences',
        courses: [
          {
            id: 'ba-psychology',
            name: 'BA Psychology',
            description: 'Explore human behaviour, emotions and mental processes.',
            scope:
              'Start a journey into counselling, HR and research; a postgraduate degree opens clinical roles.',
          },
          {
            id: 'bsc-psychology',
            name: 'B.Sc Psychology',
            description: 'Study psychological science, behaviour and research.',
            scope: 'A science-based start for counselling and clinical psychology paths.',
          },
          {
            id: 'ba-sociology',
            name: 'BA Sociology',
            description: 'Understand society, communities and social relationships.',
            scope: 'Understand society and prepare for NGOs, research, policy and civil services.',
          },
          {
            id: 'ba-social-work',
            name: 'BA Social Work',
            description: 'Learn to support individuals and communities through social services.',
            scope: 'Make a difference through NGOs, community development and welfare organisations.',
          },
          {
            id: 'ba-political-science',
            name: 'BA Political Science',
            description: 'Explore governments, political systems and public policies.',
            scope: 'A strong base for civil services, public policy, journalism and research.',
          },
        ],
      },
      {
        id: 'hospitality',
        name: 'Hospitality & Tourism',
        courses: [
          {
            id: 'bhm',
            name: 'BHM – Bachelor of Hotel Management',
            description: 'Build a career in hotels and hospitality operations.',
            scope:
              'Work in hotels, resorts, airlines, cruise lines and events, a career that can take you across the world.',
          },
          {
            id: 'bsc-hospitality',
            name: 'B.Sc Hospitality & Hotel Administration',
            description: 'Learn hotel operations, food services and guest management.',
            scope: 'Move up in hotel operations, front office and food and beverage management.',
          },
          {
            id: 'bba-tourism',
            name: 'BBA Tourism & Travel Management',
            description: 'Explore tourism, travel operations and destination management.',
            scope: 'Plan journeys and manage destinations with travel companies and tourism boards.',
          },
          {
            id: 'bsc-culinary',
            name: 'B.Sc Culinary Arts',
            description: 'Develop professional cooking and culinary management skills.',
            scope: 'Become a chef, run a kitchen or launch your own food brand.',
          },
        ],
      },
      {
        id: 'education',
        name: 'Education & Teaching',
        courses: [
          {
            id: 'beled',
            name: 'B.El.Ed',
            description: 'Prepare for professional elementary school teaching.',
            scope:
              'Shape young minds as an elementary school teacher, with room for further study in education.',
          },
          {
            id: 'deled',
            name: 'D.El.Ed',
            description: 'Develop foundational skills for elementary education.',
            scope: 'Start teaching primary classes, subject to state eligibility requirements.',
          },
        ],
      },
      {
        id: 'architecture-aviation',
        name: 'Architecture & Aviation',
        courses: [
          {
            id: 'barch',
            name: 'B.Arch',
            description: 'Design buildings and develop architectural spaces.',
            scope:
              'Design the buildings and cities of tomorrow with architecture firms, construction companies or your own practice.',
          },
          {
            id: 'bba-aviation',
            name: 'BBA Aviation Management',
            description: 'Learn airport operations and aviation business management.',
            scope: 'Build a career in airports, airlines and ground operations.',
          },
          {
            id: 'bsc-aviation',
            name: 'B.Sc Aviation',
            description: 'Explore aviation science and related technical subjects.',
            scope: 'Explore technical and operational roles in the aviation industry.',
          },
        ],
      },
      {
        id: 'sports',
        name: 'Sports & Fitness',
        courses: [
          {
            id: 'bsc-sports',
            name: 'B.Sc Sports Science',
            description: 'Explore exercise science, fitness and athletic performance.',
            scope: 'Work in fitness, athlete performance and sports rehabilitation.',
          },
          {
            id: 'bped',
            name: 'B.P.Ed',
            description: 'Develop professional skills in physical education and sports training.',
            scope: 'Become a PE teacher, coach or sports trainer in schools and institutions.',
          },
        ],
      },
    ],
  },
  {
    id: 'business',
    name: 'Business & Commerce',
    shortName: 'Business',
    icon: '📊',
    tone: 'rose',
    description: 'BBA, commerce, finance and emerging business degrees for corporate and startup careers.',
    tags: ['BBA', 'B.Com', 'FinTech'],
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&h=640&q=80',
    imagePosition: 'center 25%',
    imageAlt: 'Business team discussing strategy in a meeting',
    subcategories: [
      {
        id: 'business-management',
        name: 'Business & Management',
        courses: [
          {
            id: 'bba',
            name: 'BBA – Bachelor of Business Administration',
            description: 'Build business, leadership and management skills.',
            scope: 'Start a corporate career or move on to an MBA.',
          },
          {
            id: 'bba-analytics',
            name: 'BBA Business Analytics',
            description: 'Use business data to make smarter decisions.',
            scope: 'Use data to guide business decisions as an analyst.',
          },
          {
            id: 'bba-finance',
            name: 'BBA Finance',
            description: 'Explore financial management and investment principles.',
            scope: 'Banking, financial services and investment careers.',
          },
          {
            id: 'bba-marketing',
            name: 'BBA Marketing',
            description: 'Learn branding, marketing and customer engagement.',
            scope: 'Build brands and run campaigns across industries.',
          },
          {
            id: 'bba-hr',
            name: 'BBA Human Resource Management',
            description: 'Develop skills in people and talent management.',
            scope: 'Hire, develop and lead talent in companies.',
          },
          {
            id: 'bba-international',
            name: 'BBA International Business',
            description: 'Understand global business operations and trade.',
            scope: 'Work in global trade and multinational companies.',
          },
          {
            id: 'bba-entrepreneurship',
            name: 'BBA Entrepreneurship',
            description: 'Learn how to develop and manage new businesses.',
            scope: 'Launch your own venture or join a fast-growing startup.',
          },
          {
            id: 'bms',
            name: 'BMS – Bachelor of Management Studies',
            description: 'Develop management and organisational skills.',
            scope: 'Grow into management roles; MBA pathway.',
          },
          {
            id: 'bbm',
            name: 'BBM – Bachelor of Business Management',
            description: 'Learn business operations, administration and leadership.',
            scope: 'Build business operations and leadership skills; MBA pathway.',
          },
        ],
      },
      {
        id: 'commerce',
        name: 'Commerce & Accounting',
        courses: [
          {
            id: 'bcom',
            name: 'B.Com',
            description: 'Build a foundation in accounting, finance and taxation.',
            scope: 'The foundation for CA, CMA, CS, banking and accounting careers.',
          },
          {
            id: 'bcom-honours',
            name: 'B.Com Honours',
            description: 'Explore advanced commerce and financial subjects.',
            scope: 'A deeper commerce base for finance careers and higher studies.',
          },
          {
            id: 'bcom-af',
            name: 'B.Com Accounting & Finance',
            description: 'Specialise in accounting, auditing and financial management.',
            scope: 'Careers in accounting, auditing and corporate finance.',
          },
          {
            id: 'bcom-banking',
            name: 'B.Com Banking & Insurance',
            description: 'Understand banking operations and insurance services.',
            scope: 'Work in banks, insurance companies and financial services.',
          },
          {
            id: 'bcom-fintech',
            name: 'B.Com FinTech',
            description: 'Combine financial services with modern digital technologies.',
            scope: 'Join the future of digital banking and payments.',
          },
          {
            id: 'bcom-acca',
            name: 'B.Com Professional / ACCA Pathway',
            description: 'Combine commerce education with professional accounting preparation.',
            scope:
              'Aim for an internationally recognised accounting qualification alongside your degree.',
          },
        ],
      },
      {
        id: 'finance-emerging',
        name: 'Finance & Emerging Business',
        courses: [
          {
            id: 'bsc-economics',
            name: 'B.Sc Economics',
            description: 'Understand markets, economic policies and financial systems.',
            scope: 'Careers in economic research, banking, policy and analytics.',
          },
          {
            id: 'bba-fintech',
            name: 'BBA FinTech',
            description: 'Explore digital banking, financial technology and innovation.',
            scope: 'Work where finance meets technology.',
          },
          {
            id: 'bba-logistics',
            name: 'BBA Logistics & Supply Chain Management',
            description: 'Learn how goods and services move through global supply chains.',
            scope: 'Keep goods moving globally in logistics and e-commerce.',
          },
          {
            id: 'bba-digital-marketing',
            name: 'BBA Digital Marketing',
            description: 'Develop skills in online marketing, advertising and brand growth.',
            scope: 'Run online campaigns in SEO, social media and performance marketing.',
          },
          {
            id: 'bsc-actuarial',
            name: 'B.Sc Actuarial Science',
            description: 'Apply mathematics and statistics to financial risk assessment.',
            scope:
              'Become a risk expert in insurance and finance, a specialised, exam-driven career.',
          },
        ],
      },
    ],
  },
  {
    id: 'exploring',
    name: 'Still Figuring It Out',
    shortName: 'Not sure yet',
    icon: '🎓',
    tone: 'slate',
    description:
      'Not sure what to study? Share your interests and goals — a PROVA counsellor will help you explore suitable fields step by step.',
    tags: ['Interests', 'Goals', 'Guidance'],
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&h=640&q=80',
    imagePosition: 'center 30%',
    imageAlt: 'Students exploring future education options together',
    subcategories: [],
  },
];

/** Homepage / dream-hook cards — derived from course fields. */
export const dreamOptions = courseFields.map((field) => ({
  id: field.id,
  label: field.name,
  icon: field.icon,
  courseInterest: field.id === 'exploring' ? 'not-sure' : field.id,
  tone: field.tone,
  tags: field.tags,
  image: field.image,
  imagePosition: field.imagePosition,
  imageAlt: field.imageAlt,
}));

/**
 * Lightweight field cards for the homepage “Explore courses” section.
 * Keeps home calm; full catalogue lives on /courses.
 */
export const courseCategories = courseFields
  .filter((field) => field.id !== 'exploring')
  .map((field) => ({
    id: field.id,
    name: field.shortName || field.name,
    icon: field.icon,
    description: field.description,
    courseCount: field.subcategories.reduce((sum, sub) => sum + sub.courses.length, 0),
    courses: field.subcategories.slice(0, 3).flatMap((sub) =>
      sub.courses.slice(0, 1).map((course) => ({
        id: course.id,
        name: course.name,
        category: field.id,
        level: course.duration || 'UG',
        description: course.description,
      }))
    ),
  }));

export const courseInterestOptions = [
  { value: 'healthcare', label: 'Healthcare & Allied Health' },
  { value: 'technology', label: 'Technology & Emerging Fields' },
  { value: 'law', label: 'Law & Legal Studies' },
  { value: 'science-design', label: 'Science, Design & Other Careers' },
  { value: 'business', label: 'Business & Commerce' },
  { value: 'nursing', label: 'Nursing' },
  { value: 'pharmacy', label: 'Pharmacy' },
  { value: 'mbbs', label: 'MBBS / Medical' },
  { value: 'ayush', label: 'AYUSH' },
  { value: 'engineering', label: 'Engineering / Technology' },
  { value: 'management', label: 'Management / BBA' },
  { value: 'commerce', label: 'Commerce' },
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

export function getFieldById(fieldId) {
  return courseFields.find((field) => field.id === fieldId) || courseFields[0];
}

export function countCoursesInField(field) {
  return field.subcategories.reduce((sum, sub) => sum + sub.courses.length, 0);
}
