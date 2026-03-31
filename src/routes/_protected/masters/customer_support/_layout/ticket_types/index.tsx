import { ticketTypeQueryOptions } from '@/features/modules/ticket_type/data/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react';

const TicketType = React.lazy(() => import('@/features/modules/ticket_type'));

export const Route = createFileRoute(
    '/_protected/masters/customer_support/_layout/ticket_types/',
)({
    loader: ({ context }) => context.queryClient.ensureQueryData(ticketTypeQueryOptions()),
    component: () => {

        const { data: ticketType } = useSuspenseQuery(ticketTypeQueryOptions());

        return (
            <Suspense fallback={<Loader className='animate-spin' />}>
                <TicketType data={ticketType.data} />
            </Suspense>
        )
    },
    errorComponent: () => <div>Error loading ticket type data...</div>,
    pendingComponent: () => <Loader className="animate-spin" />,
});

