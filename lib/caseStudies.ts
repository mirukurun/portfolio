export type CaseImg = { src: string; w: number; h: number; label: string; description?: string; contain?: boolean }

export type CaseVideo = { src: string; poster: string; label: string }

export type CaseSection = {
  title: string
  text?: string[]
  bullets?: string[]
  images?: CaseImg[]
  layout?: 'phones' | 'grid2' | 'grid3' | 'wide'
  videos?: CaseVideo[]
}

export type CaseStudy = {
  slug: string
  back: { href: string; label: string }
  navLabel: string
  eyebrow: string
  title: string
  meta: { label: string; value: string }[]
  intro: string
  live?: { href: string; label: string }
  sections: CaseSection[]
  points: string[]
  tools: string[]
}

const H = '/projects/hordi'
const I = '/projects/icpress'
const phone = (name: string, label: string, description?: string): CaseImg => ({
  src: `${H}/site-${name}.jpg`, w: 1170, h: 2532, label, description,
})

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'hordi-nails-design',
    back: { href: '/design', label: 'Design' },
    navLabel: 'Hordi Nails — 2026',
    eyebrow: 'Brand Identity · Web Design · Print',
    title: 'Hordi Nails',
    meta: [
      { label: 'Role', value: 'Owner · Designer · Developer' },
      { label: 'Period', value: 'October 2026' },
      { label: 'Context', value: 'My own home nail studio in Upplands Väsby, north of Stockholm' },
    ],
    intro:
      'A brand and booking site for my own nail studio. I wanted clients to see the full price of the set they have in mind before they book, and to pick only time slots long enough for that set. Everything here, from the wordmark to the booking flow and the print pieces, I designed and built myself.',
    live: { href: 'https://hordinails.com', label: 'Live at hordinails.com' },
    sections: [
      {
        title: 'Identity',
        text: [
          'A heavy lowercase wordmark with a single lime dot over the “i”. The dot is the one accent colour across the whole brand: buttons, highlights, the selected option in the booking flow. The monogram works as an avatar and favicon.',
        ],
        layout: 'grid2',
        images: [
          { src: `${H}/hordi-logo-black.svg`, w: 2612, h: 1300, label: 'Wordmark', contain: true },
          { src: `${H}/avatar.jpg`, w: 1080, h: 1080, label: 'Avatar / monogram', description: 'Used on Instagram, TikTok and Google Business Profile.' },
        ],
      },
      {
        title: 'Build your set, see your price',
        text: [
          'The site is one page designed mobile-first, since almost every client books from a phone. Instead of a long price list, the booking is a short configurator: length, extension method, design tier and extras. The total and the approximate duration update with every choice.',
          'Design tiers come with photos of real work, so a client can match their idea to a tier on their own. A note asks them to pick honestly and explains that a more complex design moves to the right tier when we agree the details.',
        ],
        layout: 'phones',
        images: [
          phone('home', 'Hero', 'What I do, where, and “0 kr upfront”.'),
          phone('booking', 'Length', 'Six lengths from XS to XXL, measured from the fingertip, with prices.'),
          phone('tier_picked', 'Design tier', 'Five tiers with photo examples, priced for the whole set.'),
          phone('total', 'Price and time', 'Running total and approximate duration of the set.'),
        ],
      },
      {
        title: 'Only slots that fit',
        text: [
          'The calendar shows only start times that leave enough room for the chosen set, so a 3.5-hour set never gets squeezed into a 2-hour gap. There is no prepayment. A booking request reaches me in Telegram through a Cloudflare Worker, and the client gets a confirmation email and a reminder before the visit.',
        ],
        layout: 'phones',
        images: [
          phone('modal_slots', 'Day and time', 'Start times calculated from the length of the set.'),
          phone('length_picked', 'Selected state', 'The lime accent marks the current choice.'),
          phone('works', 'Works', 'Gallery of 28 sets, plus gel colours and charms.'),
        ],
      },
      {
        title: 'Print',
        text: [
          'A business card and an A5 flyer to hand out locally. Both carry a QR code to the booking page and a −30 % “you and a friend” offer, so a printed piece turns into two bookings.',
        ],
        layout: 'grid2',
        images: [
          { src: `${H}/card-front.jpg`, w: 1075, h: 721, label: 'Business card — front' },
          { src: `${H}/card-back.jpg`, w: 1075, h: 721, label: 'Business card — back', description: 'QR to hordinails.com and the referral offer.' },
          { src: `${H}/flyer-a5.jpg`, w: 988, h: 1400, label: 'A5 flyer' },
          { src: `${H}/works-07.jpg`, w: 1000, h: 1000, label: 'Work photo', description: 'Photos of my own sets are used across the site, print and social.' },
        ],
      },
    ],
    points: [
      'Designed the wordmark, monogram and a one-accent colour system',
      'Designed and built a mobile-first, one-page booking site',
      'Price and duration configurator: length, method, design tier, extras',
      'Calendar that offers only slots long enough for the chosen set',
      'Booking requests to Telegram via a Cloudflare Worker, plus confirmation and reminder emails',
      'Business card and A5 flyer with QR code and referral offer',
    ],
    tools: ['Brand Identity', 'Web Design', 'HTML / CSS / JS', 'Cloudflare Workers', 'Telegram Bot API', 'Print Design'],
  },

  {
    slug: 'hordi-nails-marketing',
    back: { href: '/marketing', label: 'Marketing' },
    navLabel: 'Hordi Nails — 2026',
    eyebrow: 'Small Business · Local SEO · AI Search',
    title: 'Hordi Nails',
    meta: [
      { label: 'Role', value: 'Owner · All marketing' },
      { label: 'Period', value: 'May 2026 – present' },
      { label: 'Context', value: 'Home nail studio, one client at a time, local audience' },
    ],
    intro:
      'All the marketing for my own nail studio: being found on Google and by AI assistants, a Google Business Profile that actually leads to bookings, and posts for local groups. I work alone and don’t film clients, so everything has to keep working without an agency, a camera crew or a big budget.',
    live: { href: 'https://hordinails.com', label: 'Live at hordinails.com' },
    sections: [
      {
        title: 'Found by Google and by AI assistants',
        text: [
          'The site carries NailSalon, price and FAQ structured data (39 questions) and an llms.txt file, so Google and AI assistants can answer questions about prices, hours and booking straight from the source.',
          'I also cleaned up the Google Business Profile: the website link pointed to Instagram, services had no prices, and none of the reviews had a reply.',
        ],
        bullets: [
          'Website changed from Instagram to hordinails.com, with direct links to booking',
          'Services rewritten in Swedish with prices and descriptions; services I don’t offer removed',
          'Replied to every review',
          'Attributes set: by appointment only, payment methods, free parking',
          'Published a “Book online now” post with a booking button',
        ],
      },
      {
        title: 'Reels without filming clients (in progress)',
        text: [
          'I’m building a small video pipeline so I can publish short videos without filming anyone. Each reel is a script in code: text, scenes, timing and sound. One command turns it into a finished vertical video. The first reels are still being refined, so they aren’t shown here yet.',
        ],
        bullets: [
          'Voice: Kokoro TTS reads the script',
          'Captions: faster-whisper gets the timing of every word and checks the voice is clear',
          'Sound: music and effects are generated and ducked under the voice',
          'Scenes: animated in Remotion from the timing data',
          'Finish: FFmpeg normalises loudness to −14 LUFS for social platforms',
        ],
      },
      {
        title: 'Local posts in three languages',
        text: [
          'A plan for where to post and what to say: local Facebook groups for my area, international groups, and Ukrainian community groups, each with its own text in Swedish, English or Ukrainian. Every post links to the site and gives the area rather than the street address. There are also ready-made replies for “how much / do you have time?” comments.',
        ],
        layout: 'grid3',
        images: [
          { src: `${H}/works-01.jpg`, w: 563, h: 1000, label: 'Work photo' },
          { src: `${H}/works-05.jpg`, w: 562, h: 1000, label: 'Work photo' },
          { src: `${H}/works-11.jpg`, w: 1000, h: 1000, label: 'Work photo' },
        ],
      },
    ],
    points: [
      'Added NailSalon, price and FAQ structured data (39 questions) and llms.txt',
      'Rebuilt the Google Business Profile: link, services and prices, review replies, booking post',
      'Wrote local posts and replies in Swedish, English and Ukrainian',
      'Building a code-driven reel pipeline: TTS voice, word-timed captions, generated sound, Remotion scenes',
    ],
    tools: ['Local SEO', 'Schema.org', 'llms.txt', 'Google Business Profile', 'Facebook Groups', 'Kokoro TTS', 'Whisper', 'Remotion', 'FFmpeg'],
  },

  {
    slug: 'icpress',
    back: { href: '/marketing', label: 'Marketing' },
    navLabel: 'ICPress — 2026',
    eyebrow: 'Product Marketing · UX Audit · Video Content',
    title: 'ICPress',
    meta: [
      { label: 'Role', value: 'Co-Founder & Head of Marketing' },
      { label: 'Period', value: 'November 2026 – present' },
      { label: 'Context', value: 'Individual Contributor Press (StoryPop AB), Sweden: a platform for comparing companies with their real peers' },
    ],
    intro:
      'ICPress (Individual Contributor Press) lets you compare a company with genuinely similar companies (same sector, same business model, metrics calculated the same way) instead of reading the financial reports yourself. As co-founder and head of marketing, I found early on that the product needed sharper positioning and a clearer product surface before it needed more promotion. The work covered three things: a marketing audit, a product issue backlog and an educational video series.',
    live: { href: 'https://icpress.org', label: 'icpress.org' },
    sections: [
      {
        title: 'Marketing audit',
        text: [
          'I went through the public site, article pages, app listing, GitHub organisation and social channels, then ran the findings through positioning, SEO, social, community and launch frameworks. The main finding: the public site presented a news feed, while the team described a company comparison tool in closed beta. The site was selling a different product from the one being built.',
          'After working through it with the team, the recommendation shifted the whole plan:',
        ],
        bullets: [
          'Positioning: “Compare companies apples to apples. Same metrics, same periods, one method — so you don’t have to read the reports.”',
          'Waitlist as the main marketing goal before the beta opens, with separate landing pages for beginners and professionals',
          'Articles reworked into comparisons (one metric, one period, several peers) so content leads into the product',
          'After the beta: programmatic “X vs Y” and “sector leaders by metric” pages for search',
          'Onboarding with one comparison before sign-up and three presentation levels that change the explanation, never the numbers',
          'A pricing sketch where beginners pay for confidence and professionals pay for time',
        ],
      },
      {
        title: 'Issue backlog an AI agent can act on',
        text: [
          'The developers work with AI coding agents, and the site source wasn’t available to me. So I wrote every issue to be handed to an agent as-is (“fix issue #N”) by someone who has never seen the page. I filed them directly in the team’s GitHub repository.',
        ],
        bullets: [
          'Exact URL and user state (guest, signed in, on the waitlist)',
          'Element IDs, classes, texts and asset names found on the live site, so the agent can locate the code by search',
          'Measurements in px and viewports for layout problems',
          'Likely cause, proposed fix and an acceptance checklist',
          'What not to touch and which related places are affected',
        ],
      },
      {
        title: 'Finance from zero',
        text: [
          'A series of short vertical videos for TikTok, YouTube Shorts and Reels, meant to bring beginners to ICPress. The first version assumed viewers knew the terms. Feedback showed that someone starting from zero couldn’t follow it, so I rebuilt the format: no word goes unexplained, and every number on screen can be recalculated from the formula shown.',
          'Each episode follows the same structure: a hook, new words one at a time with a lemonade-stand example, the calculation step by step, the same formula on a real company using ICPress data, then a comparison with its peers. Episodes are written as data, and a small engine renders the animation in Chrome, adds Kokoro TTS narration with timed captions and assembles the MP4 with FFmpeg. A pilot and 12 episodes are built.',
        ],
        videos: [
          { src: `${I}/pilot_margin_from_zero.mp4`, poster: `${I}/pilot_margin_from_zero.jpg`, label: 'Pilot: what is a margin?' },
          { src: `${I}/fz01_two_margins.mp4`, poster: `${I}/fz01_two_margins.jpg`, label: 'Two kinds of margin' },
          { src: `${I}/fz04_inventory.mp4`, poster: `${I}/fz04_inventory.jpg`, label: 'What is inventory?' },
          { src: `${I}/fz12_peers.mp4`, poster: `${I}/fz12_peers.jpg`, label: 'Apples to apples: why peers matter' },
        ],
      },
    ],
    points: [
      'Audited positioning, site, SEO, social and community, and proposed a new positioning around fair comparison',
      'Planned a waitlist-first launch, comparison-led content and onboarding with three presentation levels',
      'Wrote and filed product issues detailed enough for an AI coding agent to fix without extra context',
      'Designed the “Finance from zero” format and rebuilt it after viewer feedback',
      'Built a video engine: scripts as data, animation rendered in Chrome, TTS narration, timed captions',
    ],
    tools: ['Positioning', 'SEO Audit', 'UX Review', 'GitHub Issues', 'Kokoro TTS', 'Headless Chrome', 'FFmpeg', 'Claude'],
  },
]

export const getCase = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug)!
