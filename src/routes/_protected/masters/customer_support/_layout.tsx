import TicketStatusProvider from '@/features/modules/ticket_status/contexts/ticket-status-context'
import TicketTypeProvider from '@/features/modules/ticket_type/contexts/ticket-type-context'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/masters/customer_support/_layout',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <TicketStatusProvider>
        <TicketTypeProvider>
          <Outlet />
        </TicketTypeProvider>
      </TicketStatusProvider>

    </>
  )
}
