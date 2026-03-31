import useDialogState from '@/core/hooks/use-dialog-state'
import React, { useState } from 'react'
import type { Request } from '../data/schema'



type RequestDialogType = 'invite' | 'add' | 'edit' | 'delete'

interface RequestContextType {
    open: RequestDialogType | null
    setOpen: (str: RequestDialogType | null) => void
    currentRow: Request | null
    setCurrentRow: React.Dispatch<React.SetStateAction<Request | null>>
    keyName: string
}

const RequestContext = React.createContext<RequestContextType | null>(null)

interface Props {
    children: React.ReactNode
}

export default function RequestProvider({ children }: Props) {
    const [open, setOpen] = useDialogState<RequestDialogType>(null)
    const [currentRow, setCurrentRow] = useState<Request | null>(null)


    return (
        <RequestContext value={{ open, setOpen, currentRow, setCurrentRow, keyName: "company" }}>
            {children}
        </RequestContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useRequest = () => {
    const ticketContext = React.useContext(RequestContext)

    if (!ticketContext) {
        throw new Error('useRequest has to be used within <RequestContext>')
    }

    return ticketContext
}
