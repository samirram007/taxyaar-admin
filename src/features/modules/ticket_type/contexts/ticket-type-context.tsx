import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { TicketType } from '../data/schema'



type TicketTypeDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface TicketTypeContextType {
    open: TicketTypeDialogType | null
    setOpen: (str: TicketTypeDialogType | null) => void
    currentRow: TicketType | null
    setCurrentRow: React.Dispatch<React.SetStateAction<TicketType | null>>
    keyName: string
}

const TicketTypeContext = React.createContext<TicketTypeContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function TicketTypeProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<TicketTypeDialogType>(null)
    const [currentRow, setCurrentRow] = useState<TicketType | null>(null)


    return (
        <TicketTypeContext value={{ open, setOpen, currentRow, setCurrentRow, keyName: "ticketStatus" }}>
            {children}
        </TicketTypeContext>
    )
}

export const useTicketType = () => {
    const ticketTypeContext = React.useContext(TicketTypeContext)

    if (!ticketTypeContext) {
        throw new Error('useTicketType has to be used within <TicketTypeContext>')
    }

    return ticketTypeContext
}
