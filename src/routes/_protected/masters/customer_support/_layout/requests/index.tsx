import { requestsQueryOptions } from '@/features/modules/tickets/data/queryOptions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
import { Loader } from 'lucide-react';
import React, { Suspense } from 'react';


const RequestPage = React.lazy(() => import('@/features/modules/tickets'))

export const Route = createFileRoute(
    '/_protected/masters/customer_support/_layout/requests/',
)({
    loader: ({ context }) => context.queryClient.ensureQueryData(requestsQueryOptions()),
    component: () => {
        const { data: requests } = useSuspenseQuery(requestsQueryOptions())
        return (
            <Suspense fallback={<Loader className='animate-spin' />}>
                <RequestPage data={requests} />
            </Suspense>
        )
    },
    errorComponent: () => <div>Error Loading requests data...</div>,
    pendingComponent: () => <Loader className='animate-spin' />
});
