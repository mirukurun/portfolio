export type Img = { src: string; w: number; h: number; label: string; description: string }

export type VoxearCase = {
  slug: string
  eyebrow: string
  title: string
  intro: string
  grid?: 1 | 2
  images: Img[]
  points: string[]
  tools: string[]
}

export const VOXEAR_CASES: VoxearCase[] = [
  {
    slug: 'brand-system',
    eyebrow: 'Brand Identity · Design System · Figma',
    title: 'Brand System from Zero',
    intro:
      'A hardware company with close to a hundred marketing files had no written brand rules: no colour codes, no type choices, no tone guidance, just a few logo files and habits. I audited the whole library, reverse-engineered the identity already in circulation, and turned it into a Figma-based system the whole company can reuse, exported as design tokens.',
    images: [
      {
        src: '/projects/voxear/brand-colour.jpg', w: 1584, h: 1113,
        label: 'Colour',
        description: 'Accent orange and secondary blue with tints, taken from colours already appearing across collateral and specified with HEX and RGB.',
      },
      {
        src: '/projects/voxear/brand-type.jpg', w: 1584, h: 2227,
        label: 'Typography',
        description: 'Display, heading, body and label styles with size, line height and token names. The logo face follows the official wordmark construction.',
      },
      {
        src: '/projects/voxear/brand-spacing.jpg', w: 1584, h: 1470,
        label: 'Spacing & Grid',
        description: 'A 4px-based spacing scale, a 12-column web grid and an A4 print grid, so screen and print layouts share one rhythm.',
      },
      {
        src: '/projects/voxear/brand-logo.jpg', w: 1584, h: 1747,
        label: 'Logo usage',
        description: 'Clear space, minimum size, one-colour versions and misuse examples.',
      },
    ],
    points: [
      'Audit of ~95 files with no documented brand rules, turned into eight documented areas: foundations, colour, typography, logo, iconography, components, voice and tone, applied examples',
      'Reusable design tokens and a shared asset library, so colleagues and vendors could start using the identity before the guidelines were signed off',
      'Voice and tone principles expanded from a single line in the old handbook into a usable guide with words to use and avoid',
      'Evidence-based case for the two contested decisions (accent colour, body typeface), citing published branding research and real identity reversals. Leadership approved both',
    ],
    tools: ['Figma', 'Figma Make', 'Design Tokens', 'Brand Strategy'],
  },
  {
    slug: 'icon-set',
    eyebrow: 'Iconography · Visual Design',
    title: 'Custom Icon Set',
    intro:
      'The system had no icons, and the products are sold on specs: battery life, connectivity, water resistance, attenuation. I drew a set matched to the logo geometry and the technical type, then put it to work on real materials.',
    grid: 1,
    images: [
      {
        src: '/projects/voxear/icons-in-use.jpg', w: 1200, h: 1138,
        label: 'Icons in use',
        description: 'Icon set applied to spec callouts on a display graphic: two-device connectivity, 40 h battery, 35 dB attenuation.',
      },
    ],
    points: [
      'Seven icons drawn on a 24px grid (16px and 32px variants) with a proportional 1.5px stroke',
      'Geometric outline style: sharp corners where the shape allows it, curves only where the subject needs them (ear, umbrella)',
      'Orange reserved for a single accent per icon, never a fully orange-filled icon',
      'Certification stays a text badge by decision: certification marks read as verifiable fact better as text than as an invented pictogram',
    ],
    tools: ['Figma', 'Iconography', 'Design Tokens'],
  },
  {
    slug: 'display',
    eyebrow: 'Physical Design · Print Production',
    title: 'Retail Display Redesign',
    intro:
      'The in-store product display had known problems, but nobody had written down what was wrong and sign-off had stalled for months. I documented the current state with specific, dated defects, worked with the external production vendor on a print specification, and brought the new brand accent colour from guideline pages onto a physical fixture for the first time.',
    images: [
      {
        src: '/projects/voxear/before-front.jpg', w: 1000, h: 1124,
        label: 'Before — front graphic',
        description: 'An earlier version of the front graphic, before the brand system: a text list over a photo, without brand colour or a clear hierarchy.',
      },
      {
        src: '/projects/voxear/display-front.jpg', w: 1600, h: 1462,
        label: 'After — front graphic',
        description: 'Two-line headline in the brand accent, three spec callouts with the new icons, and the award mark. Photography does the rest.',
      },
      {
        src: '/projects/voxear/before-back.jpg', w: 1200, h: 1108,
        label: 'Before — product panel',
        description: 'An earlier product panel: a labelled diagram on a dark background, before the new type and colour.',
      },
      {
        src: '/projects/voxear/display-back.jpg', w: 1600, h: 1483,
        label: 'After — product panel',
        description: 'An annotated product diagram with orange leader lines, a fit chart for every eartip size and rating, and a QR code to the product page.',
      },
      {
        src: '/projects/voxear/display-explorations.jpg', w: 1400, h: 928,
        label: 'Concept explorations',
        description: 'Layout and colour variants compared side by side on one Figma board, from light to dark backgrounds.',
      },
    ],
    points: [
      'Replaced a vague "it doesn\'t feel right" with a written, checkable list of dated defects',
      'Translated feedback into a print specification: colour profile, bleed, dimensions and colour-build guidance for the new accent colour',
      'Ran a structural design review with the product owner and sales lead, agreeing an itemised revision list on the spot',
      'The vendor proposed a second comparison prototype the same day',
    ],
    tools: ['Figma', 'Print Specification', 'Vendor Coordination'],
  },
  {
    slug: 'templates',
    eyebrow: 'Layout · Templates · Documentation',
    title: 'Document Template & Style Guide',
    intro:
      'Every document in the company was built from scratch, so none looked alike. I built a branded Word template and a style guide that is itself written in the template: every heading, table and callout on the page is the real thing, with steps next to each so anyone can rebuild it without asking a designer.',
    grid: 2,
    images: [
      {
        src: '/projects/voxear/doc-template-1.jpg', w: 935, h: 1210,
        label: 'Style guide, page 1',
        description: 'How to use the template, plus the colour table with HEX codes that Word asks for.',
      },
      {
        src: '/projects/voxear/doc-template-2.jpg', w: 935, h: 1210,
        label: 'Style guide, page 2',
        description: 'Heading levels shown as working examples, each with the exact steps to make it.',
      },
    ],
    points: [
      'Self-demonstrating: the guide uses every style it teaches',
      'Fonts, colours and table styles specified so they carry over from any existing document',
      'Product sheets rebuilt as editable documents with exact lab-tested attenuation tables and an Italian translation alongside',
    ],
    tools: ['Word', 'Style Guide', 'Layout'],
  },
]

