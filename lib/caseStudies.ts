// Every case page (/design/*, /marketing/*) renders from this file through components/CaseStudyPage.tsx.
// Editorial format: a one-line `deck`, a few `stats`, one `quote`, and sections with a short `lede`.
// Longer detail goes into `more`, which is folded behind "Read more".

export type CaseImg = {
  src: string
  w: number
  h: number
  label: string
  description?: string
  contain?: boolean
  /** Tall screenshot: show a preview cropped to height = width × crop; the lightbox shows it whole. */
  crop?: number
}

export type CaseVideo = { src: string; poster?: string; label: string; autoplay?: boolean }

export type CaseSection = {
  title: string
  lede: string
  more?: string[]
  images?: CaseImg[]
  layout?: 'phones' | 'grid2' | 'grid3' | 'wide' | 'single'
  videos?: CaseVideo[]
  pair?: { before: CaseImg; after: CaseImg }
}

export type CaseStudy = {
  slug: string
  back: { href: string; label: string }
  navLabel: string
  eyebrow: string
  title: string
  deck: string
  meta: { label: string; value: string }[]
  stats?: { value: string; label: string }[]
  quote?: string
  /** Index of the section the quote follows (default 0). */
  quoteAfter?: number
  live?: { href: string; label: string }
  sections: CaseSection[]
  points: string[]
  tools: string[]
}

const H = '/projects/hordi'
const I = '/projects/icpress'
const V = '/projects/tasstur'
const X = '/projects/voxear'
const vPhone = (name: string, label: string, description?: string): CaseImg => ({
  src: `${V}/m-${name}.jpg`, w: 1170, h: 2532, label, description,
})
const vWide = (name: string, label: string, description?: string, w = 1440, h = 900): CaseImg => ({
  src: `${V}/${name}.jpg`, w, h, label, description,
})
const phone = (name: string, label: string, description?: string): CaseImg => ({
  src: `${H}/site-${name}.jpg`, w: 1170, h: 2532, label, description,
})

const DESIGN = { href: '/design', label: 'Design' }
const MARKETING = { href: '/marketing', label: 'Marketing' }

const voxearMeta = [
  { label: 'Role', value: 'Marketing Coordinator' },
  { label: 'Period', value: '2026' },
  { label: 'Context', value: 'B2B hardware company, professional hearing protection' },
]

