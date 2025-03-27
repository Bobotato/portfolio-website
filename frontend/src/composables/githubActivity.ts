import { ref } from 'vue'

import { getGithubActivity } from '@/services/githubActivity/githubActivity'

import type { Ref } from 'vue'

export function useGithubActivityWidget() {
    const activityData: Ref<any> = ref(null)

    async function updateActivityData() {
        activityData.value = await getGithubActivity()
        return activityData
    }

    return { activityData, updateActivityData }
}