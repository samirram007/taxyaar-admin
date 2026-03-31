import { ticketStatusQueryOptions } from '@/features/modules/ticket_status/data/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react'

const TicketStatus = React.lazy(() => import('@/features/modules/ticket_status'));

export const Route = createFileRoute(
    '/_protected/masters/customer_support/_layout/ticket_statuses/',
)({
    loader: ({ context }) => context.queryClient.ensureQueryData(ticketStatusQueryOptions()),
    component: () => {
        const { data: ticketStatus } = useSuspenseQuery(ticketStatusQueryOptions());
        return (
            <Suspense fallback={<Loader className='animate-spin' />}>
                <TicketStatus data={ticketStatus.data} />
            </Suspense>
        )
    },
});