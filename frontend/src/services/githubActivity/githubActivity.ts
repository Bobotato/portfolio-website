import { apiClient } from '@/services/axiosClient'
import { AxiosError } from 'axios'

async function getGithubActivity() {
  try {
    const data = await apiClient.get('https://api.github.com/users/bobotato/events/public')
    return data
  } catch (error) {
    console.error(error)
  }
}

export { getGithubActivity }
