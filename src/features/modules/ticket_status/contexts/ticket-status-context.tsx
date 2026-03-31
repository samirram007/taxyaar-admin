import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { TicketStatus } from '../data/schema'



type TicketStatusDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface TicketStatusContextType {
    open: TicketStatusDialogType | null
    setOpen: (str: TicketStatusDialogType | null) => void
    currentRow: TicketStatus | null
    setCurrentRow: React.Dispatch<React.SetStateAction<TicketStatus | null>>
    keyName: string
}

const TicketStatusContext = React.createContext<TicketStatusContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function TicketStatusProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<TicketStatusDialogType>(null)
    const [currentRow, setCurrentRow] = useState<TicketStatus | null>(null)


    return (
        <TicketStatusContext value={{ open, setOpen, currentRow, setCurrentRow, keyName: "ticketStatus" }}>
            {children}
        </TicketStatusContext>
    )
}

export const useTicketStatus = () => {
    const ticketStatusContext = React.useContext(TicketStatusContext)

    if (!ticketStatusContext) {
        throw new Error('useTicketStatus has to be used within <TicketStatusContext>')
    }

    return ticketStatusContext
}
