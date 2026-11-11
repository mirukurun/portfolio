// Services page content. Every service is backed by a real project ("proof").
// Proof items with href link to a case study on this site.

export type Proof = { label: string; href?: string }

export type Service = {
  title: string
  description: string
  proof: Proof[]
}

export type ServiceGroup = {
  id: string
  need: string // plain-language heading, written from the client's side
  area: string // short category label
  services: Service[]
}

const HORDI_DESIGN: Proof = { label: 'Hordi Nails', href: '/design/hordi-nails' }
const HORDI_MARKETING: Proof = { label: 'Hordi Nails', href: '/marketing/hordi-nails' }
const ICPRESS: Proof = { label: 'ICPress', href: '/marketing/icpress' }
const VOXEAR: Proof = { label: 'Voxear' }

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: '01',
    need: 'I need my brand to look professional',
    area: 'Brand & Identity',
    services: [
      {
        title: 'Logo & visual identity',
        description: 'Logo, colours and typography that make a small business look like a real brand from day one.',
        proof: [HORDI_DESIGN, { label: 'SpaceCorps', href: '/design/spacecorps' }],
      },
      {
        title: 'Brand guidelines & design system',
        description: 'One clear rulebook built from everything you already have, so every page, post and print looks consistent. Includes design tokens for developers.',
        proof: [{ label: 'Voxear brand system', href: '/design/voxear-brand-system' }],
      },
      {
        title: 'Custom icon set',
        description: 'A consistent icon family matched to your logo, instead of a mix of unrelated stock icons.',
        proof: [{ label: 'Voxear icon set', href: '/design/voxear-icon-set' }],
      },
      {
        title: 'Social media visual style',
        description: 'A recognisable look for your feed, plus templates you can reuse without a designer.',
        proof: [{ label: 'Connecting Jobs', href: '/design' }],
      },
      {
        title: 'Brand templates for your team',
        description: 'Documents, presentations and product sheets your team can fill in and still stay on brand, in several languages.',
        proof: [{ label: 'Voxear templates', href: '/design/voxear-templates' }],
      },
    ],
  },
  {
    id: '02',
    need: 'I need printed materials',
    area: 'Print & Physical',
    services: [
      {
        title: 'Menus, flyers & business cards',
        description: 'Print-ready materials in your brand style, from price lists to business cards.',
        proof: [HORDI_DESIGN],
      },
      {
        title: 'Retail displays & packaging graphics',
        description: 'Graphics for stands, shelves and displays. I write the print spec and talk to the printer so the result matches the design.',
        proof: [{ label: 'Voxear retail display', href: '/design/voxear-retail-display' }],
      },
    ],
  },
  {
    id: '03',
    need: 'I need a website',
    area: 'Websites',
    services: [
      {
        title: 'Business website or landing page',
        description: 'Designed, built and launched: services, prices, gallery, team and contact. Looks good on phones first.',
        proof: [HORDI_DESIGN, { label: 'Queens Qoncept Clinic', href: '/design' }, { label: 'SpaceCorps', href: '/design' }],
      },
      {
        title: 'Online booking & ordering',
        description: 'Clients choose what they want, see the price and time right away, and book a slot that actually fits.',
        proof: [HORDI_DESIGN],
      },
      {
        title: 'Request handling & reminders',
        description: 'New bookings arrive straight to your phone (Telegram), clients get confirmation emails and a reminder the day before.',
        proof: [HORDI_DESIGN],
      },
      {
        title: 'Pre-launch & waitlist page',
        description: 'Opening soon? Collect the people who are interested before you launch, so you open with an audience.',
        proof: [ICPRESS],
      },
      {
        title: 'Multilingual websites',
        description: 'Sites and content in English, Swedish and Ukrainian.',
        proof: [HORDI_MARKETING],
      },
    ],
  },
  {
    id: '04',
    need: 'I’m building an app or digital product',
    area: 'UX/UI & Product',
    services: [
      {
        title: 'App & product design',
        description: 'User flows, screens and clickable prototypes for an MVP, ready to test and hand over to developers.',
        proof: [{ label: 'SpaceCorps', href: '/design/spacecorps' }, { label: 'Ivy Studio', href: '/design/ivy-studio' }],
      },
      {
        title: 'Dashboards & internal tools',
        description: 'Complex data and internal processes turned into screens people can actually read and use.',
        proof: [{ label: 'Karolinska Institutet', href: '/design/karolinska' }],
      },
      {
        title: 'UX audit & developer-ready issues',
        description: 'I find what’s broken or confusing and write it up so developers (or their AI tools) can fix it without follow-up questions.',
        proof: [ICPRESS],
      },
    ],
  },
  {
    id: '05',
    need: 'I don’t know what to do with my marketing',
    area: 'Strategy',
    services: [
      {
        title: 'Marketing audit',
        description: 'An honest look at what works, what doesn’t, and a short list of what to do first.',
        proof: [ICPRESS, VOXEAR],
      },
      {
        title: 'Positioning & messaging',
        description: 'A clear answer to “why you and not them?”, with complex products explained in plain language.',
        proof: [ICPRESS, { label: 'Ivy Interactive', href: '/design/ivy' }],
      },
      {
        title: 'Customer profiles & journey',
        description: 'Who your customers are, what they need at each step, and what to tell them where.',
        proof: [VOXEAR],
      },
      {
        title: 'Competitor & social benchmark',
        description: 'How you compare with competitors online, using public data, with a baseline to measure growth.',
        proof: [VOXEAR],
      },
      {
        title: 'Launch plan',
        description: 'A step-by-step plan for opening or launching: what to do before, on and after launch day.',
        proof: [ICPRESS],
      },
    ],
  },
  {
    id: '06',
    need: 'I want people to find me on Google and in AI',
    area: 'Search & Visibility',
    services: [
      {
        title: 'SEO & website speed',
        description: 'Check how your site ranks and loads, and fix what keeps customers from finding you.',
        proof: [VOXEAR],
      },
      {
        title: 'Visibility in ChatGPT & Google AI',
        description: 'Set up your site so AI assistants can answer questions about your prices, hours and booking correctly.',
        proof: [HORDI_MARKETING, VOXEAR],
      },
      {
        title: 'Google Business Profile & Maps',
        description: 'A complete profile, regular local posts and a better position when people search nearby.',
        proof: [HORDI_MARKETING],
      },
      {
        title: 'Analytics & monthly reports',
        description: 'Google Analytics and Search Console set up, and simple reports that show what’s growing.',
        proof: [VOXEAR],
      },
    ],
  },
  {
    id: '07',
    need: 'I need content and an active social media',
    area: 'Content & Social',
    services: [
      {
        title: 'Social media from zero',
        description: 'Profile setup, content plan and calendar for Instagram and Facebook.',
        proof: [{ label: 'Beredskapslyftet' }, VOXEAR],
      },
      {
        title: 'Posts, visuals & short videos',
        description: 'Images, posts and edited short videos that bring in local customers.',
        proof: [{ label: 'Beauty by Luidmila', href: '/marketing/beauty' }],
      },
      {
        title: 'Event coverage',
        description: 'Photos, speaker shots and short interviews from your event, ready to post.',
        proof: [{ label: 'Beredskapslyftet' }],
      },
      {
        title: 'Video series & reels without filming',
        description: 'Explainer videos and reels with voice-over and captions, made from a script, with no camera needed.',
        proof: [ICPRESS, HORDI_MARKETING],
      },
      {
        title: 'Copywriting',
        description: 'Website texts, posts and articles that sound like you, not like a template.',
        proof: [{ label: 'Blog', href: '/blog' }],
      },
      {
        title: 'Translation & localisation',
        description: 'Content adapted for English, Swedish and Ukrainian audiences.',
        proof: [HORDI_MARKETING, { label: 'Media localisation project' }],
      },
    ],
  },
  {
    id: '08',
    need: 'I want customers to trust me',
    area: 'Reviews & Proof',
    services: [
      {
        title: 'Review collection & customer proof',
        description: 'An easy way to collect reviews, plus a bank of quotes and numbers you can use on your site and in ads.',
        proof: [VOXEAR],
      },
    ],
  },
  {
    id: '09',
    need: 'I want more clients and leads',
    area: 'Ads & Outreach',
    services: [
      {
        title: 'Instagram & Facebook ads',
        description: 'Ads aimed at the right local audience, from setup to targeting.',
        proof: [{ label: 'Beauty by Luidmila', href: '/marketing/beauty' }, { label: 'Beredskapslyftet' }],
      },
      {
        title: 'LinkedIn outreach for B2B',
        description: 'Finding the right companies, writing campaign messages and handling replies and follow-ups.',
        proof: [{ label: 'Ivy Interactive' }],
      },
      {
        title: 'Lead research',
        description: 'Lists of potential clients with the details you need to contact them.',
        proof: [{ label: 'Ivy Interactive' }],
      },
    ],
  },
  {
    id: '10',
    need: 'I spend too much time on routine work',
    area: 'AI & Automation',
    services: [
      {
        title: 'Workflow automation',
        description: 'Repetitive tasks done automatically: sorting replies, prioritising leads, drafting follow-ups, notifications.',
        proof: [{ label: 'Ivy Interactive' }, HORDI_DESIGN],
      },
      {
        title: 'Custom AI tools',
        description: 'Small AI tools built around one specific task in your business, like turning research into ready post drafts.',
        proof: [{ label: 'Reddit → LinkedIn Engine', href: '/marketing' }, { label: 'FindMeAJob', href: '/marketing' }],
      },
    ],
  },
  {
    id: '11',
    need: 'I need someone to run the project',
    area: 'Project Management',
    services: [
      {
        title: 'Project & remote team coordination',
        description: 'Planning, workflows and keeping a team (or outside vendors) on schedule until the work is delivered.',
        proof: [{ label: 'Media localisation, ~30 people' }, VOXEAR],
      },
    ],
  },
]
