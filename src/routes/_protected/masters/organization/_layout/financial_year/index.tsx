import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/masters/organization/_layout/financial_year/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_protected/masters/organization/financial_year/"!</div>
  )
}
