const isProd = Boolean(import.meta.env.PROD)

export const site = {
  url: 'https://capu.dev',
  title: 'capu.dev cheatsheets'
} as const

export const etc = {
  advertisedSheetCount: 357
} as const

export const github = {
  repositoryUrl: 'https://github.com/gcapu/cheatsheets-1',
  branch: 'master'
} as const

export const urls = {
  newCheatsheetUrl: 'https://github.com/rstacruz/cheatsheets/issues/907'
} as const

export const categories = [
  'Analytics',
  'Ansible',
  'Apps',
  'C-like',
  'CLI',
  'CSS',
  'Databases',
  'Devops',
  'Elixir',
  'Git',
  'HTML',
  'Java & JVM',
  'JavaScript',
  'JavaScript libraries',
  'Jekyll',
  'Ledger',
  'Markup',
  'macOS',
  'Node.js',
  'PHP',
  'Python',
  'Rails',
  'React',
  'Ruby',
  'Ruby libraries',
  'Vim',
  'Fitness',
  'Others'
]

export const announcement = {
  id: '2023-12-14',
  title: `We're on not Twitter ♥️`,
  body: [
    `Follow [@devhints](https://twitter.com/devhints) on X/Twitter. This website is based on devhints.io.`,
    ``,
    `Also check his blog [**ricostacruz.com/posts**](https://ricostacruz.com/posts?utm_source=devhints)`
  ].join('\n')
}
