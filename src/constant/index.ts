

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
    '_Templates',
  ],
    notes: [
    'index',
  ],
  articles: [
    'index',
    '_Addons',
    'f-fileName',
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



