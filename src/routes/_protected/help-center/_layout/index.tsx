import HelpCenter from '@/features/help-center'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/help-center/_layout/')({
    component: HelpCenter,
})


