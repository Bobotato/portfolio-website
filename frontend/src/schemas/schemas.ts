import { z } from 'zod'

const ContributionSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD regex
  count: z.number().nonnegative(),
  level: z.number().nonnegative()
})

const TotalContributionSchema = z.record(z.string(), z.number().nonnegative())

const GithubActivitySchema = z.object({
  total: TotalContributionSchema,
  contributions: z.array(ContributionSchema)
})

export { GithubActivitySchema }
