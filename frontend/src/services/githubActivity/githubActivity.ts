import { apiClient } from '@/services/axiosClient'
import { AxiosError } from 'axios'
import { ZodError } from 'zod'

import { GithubActivitySchema } from '@/schemas/schemas'

import type { GetGithubActivityResponse } from '@/types/api/api'

async function getGithubActivity(): Promise<GetGithubActivityResponse> {
  try {
    const response = await apiClient.get('https://github-contributions-api.jogruber.de/v4/bobotato')
    const data = response.data
    GithubActivitySchema.parse(data)
    return data
  } catch (error: any) {
    if (error instanceof ZodError) {
      console.log('Zod Error')
      throw new Error('Validation Error')
    } else if (error instanceof AxiosError) {
      console.log('Axios Error')
      throw new Error('Axios Error')
    } else {
      throw new Error('Unexpected error occurred while fetching GitHub activity')
    }
  }
}

export { getGithubActivity }
