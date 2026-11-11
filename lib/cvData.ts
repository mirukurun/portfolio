// Single source for the CV: shown in CVModal and rendered to public/Diana-Horbyk-CV.pdf
// After editing, regenerate the PDF with `npm run cv:pdf`.

export const CONTACT = {
  name: 'Diana Horbyk',
  headline: 'Growth Marketer · Digital Marketing & UX/UI Design',
  email: 'diana.horbyk@gmail.com',
  phone: '(+46) 76-174-5666',
  location: 'Stockholm, Sweden',
  linkedin: 'https://linkedin.com/in/diana-h-133a68336',
  website: 'https://dianahorbyk.eu',
}

export const EXPERIENCE = [
  {
    title: 'Founder',
    company: 'Hordi Nails',
    period: 'May 2026 – Present',
    context: 'Own home nail studio · Upplands Väsby, Stockholm',
    points: [
      'Designed the brand (wordmark and monogram) and built hordinails.com: gallery, price list and an online booking flow with a price and duration calculator.',
      'Built the booking backend on Cloudflare Workers: requests arrive in Telegram with confirm, suggest and decline buttons, clients get emails and a reminder the day before.',
      'Set up local and AI-search visibility: NailSalon, offer and FAQ structured data, sitemap and an llms.txt file.',
      'Building a reel pipeline (Kokoro TTS, Whisper, Remotion, FFmpeg) so content does not depend on filming clients.',
    ],
  },
  {
    title: 'Co-Founder & Head of Marketing',
    company: 'ICPress — Individual Contributor Press',
    period: 'Nov 2026 – Present',
    context: 'StoryPop AB · Platform for comparing companies with their real peers',
    points: [
      'Ran the marketing audit and repositioned the product around fair, apples-to-apples company comparison; planned a waitlist-first launch and comparison-led content.',
      'Wrote and filed product issues detailed enough for the developers\' AI coding agents to fix as-is: URL and user state, element IDs, measurements, cause, fix and acceptance checklist.',
      'Created “Finance from zero”, a short-video series for beginners, and built the engine that renders episodes from scripts with TTS narration and timed captions.',
    ],
  },
  {
    title: 'Marketing Coordinator',
    company: 'Voxear Technologies AB',
    period: 'Aug 2026 – Oct 2026',
    context: 'B2B hardware company · Professional hearing protection',
    points: [
      'Built the company\'s first documented brand system in Figma from a ~95-file audit — identity, design tokens, an adapted icon set and tone of voice — and won leadership approval on the most contested decisions with a research-backed case.',
      'Unblocked a stalled retail-display redesign by documenting defects and agreeing print specs with the external production vendor.',
      'Built buyer personas for 7 segments mapped across a 6-stage buyer journey, and set up the first social media baseline, content calendar and customer proof bank.',
      'Ran the first SEO, web performance and AI-search visibility baselines, turning findings into a prioritised workstream for leadership.',
    ],
  },
  {
    title: 'Growth Marketer',
    company: 'Ivy Interactive',
    period: 'Sep 2025 – Jun 2026',
    context: 'Early-stage B2B startup · Stockholm / Remote',
    points: [
      'Managed LinkedIn outreach workflows — lead segmentation, campaign variations, reply tracking, follow-up preparation.',
      'Applied AI to automate outreach: reply categorisation, sentiment analysis, lead prioritisation, follow-up drafting.',
      'Analysed campaign replies to identify audience patterns, objections and messaging gaps.',
      'Prepared landing page drafts and product messaging concepts in Figma and Canva.',
      'Supported content operations in Storyblok CMS and monitored community channels.',
    ],
  },
  {
    title: 'UX/UI & Product Designer',
    company: 'SpaceCorps Technology OÜ',
    period: 'Jun 2025 – Dec 2025',
    context: 'Early-stage browser game startup · Remote',
    points: [
      'Designed the company website and visual presentation in Figma, shaping early brand identity.',
      'Created UX/UI concepts and prototypes for the browser game MVP.',
      'Defined visual identity direction — colour system, typography, and component patterns.',
      'Worked directly with the founder in a fast-changing product environment.',
    ],
  },
  {
    title: 'Digital Marketer',
    company: 'Beredskapslyftet',
    period: 'Jan 2025 – Apr 2025',
    context: 'Swedish employment integration initiative · Stockholm',
    points: [
      'Built and managed Facebook and Instagram presence from the ground up.',
      'Produced visual content and short-form videos in Canva and CapCut.',
      'Covered organisational events — photography, speaker documentation, interviews.',
      'Supported Meta Ads setup including audience targeting and campaign configuration.',
    ],
  },
  {
    title: 'Founder & Operations Lead',
    company: 'Ukrainian Media Localisation Initiative',
    period: '2023',
    context: 'Independent project · Remote · Volunteer',
    points: [
      'Founded and led a remote volunteer team of ~30 contributors across translation, voice, and post-production.',
      'Designed and managed production workflows across multiple parallel workstreams.',
      'Delivered 3 complete localised episodes from concept to final release.',
    ],
  },
]

export const SKILLS = {
  'Marketing & Comms': ['Audience positioning', 'Product messaging', 'LinkedIn outreach', 'Lead segmentation', 'Campaign execution', 'Meta & LinkedIn Ads'],
  'AI & Automation': ['AI-assisted workflows', 'n8n automation', 'HeyReach · Clay · Breakcold', 'Reply categorisation', 'Lead prioritisation'],
  'Design & Content': ['Figma', 'UX/UI prototyping', 'Landing pages', 'Canva', 'Video editing (CapCut / InShot)'],
  'Analytics': ['Google Analytics', 'Google Sheets tracking', 'Audience analysis', 'Engagement reporting'],
}

export const EDUCATION = [
  { title: "Bachelor's in Marketing", period: 'Sep 2022 – Jul 2026', detail: 'Market analysis · consumer behaviour · data-driven strategy' },
  { title: 'AI Marketing Specialist', period: 'Jul 2025 – Present', detail: 'AI agents · chatbots · CRM integration · marketing analytics' },
  { title: 'UX/UI Design & Web Design', period: 'Feb 2025 – Dec 2025', detail: 'Figma · prototyping · design principles · responsive design' },
  { title: 'Swedish Language Studies', period: 'Aug 2024 – Dec 2024', detail: 'Stockholm University · professional communication' },
]

export const LANGUAGES = [
  { lang: 'English', level: 'B2 — Professional' },
  { lang: 'Swedish', level: 'B1 — Intermediate' },
  { lang: 'Ukrainian', level: 'Native' },
]

export const CV_PDF = '/Diana-Horbyk-CV.pdf'
