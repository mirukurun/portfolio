// Blog article bodies, rendered by components/BlogPostPage.tsx.
// Paragraph strings support one inline link form: [text](https://url).
// List metadata (title, date, read time, excerpt) lives in lib/blogPosts.ts.

export type ArticleBlock = string | { quote: string; cite?: string }

export type ArticleSection = { heading?: string; blocks: ArticleBlock[] }

export type Article = {
  href: string
  quote?: string
  /** Index of the section the pull quote follows. */
  quoteAfter?: number
  sections: ArticleSection[]
}

export const ARTICLES: Article[] = [
  {
    href: '/blog/ai-marketers',
    sections: [
      {
        heading: 'The post',
        blocks: [
          'A Reddit post went around recently. A developer wrote that their CEO had fired six engineers after a marketing person showed him an Anthropic demo. The developer was one of the managers asked to let their team go. The post had over 2,000 upvotes and hundreds of comments, most of them variations of “this is why we can’t have nice things.”',
          'Someone in the comments said: “I’m surprised. Marketing would be easier to replace with AI than developers.”',
          'They’re not wrong.',
        ],
      },
      {
        heading: 'My own job',
        blocks: [
          'I ran outreach campaigns for an early-stage startup. I used Claude to analyze Reddit threads, draft blog posts, classify leads, and write follow-up sequences. A real chunk of what I did every day was AI-assisted. Some of it was fully automated. I’ve thought about which parts of my job a model could do without me. The answer is more than I’d like to admit.',
          'So the marketing team kept their jobs while six developers did not. And the comment section had a point: if you’re running scripts to generate leads and classify replies, what exactly is irreplaceable there?',
        ],
      },
      {
        heading: 'Agency, not luck',
        blocks: [
          'Azryl A., a fractional CMO who commented on the LinkedIn version of that post, read it differently.',
          {
            quote: 'The devs got cut because AI competes with their craft. The marketing team kept their jobs because one of them translated the Anthropic demo into a decision the CEO acted on. That’s agency, not luck.',
            cite: 'Azryl A., fractional CMO',
          },
          'That reframe is worth sitting with. The marketing person didn’t just watch the demo. They walked into a room with a CEO, pointed at something, and moved a decision. That’s a different skill from running campaigns.',
          'He continued: marketers were never just doing the craft. They were doing the craft plus working around the people who said no — IT, procurement, legal, the dev team itself. AI removes those gatekeepers. The trait that made marketers annoying to engineering teams is the trait that makes them effective now.',
        ],
      },
      {
        heading: 'The gaps we can’t see',
        blocks: [
          'Then he caught himself on that framing and added a second comment. When you route around the gatekeepers, you also skip what they were catching: security reviews, scope discipline, data-handling questions nobody thought to ask. “We get ahead of the game, and we open gaps we can’t yet see.”',
          'He came in sure he was right. He left less sure. That’s the honest version. He wrote more about it [on Substack ↗](https://azpectopatronum.substack.com/p/ai-didnt-come-for-the-marketers-it).',
        ],
      },
      {
        heading: 'A thinner moat',
        blocks: [
          'The developers got fired because a two-minute demo looked impressive and the CEO didn’t know enough to ask the right questions. The marketing team kept their jobs because nobody in that room was asking the same questions about them. That’s not a win. That’s a different kind of exposure — one that hasn’t arrived yet.',
          'The marketers who will be fine are the ones who understood the job was never just the deliverables. It was knowing what questions to ask, what decision to walk into which room, what to do with the answer. AI handles a lot of the output. It doesn’t yet know who to talk to.',
          'But the gap is closing. And “I know who to talk to” is a much thinner moat than most of us have been pretending.',
        ],
      },
    ],
  },

  {
    href: '/blog/remote-team',
    quote: 'What nobody tells you about managing volunteers is that motivation is the whole job.',
    quoteAfter: 1,
    sections: [
      {
        heading: 'A gap, at sixteen',
        blocks: [
          'I was 16 or 17 when I decided to start a Ukrainian dubbing project for Japanese animation. I didn’t think of it as “team management” at the time. I just saw a gap: after the full-scale invasion, demand for Ukrainian-language content was growing fast, and most anime was still only available dubbed in Russian.',
          'The idea made sense. Starting it was a different story.',
        ],
      },
      {
        heading: 'Thirty people in a week',
        blocks: [
          'Within a week I had assembled a team of around 30 people across voice acting, translation, editing, and production. All remote. All volunteers. People in different countries, different time zones, different microphones — some professional, some recording from kitchen tables.',
          'The work was real. I handled task assignment, progress tracking, quality checks, follow-ups, and the constant shuffling that happens when someone disappears for two weeks because life got in the way. I had one close collaborator who handled a lot of the organisational load with me. Together we kept things moving.',
        ],
      },
      {
        heading: 'Motivation is the whole job',
        blocks: [
          'What nobody tells you about managing volunteers is that motivation is the whole job. When there’s no salary, no contract, and no deadline that actually matters to anyone, people prioritise everything else first — school, work, sleep, stress. You can’t push them. You can only make the project clear enough and meaningful enough that they want to come back.',
          'Sometimes they didn’t. I spent a lot of time finding replacements, redistributing tasks, and figuring out how to keep quality consistent when the team kept shifting.',
        ],
      },
      {
        heading: 'Good idea, wrong structure',
        blocks: [
          'We released three full episodes and several short videos over about six months. For a project with no budget, no studio, and no infrastructure, that was a real result.',
          'But the ceiling was obvious. Good idea, wrong structure. To go further we needed recording equipment, a publishing platform, media partnerships, probably some form of funding. Nobody wanted to invest without knowing if it would ever make money — fair enough. The project had cultural value but not commercial viability in the form it existed.',
        ],
      },
      {
        heading: 'Proof of work',
        blocks: [
          'I later lost most of the materials when the account holding them was hacked. That part still bothers me. When you’re 16 and you’ve built something real with no money and no name, the documentation is the only thing that makes it legible to anyone outside the team. Without it, the project collapses into something that sounds like an exaggeration.',
          'But the work happened. Thirty people showed up. The episodes were made. Someone somewhere watched them in Ukrainian instead of Russian, maybe without knowing how much coordination went into that small thing.',
          'I think about that sometimes — how much of what we build exists only in the memory of people who were there. No archive, no portfolio entry, no metrics. Just the fact that it was real, and some of the people who were part of it still know that.',
          'It’s a strange thing to have your proof of work taken from you before you even knew proof of work was something you’d need.',
        ],
      },
    ],
  },

  {
    href: '/blog/swedish',
    quote: 'Consistency doesn’t always mean doing a lot — sometimes it means doing something small enough that you don’t stop.',
    quoteAfter: 2,
    sections: [
      {
        heading: 'A system for low-energy days',
        blocks: [
          'Learning Swedish while working full-time sounds like a productivity challenge. In reality it’s much messier.',
          'I was studying Swedish at Stockholm University while working, running personal projects, and constantly switching between Ukrainian, Russian, English, and Swedish. Some days Swedish felt exciting. Other days my brain refused to process another grammar rule after a long workday.',
          'What helped wasn’t motivation — that came and went. What helped was a system that survived low-energy days.',
        ],
      },
      {
        heading: 'Speak before you’re ready',
        blocks: [
          'Accepting that Swedish didn’t need to be perfect to be useful made an early difference. I used to avoid speaking because I was afraid of sounding slow. But language doesn’t improve in silence. I started treating small interactions as practice: ordering coffee, reading university emails, listening to people on the bus. Short moments, but they made Swedish feel less like a subject and more like a living language.',
        ],
      },
      {
        heading: 'Active, passive, and ten minutes',
        blocks: [
          'I also separated active learning from passive exposure. Active was classes, homework, grammar, writing. Passive was everything around it: Swedish subtitles, podcasts, supermarket labels, conversations I only partly understood. I used to think passive wasn’t serious enough. Over time it helped me recognize patterns without forcing myself to study when I had nothing left.',
          'Lowering the daily standard helped too. When you work full-time, you can’t always do an hour of language study in the evening. Some days ten minutes is a win. Consistency doesn’t always mean doing a lot — sometimes it means doing something small enough that you don’t stop.',
        ],
      },
      {
        heading: 'When English started to slip',
        blocks: [
          'The hardest part was managing several languages at once. English was necessary for work. Ukrainian and Russian were part of my personal life. Swedish was the language I needed to function in society. But the more Swedish I learned, the more my English started to slip.',
          'Before studying Swedish actively, I felt confident in English — around B2. A few months in, I sometimes felt like I’d dropped to B1. I forgot simple words, mixed Swedish logic into English sentences. Because the two languages are structurally close, my brain started confusing them instead of keeping them separate.',
          'At first it was frustrating. Later I understood it’s a normal part of multilingual learning. Progress isn’t clean. Sometimes one language strengthens while another temporarily gets messier. It doesn’t mean you’re losing everything — it means your brain is reorganizing.',
        ],
      },
      {
        heading: 'What actually helped',
        blocks: [
          'What actually helped wasn’t one perfect method. It was showing up to class, speaking before I felt ready, listening even when I understood only half, and accepting that progress would be slow and uneven.',
          'Eventually Swedish stopped being something I was studying and started being something I was just using.',
        ],
      },
    ],
  },
]

export const getArticle = (href: string) => ARTICLES.find((a) => a.href === href)!
