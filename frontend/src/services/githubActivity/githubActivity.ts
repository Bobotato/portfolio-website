import { apiClient } from '@/services/axiosClient'
import { AxiosError } from 'axios'
import { ZodError } from 'zod'

import { GithubActivitySchema } from '@/schemas/schemas'

async function getGithubActivity() {
  try {
    const response = await apiClient.get('https://github-contributions-api.jogruber.de/v4/bobotato')
    const data = response.data
    GithubActivitySchema.parse(data)
    return data
  } catch (error: any) {
    if (error instanceof ZodError) {
      console.log('Zod Validation Error')
    } else if (error instanceof AxiosError) {
      console.log('Axios Error')
    }
  }
}

export { getGithubActivity }
