

export const navItems = [
  { label: 'Case Studies', to: '/case-studies' },
  {label: 'Notes', to: '/notes' },
  { label: 'Articles', to: '/articles' },
  { label: 'Interviews', to: '/interviews' },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Portfolio', to: 'https:rashedin.dev' },
      {
        label: 'NPM Packages',
        subMenu: [   
          {
            label: 'http-status-toolkit',
            to: 'https://www.npmjs.com/package/http-status-toolkit',
          },
           {
            label: 'express-error-toolkit',
            to: 'https://www.npmjs.com/package/express-error-toolkit',
          },
            { label: 'create-servest', to: 'https://www.npmjs.com/package/create-servest' },
           { label: 'servest', to: 'https://www.npmjs.com/package/servest' },
        ],
      },
    ],
  },
];

export const docsOrder: Record<string, string[]> = {
  caseStudies: [
    '_Introduction',
    'index',
    'why-servest',
    'our-journey',
    '_Reference',
    'cli-reference',
    '_Templates',
  ],
    notes: [
    'index',
  ],
  articles: [
    'index',
    '_Addons',
    'f-fileName',
    'eslint',
    'prettier',
    'eslint-prettier',
    'mongoose',
    'prisma',
    'drizzle',
    'lint-staged',
  ],
  interviews: [
    'index',
  ],
};

export const nestedDocsOrder: Record<string, { label: string; items: string[] }[]> = {
  'case-studies': [
    {
      label: 'Aivinn',
      items: ['overview', 'challenge-system',],
    },
  ],
  notes: [
    {
      label: 'SQL',
      items: ['introduction', 'schema-management'],
    },
  ],
};

export const features = [
  {
    icon: FaBolt,
    title: 'Instant Scaffolding',
    desc: 'Spin up production-ready backend templates within seconds — no setup hassle.',
  },
  {
    icon: FaCubes,
    title: 'Framework Agnostic',
    desc: 'Supports Express — more frameworks like Nest, Fastify, and Django coming soon.',
  },
  {
    icon: FaCodeBranch,
    title: 'Addon-Driven',
    desc: 'Easily add tools like ESLint, Prettier, or Prisma — just like shadcn for backend utilities.',
  },
  {
    icon: FaMagic,
    title: 'Developer Experience First',
    desc: 'Built for simplicity, consistency, and scalability — inspired by create-vite’s speed.',
  },
  {
    icon: FaRocket,
    title: 'Fast Prototyping',
    desc: 'Get your backend project running in minutes and iterate rapidly without friction.',
  },
  {
    icon: FaServer,
    title: 'Production Ready',
    desc: 'All templates follow best practices and include essential tooling to deploy safely.',
  },
];

export const steps = [
  {
    icon: FaTerminal,
    title: 'Create',
    desc: 'Create a backend project immediately with your framework of choice.',
    code: 'npm create servest@latest',
  },
  {
    icon: FaPlug,
    title: 'Add',
    desc: 'Add tools like ESLint, Mongoose, or Prisma using a single command.',
    code: 'npx servest@latest add mongoose',
  },
  {
    icon: FaLaptopCode,
    title: 'Build',
    desc: 'Start coding your backend with zero setup — everything’s ready.',
    code: 'npm run start',
  },
];


