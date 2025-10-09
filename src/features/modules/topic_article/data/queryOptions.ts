import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchTopicArticleByIdService, fetchTopicArticleService, storeTopicArticleService, updateTopicArticleService } from "./api"
import type { TopicArticleForm } from "./schema"

const BASE_KEY = "topicArticle"

export const TopicArticleQueryOptions = (id?: number) => {

    return queryOptions({
        queryKey: id ? [BASE_KEY, id] : [BASE_KEY],
        queryFn: () =>
            id ? fetchTopicArticleByIdService(id) : fetchTopicArticleService(),
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
    })
}

export function useTopicArticleMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data: TopicArticleForm & { id?: number }) => {
            if (data.id) {
                // Update if id exists
                return await updateTopicArticleService(data)
            }
            // Otherwise create
            return await storeTopicArticleService(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [BASE_KEY] })
        },
        onError: (error) => {
            console.error("TopicArticle mutation failed:", error)
        },
    })
}