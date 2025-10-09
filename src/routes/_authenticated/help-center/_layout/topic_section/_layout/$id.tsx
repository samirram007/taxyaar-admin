
import { TopicSectionQueryOptions } from '@/features/modules/topic_section/data/queryOptions'

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react'
import React, { Suspense } from 'react'
import z from 'zod'

const TopicSectionDetails = React.lazy(() =>
  import('@/features/modules/topic_section/details')
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
  '/_authenticated/help-center/_layout/topic_section/_layout/$id',
)({
  params: {
    parse: (params) => paramsSchema.parse(params),
    stringify: ({ id }) => ({ id: `${id}` }),
  },
  loader: ({ context, params: { id }, params }) => {
    console.log("🚀 Loader params:", id, params, typeof params)
    if (id === "new") return null
    return context.queryClient.ensureQueryData(TopicSectionQueryOptions(id))
  },
  component: () => {
    // const { data: topicSection } = useSuspenseQuery(TopicSectionQueryOptions())
    const { id } = Route.useParams()
    if (id === "new") return <TopicSectionDetails />

    const { data: topicSection } = useSuspenseQuery(TopicSectionQueryOptions(id))
    return (
      <Suspense fallback={<Loader className="animate-spin" />}>

        <TopicSectionDetails data={topicSection?.data} />
      </Suspense>
    )
  },
  errorComponent: () => <div>Error loading topicsection data...</div>,
  pendingComponent: () => <Loader className="animate-spin" />,
})


