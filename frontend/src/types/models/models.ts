interface GithubActivityData extends Array<ContributionTransformed> {}

interface Contribution {
  date: string
  count: number
  level: number
}

interface ContributionTransformed {
  date: string
  activities: Record<string, never>[]
}

export type {
  Contribution,
  ContributionTransformed,
  GithubActivityData
}

//  { "date": "2025-01-01", "count": 0, "level": 0 },

// { date: '2023-04-05', activities: [{}, {}, {}, {}] }
