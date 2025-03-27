import { ref } from 'vue'

import { getGithubActivity } from '@/services/githubActivity/githubActivity'

import type { Ref } from 'vue'

import type {
  Contribution,
  ContributionTransformed,
  GithubActivityData
} from '@/types/models/models'

export function useGithubActivityWidget() {
  const activityData: Ref<any> = ref([])

  function transformActivityData(contributions: Contribution[]): GithubActivityData {
    const data: GithubActivityData = []
    contributions.forEach((contribution: Contribution) => {
      data.push(transformContribution(contribution))
    })
    return data
  }

  function transformContribution(contribution: Contribution): ContributionTransformed {
    return {
      date: contribution.date,
      activities: Array(contribution.count).fill({})
    }
  }

  async function updateActivityData(): Promise<GithubActivityData> {
    const data = await getGithubActivity()
    const activityData = await data.contributions
    return transformActivityData(activityData)
  }

  return { activityData, updateActivityData }
}

//  { "date": "2025-01-01", "count": 0, "level": 0 },

// { date: '2023-04-05', activities: [{}, {}, {}, {}] }
