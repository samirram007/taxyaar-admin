import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchTopicSectionByIdService, fetchTopicSectionService, storeTopicSectionService, updateTopicSectionService } from "./api"
import type { TopicSectionForm } from "./schema"

const BASE_KEY = "topicSection"

export const TopicSectionQueryOptions = (id?: number) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchTopicSectionByIdService(id) : fetchTopicSectionService(),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}

export function useTopicSectionMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: TopicSectionForm & { id?: number }) => {
            if (data.id) {
                // Update if id exists
                return await updateTopicSectionService(data)
            }
            // Otherwise create
            return await storeTopicSectionService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("TopicSection mutation failed:", error)
        },
    })
}