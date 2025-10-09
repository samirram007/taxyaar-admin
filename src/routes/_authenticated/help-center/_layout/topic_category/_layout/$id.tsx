
import { TopicCategoryQueryOptions } from '@/features/modules/topic_category/data/queryOptions'

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import z from 'zod'

const TopicCategoryDetails = React.lazy(() =>
  import('@/features/modules/topic_category/details')
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
  '/_authenticated/help-center/_layout/topic_category/_layout/$id',
)({
  params: {
    parse: (params) => paramsSchema.parse(params),
    stringify: ({ id }) => ({ id: `${id}` }),
  },
  loader: ({ context, params: { id }, params }) => {
    console.log("🚀 Loader params:", id, params, typeof params)
    if (id === "new") return null
    return context.queryClient.ensureQueryData(TopicCategoryQueryOptions(id))
  },
  component: () => {
    // const { data: topicCategory } = useSuspenseQuery(TopicCategoryQueryOptions())
    const { id } = Route.useParams()
    if (id === "new") return <TopicCategoryDetails />

    const { data: topicCategory } = useSuspenseQuery(TopicCategoryQueryOptions(id))
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicCategoryDetails data={topicCategory?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topiccategory data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


