const isProd = Boolean(import.meta.env.PROD)

export const site = {
  url: 'https://devhints.io',
  title: 'Devhints.io cheatsheetsa'
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
  title: `We're on Twitter ♥️`,
  body: [
    `Follow [@devhints](https://twitter.com/devhints) on X/Twitter for daily "today I learned" snippets.`,
    ``,
    `Also: I've started a new blog with some insights on web development. Have a look! [**ricostacruz.com/posts**](https://ricostacruz.com/posts?utm_source=devhints)`
  ].join('\n')
}
