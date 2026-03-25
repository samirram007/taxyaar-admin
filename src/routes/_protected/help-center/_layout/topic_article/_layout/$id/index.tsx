
import { TopicArticleQueryOptions } from '@/features/modules/topic_article/data/queryOptions'

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import z from 'zod'

const TopicArticleDetails = React.lazy(() =>
  import('@/features/modules/topic_article/details')
)
const paramsSchema = z.object({
  id: z.union([
    z.literal("new"),
    z.coerce.number().refine((n) => !Number.isNaN(n), {
      message: "Invalid number",
    }),
  ]),
})
export const Route = createFileRoute(
  '/_protected/help-center/_layout/topic_article/_layout/$id/',
)({
  params: {
    parse: (params) => paramsSchema.parse(params),
    stringify: ({ id }) => ({ id: `${id}` }),
  },
  loader: ({ context, params: { id }, params }) => {
    console.log("🚀 Loader params:", id, params, typeof params)
    if (id === "new") return null
    return context.queryClient.ensureQueryData(TopicArticleQueryOptions(id))
  },
  component: () => {
    // const { data: topicArticle } = useSuspenseQuery(TopicArticleQueryOptions())
    const { id } = Route.useParams()
    if (id === "new") return <TopicArticleDetails />

    const { data: topicArticle } = useSuspenseQuery(TopicArticleQueryOptions(id))
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicArticleDetails data={topicArticle?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topicarticle data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