export const CASE_STUDIES: CaseStudy[] = [
  // ─── Hordi Nails · design ───────────────────────────────────────────
  {
    slug: 'hordi-nails-design',
    back: DESIGN,
    navLabel: 'Hordi Nails — 2026',
    eyebrow: 'Brand Identity · Web Design · Print',
    title: 'Hordi Nails',
    deck: 'A brand and booking site for my own nail studio, where clients see the full price of their set before they book.',
    meta: [
      { label: 'Role', value: 'Owner · Designer · Developer' },
      { label: 'Period', value: 'October 2026' },
      { label: 'Context', value: 'Home nail studio in Upplands Väsby, Stockholm' },
    ],
    stats: [
      { value: '0 kr', label: 'upfront to book' },
      { value: '5', label: 'design tiers with photo examples' },
      { value: '1', label: 'accent colour for the whole brand' },
    ],
    quote: 'A 3.5-hour set never gets squeezed into a 2-hour gap.',
    quoteAfter: 1,
    live: { href: 'https://hordinails.com', label: 'Live at hordinails.com' },
    sections: [
      {
        title: 'Identity',
        lede: 'A heavy lowercase wordmark with one lime dot over the “i”. That dot is the only accent in the brand: buttons, highlights, the selected option.',
        layout: 'grid2',
        images: [
          { src: `${H}/hordi-logo-black.svg`, w: 2612, h: 1300, label: 'Wordmark', contain: true },
          { src: `${H}/avatar.jpg`, w: 1080, h: 1080, label: 'Monogram', description: 'Avatar for Instagram, TikTok and Google.' },
        ],
      },
      {
        title: 'Build your set, see your price',
        lede: 'Instead of a price list, booking is a short configurator: length, method, design tier, extras. Total and duration update with every tap.',
        more: [
          'One page, designed mobile-first: almost every client books from a phone',
          'Design tiers come with photos of real work, so clients match their idea to a tier on their own',
          'A note asks them to pick honestly; a more complex design moves to the right tier when we agree the details',
        ],
        layout: 'phones',
        images: [
          phone('home', 'Hero', '“0 kr upfront.”'),
          phone('booking', 'Length', 'Six lengths, XS to XXL.'),
          phone('tier_picked', 'Design tier', 'Priced for the whole set.'),
          phone('total', 'Price and time', 'Running total and duration.'),
        ],
      },
      {
        title: 'Only slots that fit',
        lede: 'The calendar offers only start times long enough for the chosen set. No prepayment: a request lands straight in my Telegram.',
        more: [
          'Requests go through a Cloudflare Worker to a Telegram bot',
          'Clients get a confirmation email and a reminder before the visit',
        ],
        layout: 'phones',
        images: [
          phone('modal_slots', 'Day and time', 'Calculated from the set length.'),
          phone('length_picked', 'Selected state', 'Lime marks the choice.'),
          phone('works', 'Works', '28 sets, gel colours, charms.'),
        ],
      },
      {
        title: 'Print',
        lede: 'A business card and an A5 flyer, each with a QR code to booking and a −30 % “you and a friend” offer. One printed piece, two bookings.',
        layout: 'grid2',
        images: [
          { src: `${H}/card-front.jpg`, w: 1075, h: 721, label: 'Business card, front' },
          { src: `${H}/card-back.jpg`, w: 1075, h: 721, label: 'Business card, back', description: 'QR code and the referral offer.' },
          { src: `${H}/flyer-a5.jpg`, w: 988, h: 1400, label: 'A5 flyer' },
          { src: `${H}/works-07.jpg`, w: 1000, h: 1000, label: 'Work photo', description: 'My own sets, used across site, print and social.' },
        ],
      },
    ],
    points: [
      'Wordmark, monogram and a one-accent colour system',
      'Mobile-first booking site with a price and duration configurator',
      'Calendar that only offers slots long enough for the set',
      'Telegram booking via a Cloudflare Worker, plus confirmation and reminder emails',
      'Business card and flyer with QR code and referral offer',
    ],
    tools: ['Brand Identity', 'Web Design', 'HTML / CSS / JS', 'Cloudflare Workers', 'Telegram Bot API', 'Print Design'],
  },

  // ─── Hordi Nails · marketing ────────────────────────────────────────
  {
    slug: 'hordi-nails-marketing',
    back: MARKETING,
    navLabel: 'Hordi Nails — 2026',
    eyebrow: 'Small Business · Local SEO · AI Search',
    title: 'Hordi Nails',
    deck: 'All the marketing for my own studio: found on Google and by AI assistants, and a local presence that leads to bookings.',
    meta: [
      { label: 'Role', value: 'Owner · All marketing' },
      { label: 'Period', value: 'May 2026 – present' },
      { label: 'Context', value: 'Home nail studio, one client at a time, local audience' },
    ],
    stats: [
      { value: '39', label: 'FAQ answers in structured data' },
      { value: '3', label: 'languages for local groups' },
      { value: 'All', label: 'Google reviews answered' },
    ],
    quote: 'I work alone and don’t film clients, so everything has to run without an agency or a camera crew.',
    live: { href: 'https://hordinails.com', label: 'Live at hordinails.com' },
    sections: [
      {
        title: 'Found by Google and by AI',
        lede: 'NailSalon, price and FAQ structured data plus an llms.txt let Google and AI assistants answer questions about prices and booking straight from the site.',
        more: [
          'Google Business Profile: the website link pointed to Instagram; now it goes to the site, with direct booking links',
          'Services rewritten in Swedish with prices; services I don’t offer removed',
          'Every review replied to',
          'Attributes set: by appointment only, payment methods, free parking',
          'A “Book online now” post with a booking button',
        ],
      },
      {
        title: 'Reels without filming clients',
        lede: 'In progress: each reel is a script in code, and one command turns it into a finished vertical video. The first reels are still being refined.',
        more: [
          'Voice: Kokoro TTS reads the script',
          'Captions: faster-whisper times every word and checks the voice is clear',
          'Sound: generated music and effects, ducked under the voice',
          'Scenes: animated in Remotion from the timing data',
          'Finish: FFmpeg normalises loudness to −14 LUFS',
        ],
      },
      {
        title: 'Local posts in three languages',
        lede: 'Posts for local, international and Ukrainian groups, each in its own language, with ready replies for “how much / do you have time?” comments.',
        more: ['Every post links to the site and names the area, never the street address'],
        layout: 'grid3',
        images: [
          { src: `${H}/works-01.jpg`, w: 563, h: 1000, label: 'Work photo' },
          { src: `${H}/works-05.jpg`, w: 562, h: 1000, label: 'Work photo' },
          { src: `${H}/works-11.jpg`, w: 1000, h: 1000, label: 'Work photo' },
        ],
      },
    ],
    points: [
      'NailSalon, price and FAQ structured data (39 questions) and llms.txt',
      'Rebuilt Google Business Profile: link, priced services, review replies, booking post',
      'Local posts and replies in Swedish, English and Ukrainian',
      'A code-driven reel pipeline: TTS voice, timed captions, generated sound, Remotion',
    ],
    tools: ['Local SEO', 'Schema.org', 'llms.txt', 'Google Business Profile', 'Facebook Groups', 'Kokoro TTS', 'Whisper', 'Remotion', 'FFmpeg'],
  },

  // ─── ICPress ─────────────────────────────────────────────────────────
  {
    slug: 'icpress',
    back: MARKETING,
    navLabel: 'ICPress — 2026',
    eyebrow: 'Product Marketing · UX Audit · Video Content',
    title: 'ICPress',
    deck: 'Before it needed more promotion, the product needed sharper positioning and a clearer surface. That is where I started.',
    meta: [
      { label: 'Role', value: 'Co-Founder & Head of Marketing' },
      { label: 'Period', value: 'November 2026 – present' },
      { label: 'Context', value: 'StoryPop AB, Sweden: compare a company with its real peers' },
    ],
    stats: [
      { value: '5', label: 'frameworks in the audit' },
      { value: '3', label: 'presentation levels, same numbers' },
      { value: '1+12', label: 'pilot and episodes of “Finance from zero”' },
    ],
    quote: 'The site was selling a different product from the one being built.',
    live: { href: 'https://icpress.org', label: 'icpress.org' },
    sections: [
      {
        title: 'Marketing audit',
        lede: 'I went through the site, articles, app listing, GitHub and social channels. The site showed a news feed. The team was building a comparison tool.',
        more: [
          'Positioning: “Compare companies apples to apples. Same metrics, same periods, one method.”',
          'A waitlist as the main goal before beta, with separate landings for beginners and pros',
          'Articles reworked into comparisons, so content leads into the product',
          'After beta: programmatic “X vs Y” and “sector leaders by metric” pages',
          'Onboarding with one comparison before sign-up',
          'Pricing sketch: beginners pay for confidence, professionals pay for time',
        ],
      },
      {
        title: 'Issues an AI agent can fix',
        lede: 'The developers work with AI coding agents, so I wrote every issue to be handed over as-is (“fix issue #N”) by someone who has never seen the page.',
        more: [
          'Exact URL and user state: guest, signed in, on the waitlist',
          'Element IDs, classes and texts from the live site, so the agent finds the code by search',
          'Measurements in px and viewports for layout problems',
          'Likely cause, proposed fix and an acceptance checklist',
          'What not to touch, and which related places are affected',
        ],
      },
      {
        title: 'Finance from zero',
        lede: 'Short vertical videos for beginners. After feedback, I rebuilt the format: no word goes unexplained, every number on screen can be recalculated.',
        more: [
          'Each episode: hook → new words with a lemonade-stand example → the maths step by step → the same formula on a real company → comparison with peers',
          'Episodes are written as data; an engine renders the animation in Chrome, adds Kokoro TTS narration and timed captions, and assembles the MP4 with FFmpeg',
        ],
        videos: [
          { src: `${I}/pilot_margin_from_zero.mp4`, poster: `${I}/pilot_margin_from_zero.jpg`, label: 'Pilot: what is a margin?' },
          { src: `${I}/fz01_two_margins.mp4`, poster: `${I}/fz01_two_margins.jpg`, label: 'Two kinds of margin' },
          { src: `${I}/fz04_inventory.mp4`, poster: `${I}/fz04_inventory.jpg`, label: 'What is inventory?' },
          { src: `${I}/fz12_peers.mp4`, poster: `${I}/fz12_peers.jpg`, label: 'Why peers matter' },
        ],
      },
    ],
    points: [
      'Audited positioning, site, SEO, social and community; proposed positioning around fair comparison',
      'Planned a waitlist-first launch, comparison-led content and three-level onboarding',
      'Filed product issues detailed enough for an AI agent to fix without context',
      'Designed “Finance from zero”, rebuilt it after feedback, and built its video engine',
    ],
    tools: ['Positioning', 'SEO Audit', 'UX Review', 'GitHub Issues', 'Kokoro TTS', 'Headless Chrome', 'FFmpeg', 'Claude'],
  },

  // ─── Tasstur · design ───────────────────────────────────────────────
  {
    slug: 'tasstur-design',
    back: DESIGN,
    navLabel: 'Tasstur — 2026',
    eyebrow: 'Product Design · Web · PWA',
    title: 'Tasstur',
    deck: 'A map for friends with dogs grew into a guide to Stockholm. The job: make a map, reference pages, tools and a sales page feel like one calm product.',
    meta: [
      { label: 'Role', value: 'Founder · Designer · Developer' },
      { label: 'Period', value: 'November 2026 – present' },
      { label: 'Context', value: 'My own product for dog owners in Stockholm, pre-launch' },
    ],
    stats: [
      { value: '1,400+', label: 'places on the map' },
      { value: '413', label: 'breeds in the breed test' },
      { value: '3', label: 'visual directions tried' },
    ],
    quote: 'Real photos carry the emotion, so the interface can stay quiet.',
    sections: [
      {
        title: 'Three directions, one that stayed',
        lede: 'Dog-vision blue and yellow looked like every AI-made landing page. A neo-brutalist “dog zine” felt dated within a day. “Nordic editorial” stayed.',
        more: [
          'First: blue and yellow, a vector dachshund mascot, and a grid that left one card alone on the last row',
          'Second: thick outlines, hard shadows, stickers. Loud',
          'Final: oat background, soft white surfaces, light Onest headings, navy for actions, one yellow dot as the only accent',
          'The section grid became a bento with the map as the big tile, so nothing is left hanging',
        ],
        layout: 'grid2',
        images: [
          vWide('v1-guide', 'Before', 'Blue and yellow, mascot, a 4 + 1 grid.', 1600, 1000),
          vWide('guide-desktop', 'After', 'Oat, photo hero, one yellow accent.'),
        ],
      },
      {
        title: 'Calm chrome, loud data',
        lede: 'Brand colours on the markers made categories impossible to tell apart. So markers keep their own colours, and the brand lives only in the interface around them.',
        more: [
          'Search, category chips with live counts, “dog menu” and “Dog Favourite” filters',
          '“Near me” lists the closest places within a radius you choose',
          'On a phone the panel becomes a bottom sheet',
        ],
        layout: 'wide',
        images: [vWide('map-desktop', 'Map, desktop', '1,400+ places in eight categories.')],
      },
      {
        title: 'One layout for every long page',
        lede: 'The rules page read like Wikipedia. I rebuilt it as a reference, then made that layout switch on by itself for any long page.',
        more: [
          '“At a glance” tiles with the eight facts people ask most',
          'Sticky table of contents with scroll tracking; a chip strip on mobile',
          'Season bars, tap-to-call numbers, sources folded into one line',
          'Any page with four or more sections gets the layout automatically',
        ],
        layout: 'phones',
        images: [
          vPhone('rules', 'Rules & laws', 'Fact tiles and chip strip.'),
          vPhone('visiting', 'Visiting', '“Save to Notes” and PDF.'),
          vPhone('signals', 'Ribbons & signals', 'Tap a colour to learn it.'),
          vPhone('guide', 'Guide hub', 'Search from the hero.'),
        ],
      },
      {
        title: 'Tools, not walls of text',
        lede: 'First dog answers three questions with small tools: a time test, a cost calculator with real Stockholm prices, and a breed test across 413 breeds.',
        more: ['The breed test takes five short steps and loads only when someone opens it'],
        layout: 'phones',
        images: [
          vPhone('first-dog', 'First dog', 'Four questions first.'),
          vPhone('time', 'Time test', 'One question per screen.'),
          vPhone('money', 'Cost calculator', 'Real prices, by dog size.'),
          vPhone('breed', 'Breed test', '413 breeds, five steps.'),
        ],
      },
      {
        title: 'A sales page that reads like a letter',
        lede: 'The first version was a stack of cards and felt like an ad. I rebuilt it as a magazine spread: a letter from me, with photos of my own dogs.',
        more: [
          'Typographic hero beside my puppy, with a handwritten note',
          'A pull quote beside my first dog, three big numbers, a numbered contents list',
          'A plain comparison of the free checklist and the paid guide',
          'Hero photos elsewhere on the site are stock; on this page they are all mine',
        ],
        layout: 'grid2',
        images: [
          vWide('landing-hero', 'Landing hero', 'Headline, waitlist, handwritten caption.'),
          vWide('landing-letter', 'The letter', 'Pull quote and my first dog.', 1600, 1000),
        ],
      },
      {
        title: 'Print and offline',
        lede: 'The free checklist is generated from the site’s own text, as a PDF and a Notes-ready version in ten languages. The site installs as an app and works offline.',
        layout: 'grid2',
        images: [
          { src: `${V}/checklist-en.jpg`, w: 989, h: 1400, label: 'Free checklist', description: 'Red flags, anti-smuggling checks, the first month.' },
          vWide('landing-waitlist', 'Waitlist', 'Navy band at the end of the landing.', 1600, 1000),
        ],
      },
    ],
    points: [
      'Took the look through three directions and wrote down why each failed',
      'Map interface where the brand stays in the chrome and data stays readable',
      'A reference layout that turns on by itself for any long page',
      'Breed test (413 breeds), time test and puppy cost calculator',
      'Paid-guide landing rebuilt from cards into a letter',
      'Checklist in ten languages; installable, offline-ready app',
    ],
    tools: ['Product Design', 'UI Design', 'Information Architecture', 'HTML / CSS / JS', 'Leaflet', 'PWA', 'Claude Code'],
  },

  // ─── Tasstur · marketing ────────────────────────────────────────────
  {
    slug: 'tasstur-marketing',
    back: MARKETING,
    navLabel: 'Tasstur — 2026',
    eyebrow: 'Product Marketing · Programmatic SEO · Funnel',
    title: 'Tasstur',
    deck: 'The go-to-market for my own dog guide, set up before launch: audiences, name, data, search, languages and a free-to-paid funnel.',
    meta: [
      { label: 'Role', value: 'Founder · All marketing' },
      { label: 'Period', value: 'November 2026 – present' },
      { label: 'Status', value: 'Pre-launch, not yet open to search engines' },
    ],
    stats: [
      { value: '1,545', label: 'SEO pages from one dataset' },
      { value: '1,400+', label: 'places merged from several sources' },
      { value: '10', label: 'languages, picked from tourism data' },
    ],
    quote: 'Trust is the product here, and a source next to every claim is how I show it.',
    quoteAfter: 1,
    sections: [
      {
        title: 'Who it’s for, and the name',
        lede: 'Visitors search in their own language, locals in Swedish, and new owners lead to the paid guide. The first name, Vovve, had lost its domain, so I renamed before launch.',
        more: [
          'Tasstur: tass is a paw, tur is a trip. The .se, .com and social handle were all free',
          'Keywords stay in titles and URLs (/hundvanligt/södermalm/); the brand is only a suffix, so the name never costs a ranking',
        ],
      },
      {
        title: 'Data nobody else has',
        lede: 'No single source lists every dog-friendly place in Stockholm. I merged guides, review sites, hotels and OpenStreetMap into one map, and asked the largest source for permission.',
        more: [
          'Duplicates removed across sources',
          'Every rule links to its source: Swedish law, city regulations, Jordbruksverket, SL',
        ],
      },
      {
        title: '1,545 pages from one dataset',
        lede: 'The map’s data also builds static Swedish pages for search, regenerated on every deploy.',
        more: [
          '122 listing pages: 35 districts with category pages (“Hundvänliga kaféer på Södermalm”) plus city-wide categories',
          '1,422 place pages with address, dog rules, nearby places and a map deep link',
          'schema.org: breadcrumbs everywhere, the right business type with coordinates on each place',
          'Titles written from real counts (“300 places on Södermalm where your dog can come along”)',
          'Sitemap and canonicals; noindex until the domain and data agreement are final',
        ],
        layout: 'phones',
        images: [
          vPhone('seo-area', 'District page', 'Counts and a map button.'),
          vPhone('seo-category', 'Category page', 'Every café, with dog rules.'),
          vPhone('seo-place', 'Place page', 'Rules, directions, nearby.'),
        ],
      },
      {
        title: 'Languages from tourism data',
        lede: 'Most visitors come from the US, Germany, Norway, the UK and Finland, and Norwegians read Swedish. Ten languages cover them and the large expat groups.',
        more: [
          'English, Swedish, German and Finnish first; then Dutch, Spanish, Polish, Russian, French, Chinese',
          'Map, guide pages and checklist all in the same ten languages',
          'A checker flags translations whose structure drifts from the English',
        ],
      },
      {
        title: 'From free map to paid guide',
        lede: 'Map or rules → First dog → free checklist → waitlist. Official advice stays free; the insider questions for breeders stay in the paid guide.',
        more: ['The pitch: a truly good breeder is almost impossible to find, and a registered kennel is no proof of a well-socialised puppy'],
        layout: 'phones',
        images: [
          vPhone('first-dog', 'First dog (free)', 'Tools and official advice.'),
          vPhone('landing', 'Paid guide', 'Waitlist first, price at launch.'),
        ],
      },
      {
        title: 'The story is the proof',
        lede: 'My first dog, from a breeder with papers, was so fearful I had to rehome her. That story, told as a letter, is the landing page.',
        more: [
          'Three numbers: 14 years old when I started with dogs, 3 trainers, 0 times I could stroke her',
          'A short FAQ answers objections: “The breeder is SKK-registered. Isn’t that enough?”',
          'The waitlist asks for an email and promises one email; a form per language shows which markets want it',
        ],
        layout: 'grid2',
        images: [
          vWide('landing-letter', 'The letter', 'Pull quote and a real photo.', 1600, 1000),
          vWide('landing-waitlist', 'Waitlist', 'One field, one promise.', 1600, 1000),
        ],
      },
      {
        title: 'Privacy as a selling point',
        lede: 'No accounts, no ads, no tracking, and location never leaves the phone, written into the store listing as a feature.',
        more: ['A Google Play listing (English and Russian, icon, screenshots) is ready to publish'],
      },
    ],
    points: [
      'Defined three audiences; renamed the product before launch',
      'Merged 1,400+ places into one dataset, with permission from the largest source',
      'Generated 1,545 Swedish SEO pages with schema.org markup',
      'Picked 10 languages from tourism statistics',
      'Free-to-paid funnel: map → checklist → waitlist, around my own story',
    ],
    tools: ['Positioning', 'Programmatic SEO', 'Schema.org', 'Localisation', 'Lead Magnet', 'Waitlist', 'Netlify Forms', 'PWA'],
  },

  // ─── Voxear · brand system ──────────────────────────────────────────
  {
    slug: 'voxear-brand-system',
    back: DESIGN,
    navLabel: 'Voxear — 2026',
    eyebrow: 'Brand Identity · Design System · Figma',
    title: 'Brand System from Zero',
    deck: 'Close to a hundred marketing files and no written brand rules. I turned the identity already in use into a system the whole company can reuse.',
    meta: voxearMeta,
    stats: [
      { value: '~95', label: 'files audited' },
      { value: '8', label: 'documented areas' },
      { value: '2', label: 'contested decisions, both approved' },
    ],
    sections: [
      {
        title: 'From habits to a system',
        lede: 'I audited the whole library, reverse-engineered the identity in circulation and documented it in Figma, exported as design tokens.',
        more: [
          'Eight areas: foundations, colour, typography, logo, iconography, components, voice and tone, applied examples',
          'A shared asset library, so colleagues and vendors could use the identity before sign-off',
          'Voice and tone grew from one line in the old handbook into a guide with words to use and avoid',
        ],
      },
      {
        title: 'Colour and type',
        lede: 'An orange accent and a secondary blue, taken from colours already on the collateral. Type styles with sizes, line heights and token names.',
        layout: 'grid2',
        images: [
          { src: `${X}/brand-colour.jpg`, w: 1584, h: 1113, label: 'Colour', description: 'Accent, secondary and tints, with HEX and RGB.' },
          { src: `${X}/brand-type.jpg`, w: 1584, h: 2227, label: 'Typography', description: 'Display to label, with tokens.' },
        ],
      },
      {
        title: 'Spacing and logo',
        lede: 'A 4px scale, a 12-column web grid and an A4 print grid share one rhythm. Logo rules cover clear space, minimum size and misuse.',
        layout: 'grid2',
        images: [
          { src: `${X}/brand-spacing.jpg`, w: 1584, h: 1470, label: 'Spacing & grid', description: 'Screen and print on one rhythm.' },
          { src: `${X}/brand-logo.jpg`, w: 1584, h: 1747, label: 'Logo usage', description: 'Clear space, sizes, one-colour, misuse.' },
        ],
      },
      {
        title: 'Two contested decisions',
        lede: 'The accent colour and the body typeface were debated. I made the case from published branding research and real identity reversals. Both were approved.',
      },
    ],
    points: [
      'Audit of ~95 files turned into eight documented brand areas',
      'Design tokens and a shared asset library, usable before sign-off',
      'Voice and tone guide with words to use and avoid',
      'Evidence-based case for the accent colour and body typeface',
    ],
    tools: ['Figma', 'Figma Make', 'Design Tokens', 'Brand Strategy'],
  },

  // ─── Voxear · icon set ──────────────────────────────────────────────
  {
    slug: 'voxear-icon-set',
    back: DESIGN,
    navLabel: 'Voxear — 2026',
    eyebrow: 'Iconography · Visual Design',
    title: 'Custom Icon Set',
    deck: 'The products are sold on specs, and the system had no icons. I made one family that follows the logo geometry.',
    meta: voxearMeta,
    stats: [
      { value: '7', label: 'icons for the specs that sell' },
      { value: '4', label: 'open-source sets unified' },
      { value: '2', label: 'passes to make one family' },
    ],
    sections: [
      {
        title: 'One family from mixed sources',
        lede: 'Icons from Font Awesome, Boxicons, Ionicons and Eva Icons, plus two vectorised from references, redrawn in two passes until they read as one set.',
        more: [
          'Battery, Bluetooth, IP67, SNR, certified, radio and in-ear',
          'Sharp corners where the shape allows, curves only where the subject needs them (ear, umbrella)',
        ],
        layout: 'single',
        images: [
          { src: `${X}/icon-set.webp`, w: 842, h: 454, label: 'The set', description: 'Seven spec icons next to the logo mark they follow.' },
        ],
      },
    ],
    points: [
      'Seven icons selected from four open-source sets, plus two vectorised from references',
      'Unified in two passes to match the logo geometry',
    ],
    tools: ['Figma', 'Iconography', 'Design Tokens'],
  },

  // ─── Voxear · retail display ────────────────────────────────────────
  {
    slug: 'voxear-retail-display',
    back: DESIGN,
    navLabel: 'Voxear — 2026',
    eyebrow: 'Physical Design · Print Production',
    title: 'Retail Display Redesign',
    deck: 'Everyone knew the display had problems, but nobody had written them down and sign-off had stalled. I wrote the list, specified the print and got it delivered.',
    meta: voxearMeta,
    stats: [
      { value: '2', label: 'panels redesigned' },
      { value: '1st', label: 'brand accent on a physical fixture' },
      { value: '13.10', label: 'printed and delivered' },
    ],
    quote: 'One message instead of four bullets, readable in seconds from a few metres away.',
    sections: [
      {
        title: 'Front graphic',
        lede: 'From a text list over a photo to a two-line headline in the brand accent and three spec callouts with icons.',
        more: [
          'Specs become numbers: 40 h and 35 dB set large, so shoppers compare at a glance',
          'The brand accent appears on a physical surface for the first time',
          'The earbud is shown in the ear; the award mark sits in a fixed corner',
        ],
        pair: {
          before: { src: `${X}/before-front.jpg`, w: 1000, h: 1124, label: 'Front, before', description: 'A list over a photo.' },
          after: { src: `${X}/display-front.jpg`, w: 1280, h: 1170, label: 'Front, after', description: 'Headline and three specs.' },
        },
      },
      {
        title: 'Product panel',
        lede: 'The product shown once, as it’s sold, with only the functions that sell it called out. Plus a fit chart and a QR code.',
        more: [
          'Before: three small views and a dozen thin labels. After: case open, both earbuds inside, orange leader lines',
          'Each function gets a name and one line, which is all someone at a display will read',
          'A fit chart shows every eartip size against its rating (SNR29 / SNR35)',
          'Target trades and a QR code to the product page close the panel',
        ],
        pair: {
          before: { src: `${X}/before-back.jpg`, w: 1200, h: 1108, label: 'Panel, before', description: 'Small views, many labels.' },
          after: { src: `${X}/display-back.jpg`, w: 1600, h: 1483, label: 'Panel, after', description: 'Annotated, fit chart, QR.' },
        },
      },
      {
        title: 'From board to print',
        lede: 'Layout and colour variants compared on one board. The feedback became a print spec, agreed with the vendor, the CEO and sales.',
        more: [
          'A dated, checkable defect list replaced “it doesn’t feel right”',
          'Print spec: colour profile, bleed, dimensions, colour build for the new accent',
          'Design review with the CEO and sales lead, with an itemised revision list agreed on the spot',
          'The vendor agreed to build a second comparison unit',
        ],
        layout: 'wide',
        images: [
          { src: `${X}/display-explorations.jpg`, w: 1400, h: 928, label: 'Explorations', description: 'Light to dark variants on one Figma board.' },
        ],
      },
    ],
    points: [
      'Turned “it doesn’t feel right” into a dated, checkable defect list',
      'Wrote the print specification for the new accent colour',
      'Ran the design review with the CEO and sales lead',
      'Printed display delivered on 13 October',
    ],
    tools: ['Figma', 'Print Specification', 'Vendor Coordination'],
  },

  // ─── Voxear · templates ─────────────────────────────────────────────
  {
    slug: 'voxear-templates',
    back: DESIGN,
    navLabel: 'Voxear — 2026',
    eyebrow: 'Layout · Templates · Documentation',
    title: 'Document Template & Style Guide',
    deck: 'Every document was built from scratch, so none looked alike. I made a Word template, and a style guide written in that template.',
    meta: voxearMeta,
    quote: 'The guide uses every style it teaches.',
    sections: [
      {
        title: 'A guide that shows itself',
        lede: 'Every heading, table and callout in the guide is the real thing, with steps next to it, so anyone can rebuild it without asking a designer.',
        more: [
          'Fonts, colours and table styles carry over from any existing document',
          'A colour table with the HEX codes Word asks for',
          'Product sheets rebuilt as editable documents with lab-tested attenuation tables',
        ],
        layout: 'grid2',
        images: [
          { src: `${X}/doc-template-1.jpg`, w: 935, h: 1210, label: 'Page 1', description: 'How to use it, and the colour table.' },
          { src: `${X}/doc-template-2.jpg`, w: 935, h: 1210, label: 'Page 2', description: 'Heading levels as working examples.' },
        ],
      },
    ],
    points: [
      'Branded Word template and a self-demonstrating style guide',
      'Styles that carry over from any existing document',
      'Product sheets rebuilt as editable documents',
    ],
    tools: ['Word', 'Style Guide', 'Layout'],
  },

  // ─── SpaceCorps ──────────────────────────────────────────────────────
  {
    slug: 'spacecorps',
    back: DESIGN,
    navLabel: 'SpaceCorps — 2025',
    eyebrow: 'UX/UI Design · Brand Identity · Game Interface',
    title: 'SpaceCorps',
    deck: 'The sole designer at MVP stage: identity, design system and every screen, from colour tokens to the pilot dashboard.',
    meta: [
      { label: 'Role', value: 'UX/UI & Product Designer' },
      { label: 'Period', value: 'Jun – Dec 2025' },
      { label: 'Context', value: 'Early-stage browser game startup · Remote' },
    ],
    live: { href: 'https://spacecorpstechnology.com', label: 'Live at spacecorpstechnology.com' },
    sections: [
      {
        title: 'A dark sci-fi system',
        lede: 'Accent, secondary, neutral and semantic tones, built as tokens for a dark interface that stays readable under dense data.',
        layout: 'grid2',
        images: [{ src: '/projects/spacecorps/colors.jpg', w: 782, h: 956, label: 'Brand system', description: 'Palette and tokens.' }],
      },
      {
        title: 'Landing & auth',
        lede: 'Registration and login over a full-bleed space background.',
        images: [{ src: '/projects/spacecorps/landing.png', w: 1920, h: 2910, label: 'Landing', description: 'The full page opens on tap.', crop: 0.85 }],
      },
      {
        title: 'Pilot dashboard',
        lede: 'The main hub: pilot profile, worldwide leaderboard, clan stats and an activity feed. Data-dense, still readable.',
        images: [{ src: '/projects/spacecorps/dashboard.png', w: 1920, h: 1080, label: 'Dashboard' }],
      },
      {
        title: 'Lore reader',
        lede: 'An in-game story reader with reading progress, chapter navigation and a lore score that rewards engagement.',
        images: [{ src: '/projects/spacecorps/lore.png', w: 1920, h: 1080, label: 'Lore / wiki' }],
      },
    ],
    points: [
      'Brand identity: colours, typography, component system',
      'Live company website',
      'UX/UI concepts and prototypes for the game MVP',
      'Pilot dashboard and lore reader',
      'A dark design system for complex data layouts',
    ],
    tools: ['Figma', 'Design Systems', 'UX Prototyping', 'Brand Identity', 'Dark UI', 'Component Library', 'Game UI/UX'],
  },

  // ─── Karolinska ─────────────────────────────────────────────────────
  {
    slug: 'karolinska',
    back: DESIGN,
    navLabel: 'Karolinska Institutet — 2025',
    eyebrow: 'UX/UI Design · Data Dashboard · HR Analytics',
    title: 'Karolinska Institutet',
    deck: 'An internal HR and operations dashboard that makes complex data readable for administrative staff, in the university’s plum and coral.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Type', value: 'HR & Analytics Dashboard' },
      { label: 'Client', value: 'Karolinska Institutet, Stockholm' },
    ],
    sections: [
      {
        title: 'The whole case on one board',
        lede: 'Dashboard layout, data visualisation, HR flows and a colour system adapted to the university brand.',
        images: [
          { src: '/projects/dashboards/Create Behance Case Study.png', w: 2618, h: 7523, label: 'Case board', description: 'The full board opens on tap.', crop: 1.1 },
        ],
      },
    ],
    points: [
      'HR analytics dashboard with performance and budget tracking',
      'Charts, tables and KPI cards',
      'Colour system adapted to the Karolinska brand',
      'Information architecture for complex operational data',
    ],
    tools: ['Figma', 'Data Visualisation', 'Dashboard Design', 'Brand System', 'UX Research', 'Prototyping'],
  },

  // ─── Ivy Interactive ────────────────────────────────────────────────
  {
    slug: 'ivy',
    back: DESIGN,
    navLabel: 'Ivy Interactive — 2025',
    eyebrow: 'UX/UI Design · Landing Page · Product Messaging',
    title: 'Ivy Interactive',
    deck: 'A webinar landing page that turns highly technical features into clear messaging for developers, without losing precision.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Type', value: 'B2B Landing Page' },
      { label: 'Context', value: 'Developer-focused SaaS platform' },
    ],
    sections: [
      {
        title: 'The promise, then the why',
        lede: 'Headline, subtext and one CTA above the fold, then the value proposition against the alternatives.',
        images: [
          { src: '/projects/ivy/landingpage.jpg', w: 1280, h: 935, label: 'Hero' },
          { src: '/projects/ivy/why Ivy.jpg', w: 1280, h: 584, label: 'Why Ivy' },
        ],
      },
      {
        title: 'Features developers care about',
        lede: 'What the platform delivers, Blazor support, and what it deliberately avoids, each with a clear hierarchy.',
        images: [
          { src: '/projects/ivy/what you ll see.jpg', w: 1280, h: 949, label: 'What you’ll see' },
          { src: '/projects/ivy/blazor.jpg', w: 1280, h: 801, label: 'Blazor integration' },
          { src: '/projects/ivy/no razor.jpg', w: 1280, h: 965, label: 'No Razor' },
        ],
      },
      {
        title: 'The bottom line',
        lede: 'A closing summary and the conversion point.',
        images: [{ src: '/projects/ivy/thebottomline.jpg', w: 1280, h: 1026, label: 'Closing CTA' }],
      },
    ],
    points: [
      'Full landing page, from hero to closing CTA',
      'Messaging hierarchy for a technical B2B audience',
      'Feature sections: Blazor, platform differentiators',
      'Figma prototype ready for developer handoff',
    ],
    tools: ['Figma', 'Landing Page Design', 'Product Messaging', 'B2B UX', 'Prototyping'],
  },

  // ─── Ivy Studio ─────────────────────────────────────────────────────
  {
    slug: 'ivy-studio',
    back: DESIGN,
    navLabel: 'Ivy Interactive — 2025',
    eyebrow: 'UX/UI Design · App Interface · Prototype',
    title: 'Ivy Studio',
    deck: 'The first prototype of a developer-focused studio tool: workspace layout, navigation and core interaction patterns.',
    meta: [
      { label: 'Role', value: 'UX/UI Designer' },
      { label: 'Type', value: 'Product Interface Prototype' },
      { label: 'Context', value: 'Ivy Interactive, 2025' },
    ],
    sections: [
      {
        title: 'Studio interface',
        lede: 'First iteration of the workspace and its navigation structure, in Ivy Interactive’s visual language.',
        images: [{ src: '/projects/ivy/firstivystudioprototype.jpg', w: 1280, h: 879, label: 'First prototype' }],
      },
    ],
    points: [
      'Core workspace layout for a developer-facing tool',
      'Navigation structure and information architecture',
      'Early interaction patterns and UI components',
      'Visual language aligned with the Ivy brand',
    ],
    tools: ['Figma', 'UX Prototyping', 'App Interface', 'Design Systems', 'Developer Tools UX'],
  },

  // ─── Beauty by Luidmila ─────────────────────────────────────────────
  {
    slug: 'beauty',
    back: MARKETING,
    navLabel: 'Beauty by Luidmila — 2023',
    eyebrow: 'Targeted Ads · Content Creation · Social Media',
    title: 'Beauty by Luidmila',
    deck: 'Posts, images and short videos for a beauty salon’s Meta campaigns: a warm, consistent look that turns local audiences into bookings.',
    meta: [
      { label: 'Role', value: 'Content Creator · Ads Manager' },
      { label: 'Type', value: 'Targeted Advertising' },
      { label: 'Year', value: '2023' },
    ],
    sections: [
      {
        title: 'Content for local ads',
        lede: 'Ad creatives for Facebook and Instagram, short-form video for feeds, and post design for service promotion, all aimed at a local audience.',
        videos: [
          {
            src: '/projects/Beautybyluidmila/Content%20Creation%20Create%20and%20design%20posts%2C%20images%20and%20videos.mp4',
            label: 'Content reel',
            autoplay: true,
          },
        ],
      },
    ],
    points: [
      'Ad creatives for Facebook and Instagram',
      'Short-form video for social feeds',
      'Post design and image editing for service promotion',
      'Content plan aligned with local targeting',
    ],
    tools: ['Meta Ads', 'Video Editing', 'Content Design', 'Canva', 'Social Media'],
  },
]

export const getCase = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug)!
