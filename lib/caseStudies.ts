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
const V = '/projects/tasstur'
const vPhone = (name: string, label: string, description?: string): CaseImg => ({
  src: `${V}/m-${name}.jpg`, w: 1170, h: 2532, label, description,
})
const vWide = (name: string, label: string, description?: string, w = 1440, h = 900): CaseImg => ({
  src: `${V}/${name}.jpg`, w, h, label, description,
})
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

  {
    slug: 'tasstur-design',
    back: { href: '/design', label: 'Design' },
    navLabel: 'Tasstur — 2026',
    eyebrow: 'Product Design · Web · PWA',
    title: 'Tasstur',
    meta: [
      { label: 'Role', value: 'Founder · Designer · Developer' },
      { label: 'Period', value: 'November 2026 – present' },
      { label: 'Context', value: 'My own product for dog owners in Stockholm, pre-launch' },
    ],
    intro:
      'Tasstur (Swedish: tass is a paw, tur is a trip) started as a map for friends: where in Stockholm can I take my dachshund? It grew into a guide with the law in plain words, advice for visitors and a section on getting a first puppy. The hard part was not the number of pages but making a map, long reference pages, interactive tools and a sales page feel like one calm product.',
    sections: [
      {
        title: 'Three directions, one that stayed',
        text: [
          'The first version used blue and yellow, the colours dogs see best, with a vector dachshund as the mascot. It looked like every other AI-made landing page, and the card grid left one card alone on the last row. The second try was a neo-brutalist “dog zine” with thick outlines, hard shadows and stickers. It was loud and felt dated within a day.',
          'The direction that stayed is “Nordic editorial”: an oat background, white surfaces with soft shadows, no outlines, large light headings in Onest, navy for actions and one yellow dot as the only accent. Real photos carry the emotion, so the interface can stay quiet. The section grid became a bento with the map as the big tile, so nothing is ever left hanging.',
        ],
        layout: 'grid2',
        images: [
          vWide('v1-guide', 'Before: first direction', 'Dog-vision blue and yellow, a vector mascot and a 4 + 1 card grid.', 1600, 1000),
          vWide('guide-desktop', 'After: Nordic editorial', 'Oat background, photo hero, one yellow accent.'),
        ],
      },
      {
        title: 'The map: calm chrome, loud data',
        text: [
          'The panel holds search, category chips with live counts, two filters (venues with a dog menu, places rated “Dog Favourite”) and “Near me”, which lists the closest places within a radius you choose. On a phone it becomes a bottom sheet over the map.',
          'I tried the brand colours on the markers too, and it made categories impossible to tell apart. So the markers kept their distinct category colours, and the brand palette lives only in the interface around them.',
        ],
        layout: 'wide',
        images: [vWide('map-desktop', 'Map, desktop', '1,400+ places in eight categories, clustered by area.')],
      },
      {
        title: 'One layout for every long page',
        text: [
          'The rules page started as a long list that read like Wikipedia. I rebuilt it as a reference: “At a glance” tiles with the eight facts people ask most, a sticky table of contents with scroll tracking and a count of items per section, season bars, tap-to-call numbers, and sources folded into one line.',
          'Then I made the layout automatic: any page with a table of contents and four or more sections gets the sidebar on desktop and a sticky chip strip on mobile. Visiting, First dog and Ribbons & signals all use it without extra work.',
        ],
        layout: 'phones',
        images: [
          vPhone('rules', 'Rules & laws', 'Fact tiles and the chip strip that follows you down the page.'),
          vPhone('visiting', 'Visiting', 'Entry rules with “Save to Notes” and a PDF version.'),
          vPhone('signals', 'Ribbons & signals', 'Tap a colour to see what it means.'),
          vPhone('guide', 'Guide hub', 'Search across all pages from the hero.'),
        ],
      },
      {
        title: 'Tools instead of walls of text',
        text: [
          'The First dog section answers three questions with small tools instead of paragraphs. A time test asks how long the home is empty. A cost calculator shows what a puppy really costs in the first three months, using real shop prices in Stockholm. A breed test covers 413 breeds in five short steps, from the home to the family, and is loaded only when someone opens it.',
        ],
        layout: 'phones',
        images: [
          vPhone('first-dog', 'First dog', 'Four questions to answer before you decide.'),
          vPhone('time', 'Time test', 'One question per screen.'),
          vPhone('money', 'Cost calculator', 'Real items and prices, by dog size.'),
          vPhone('breed', 'Breed test', '413 breeds, five steps.'),
        ],
      },
      {
        title: 'A sales page that reads like a letter',
        text: [
          'The paid guide on choosing a puppy needed a landing page. The first version was the usual stack of cards, and it felt like an ad. I rebuilt it as a magazine spread with a letter from me: a typographic hero next to a photo of my puppy with a handwritten note, a pull quote beside a photo of my first dog, three big numbers, a numbered contents list, and a plain comparison of the free checklist and the paid guide.',
          'All photos on this page are my own dogs. The guide hero photos elsewhere on the site are stock.',
        ],
        layout: 'grid2',
        images: [
          vWide('landing-hero', 'Landing hero', 'Headline, waitlist button and a handwritten caption.'),
          vWide('landing-letter', 'The letter', 'Pull quote next to a photo of my first dog.', 1600, 1000),
        ],
      },
      {
        title: 'Print and offline',
        text: [
          'The free puppy checklist is generated from the same text as the site, as a one-page PDF and a plain-text version for the phone’s Notes app, in ten languages. The site installs as an app (PWA) and keeps working offline once opened.',
        ],
        layout: 'grid2',
        images: [
          { src: `${V}/checklist-en.jpg`, w: 989, h: 1400, label: 'Free checklist, PDF', description: 'Red flags, anti-smuggling checks and the first month.' },
          vWide('landing-waitlist', 'Waitlist', 'Navy band at the end of the landing page.', 1600, 1000),
        ],
      },
    ],
    points: [
      'Took the visual style through three directions and wrote down why each one failed',
      'Designed a map interface where the brand stays in the chrome and data stays readable',
      'Built a reference-page layout that turns on by itself for any long page',
      'Designed a breed test across 413 breeds, a time test and a puppy cost calculator',
      'Rebuilt the paid-guide landing from cards into a letter with my own photos',
      'Made a printable checklist in ten languages and an installable, offline-ready app',
    ],
    tools: ['Product Design', 'UI Design', 'Information Architecture', 'HTML / CSS / JS', 'Leaflet', 'PWA', 'Claude Code'],
  },

  {
    slug: 'tasstur-marketing',
    back: { href: '/marketing', label: 'Marketing' },
    navLabel: 'Tasstur — 2026',
    eyebrow: 'Product Marketing · Programmatic SEO · Funnel',
    title: 'Tasstur',
    meta: [
      { label: 'Role', value: 'Founder · All marketing' },
      { label: 'Period', value: 'November 2026 – present' },
      { label: 'Status', value: 'Pre-launch: shared with friends, not yet open to search engines' },
    ],
    intro:
      'Tasstur is my own guide for dog owners in Stockholm: a map of places that welcome dogs and plain-language pages on the law, visiting and getting a first puppy. The map and guide are free. The plan is to earn from a paid guide on choosing a healthy, well-socialised puppy. This case is the go-to-market I set up before launch, so there are no traffic numbers yet.',
    sections: [
      {
        title: 'Who it is for, and what it is called',
        text: [
          'Two audiences search for the same thing in different ways: people visiting Stockholm with a dog, who search in their own language, and locals, who search in Swedish for “hundvänligt” plus an area. New owners are a third group, and the one that leads to the paid product.',
          'The first name was Vovve, Swedish for “doggie”. No dog map or app used it, but the domain was already taken, so I renamed the product before launch rather than after. Tasstur (tass is a paw, tur is a trip) is short, says what the product is for, and the .se and .com domains and the social handle were all free. Search keywords stay in page titles and URLs (/hundvanligt/södermalm/), and the brand is only a suffix, so the name never costs a ranking.',
        ],
      },
      {
        title: 'Data people can’t get elsewhere',
        text: [
          'No single source lists every dog-friendly place in Stockholm, so that became the advantage. I merged dog-friendly guides, review sites, pet-friendly hotels and OpenStreetMap dog parks into one map of 1,400+ places, removed duplicates across sources, and asked the owners of the largest source for permission to use their data.',
          'Every rule in the guide links to its source: Swedish law, the city’s local regulations, Jordbruksverket and SL. Trust is the product here, and a source next to every claim is how I show it.',
        ],
      },
      {
        title: '1,545 pages from one dataset',
        text: [
          'The same data that drives the map builds static Swedish pages for search, generated by a build script on every deploy:',
        ],
        bullets: [
          '35 districts and municipalities, each with its own category pages (“Hundvänliga kaféer på Södermalm”), plus city-wide category pages: 122 listing pages in total',
          '1,422 place pages with address, dog rules, nearby places and a “Show on map” deep link',
          'schema.org markup: BreadcrumbList on every page, plus the right business type (café, bar, hotel) with coordinates on each place',
          'Titles and descriptions written from the real counts (“300 places on Södermalm where your dog can come along”)',
          'Sitemap and canonical URLs; pages stay noindex until the own domain and the data agreement are final',
        ],
        layout: 'phones',
        images: [
          vPhone('seo-area', 'District page', 'Counts per category and a map button.'),
          vPhone('seo-category', 'Category page', 'Every café on Södermalm with its dog rules.'),
          vPhone('seo-place', 'Place page', 'Rules, directions and places nearby.'),
        ],
      },
      {
        title: 'Languages chosen from tourism data',
        text: [
          'Instead of guessing, I picked languages from visitor statistics. The largest groups of visitors to Stockholm come from the US, Germany, Norway, the UK and Finland. Norwegians and Danes read Swedish, so English, Swedish, German and Finnish already cover most visitors. Dutch came next from the same statistics, and Spanish, Polish, Russian, French and Chinese cover other large visitor and expat groups.',
        ],
        bullets: [
          'Map interface: 10 languages, picked from the browser language',
          'Guide pages and the free checklist: the same 10 languages',
          'A checker flags any translation whose structure drifts from the English original',
        ],
      },
      {
        title: 'From free map to paid guide',
        text: [
          'The funnel follows the user’s own path. A visitor comes for the map or the rules. A future owner reads First dog and downloads the free checklist. Someone who wants more joins the waitlist for the paid guide.',
          'The line between free and paid is strict. The checklist contains only Jordbruksverket’s official advice, because that should be free. The insider knowledge, the uncomfortable questions for breeders and how to read their answers, stays in the guide. Its pitch is that a truly good breeder is almost impossible to find, and that a registered kennel is not proof of a well-socialised puppy.',
        ],
        layout: 'phones',
        images: [
          vPhone('first-dog', 'First dog (free)', 'Useful tools and official advice.'),
          vPhone('landing', 'Paid guide landing', 'Waitlist first, price at launch.'),
        ],
      },
      {
        title: 'The story is the proof',
        text: [
          'I have worked with dogs since I was 14, and my first dog from a breeder with papers still turned out so fearful that I had to rehome her. That story is the core of the landing page, told as a letter with photos of both dogs and three numbers: 14 years old when I started, 3 trainers, 0 times I could stroke her.',
          'The page answers objections directly in a short FAQ (“The breeder is SKK-registered. Isn’t that enough?”). The waitlist asks for one thing, an email, and promises one email when the guide is out. Each language has its own form, so I can see which markets want it.',
        ],
        layout: 'grid2',
        images: [
          vWide('landing-letter', 'Letter from the author', 'The story told with a pull quote and a real photo.', 1600, 1000),
          vWide('landing-waitlist', 'Waitlist', 'One field, one promise, one email.', 1600, 1000),
        ],
      },
      {
        title: 'Privacy as a selling point',
        text: [
          'No accounts, no ads, no tracking, and location never leaves the phone. That is written into the store listing as a feature, not hidden in a policy. The site installs as an app, and a Google Play listing (text in English and Russian, icon, screenshots) is ready for when I publish it.',
        ],
      },
    ],
    points: [
      'Defined three audiences and renamed the product before launch when the first domain was taken',
      'Merged 1,400+ places from several sources into one dataset, with permission from the largest source',
      'Generated 1,545 Swedish SEO pages with schema.org markup from that dataset',
      'Picked 10 languages for the map, guide and checklist from tourism statistics',
      'Designed a free-to-paid funnel: map → checklist → waitlist for a paid guide',
      'Wrote the landing page around my own story, with an objection-handling FAQ and per-language waitlists',
    ],
    tools: ['Positioning', 'Programmatic SEO', 'Schema.org', 'Localisation', 'Lead Magnet', 'Waitlist', 'Netlify Forms', 'PWA'],
  },
]

export const getCase = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug)!
