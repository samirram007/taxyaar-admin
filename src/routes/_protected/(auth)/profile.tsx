import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/(auth)/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/profile"!</div>
}
