import { apiClient } from '@/services/axiosClient'
import { AxiosError } from 'axios'

async function getGithubActivity() {
  try {
    const data = await apiClient.get('https://github-contributions-api.jogruber.de/v4/bobotato')
    return data
  } catch (error) {
    console.error(error)
  }
}

export { getGithubActivity }
