import { DataTableRowActions } from "@/features/global/components/data-table/data-table-row-actions"
import { useNavigate } from "@tanstack/react-router"
import type { Row } from "@tanstack/react-table"
// import { useCompany } from "../contexts/company-context"

import { Route as CompanyDetailRoute } from '@/routes/_protected/masters/organization/_layout/company/_layout/$id'
import type { TicketType } from "../data/schema"
import { useTicketType } from "../contexts/ticket-type-context"

interface DataTableRowActionsProps {
    row: Row<TicketType>
}

const RowActions = (props: DataTableRowActionsProps) => {
    const navigate = useNavigate()
    const { setOpen, currentRow, setCurrentRow } = useTicketType()
    const { row } = props
    return (
        <DataTableRowActions<TicketType>
            row={row}
            onEdit={(data) => {
                setCurrentRow(data)
                console.log("row Action: ", currentRow)
                navigate({
                    to: CompanyDetailRoute.to,
                    params: { id: data.id! },
                })

            }}
            onDelete={(data) => {
                setCurrentRow(data)
                setOpen("delete")
            }}
        />
    )
}

export default RowActions