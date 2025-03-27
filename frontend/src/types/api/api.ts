import type { Contribution } from '@/types/models/models'

interface GetGithubActivityResponse {
  total: number
  contributions: Contribution[]
}

export type { GetGithubActivityResponse }
