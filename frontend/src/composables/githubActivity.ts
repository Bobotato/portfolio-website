import { ref } from 'vue'

import { getGithubActivity } from '@/services/githubActivity/githubActivity'

import type { Ref } from 'vue'

import type {
  Contribution,
  ContributionsData,
  ContributionsDataTransformed
} from '@/types/models/models'

export function useGithubActivityWidget() {
  const activityData: Ref<any> = ref([])

  function transformActivityData(data: Contribution[]): ContributionsDataTransformed {
    return data.forEach((contribution: Contribution) => {
      console.log(1)
    })
    // data.forEach((contribution: Contribution) => console.log(contribution))
  }

  async function updateActivityData(): Promise<ContributionsDataTransformed> {
    const data = await getGithubActivity()
    const activityData = await data.contributions
    return transformActivityData(activityData)
  }

  return { activityData, updateActivityData }
}

//  { "date": "2025-01-01", "count": 0, "level": 0 },

// { date: '2023-04-05', activities: [{}, {}, {}, {}] }
