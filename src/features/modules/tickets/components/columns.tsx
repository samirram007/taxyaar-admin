import LongText from '@/components/long-text'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '../../../global/components/data-table/data-table-column-header'
import RowActions from './row-actions'
import type { Request } from '../data/schema'

// temporary mappings (replace with API later)
const typeMap: Record<number, string> = {
    1: 'Feedback',
    2: 'Capital Gain Issue',
    3: 'Payment',
    4: 'ITR Status',
    5: 'Filing Error',
    6: 'PAN / OTP',
    7: 'Tax Calculation',
    8: 'Revised Filing',
    9: 'How To',
    10: 'Notice',
}

const statusMap: Record<number, string> = {
    1: 'OPEN',
    2: 'AWAITING_REPLY',
    3: 'ASSIGNED',
    4: 'IN_PROGRESS',
    5: 'WAITING_CUSTOMER',
    6: 'WAITING_INTERNAL',
    7: 'ON_HOLD',
    8: 'ESCALATED',
    9: 'RESOLVED',
    10: 'CLOSED',
}

const priorityMap: Record<number, string> = {
    1: 'LOW',
    2: 'MEDIUM',
    3: 'HIGH',
}

export const columns: ColumnDef<Request>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: 'ticketId',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Ticket ID' />
        ),
    },

    {
        accessorKey: 'subject',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Subject' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-40'>
                {row.getValue('subject')}
            </LongText>
        ),
    },

    {
        accessorKey: 'typeId',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Type' />
        ),
        cell: ({ row }) => (
            <Badge variant='outline'>
                {typeMap[row.getValue<number>('typeId')] ?? 'N/A'}
            </Badge>
        ),
    },

    {
        accessorKey: 'priorityId',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Priority' />
        ),
        cell: ({ row }) => (
            <Badge>
                {priorityMap[row.getValue<number>('priorityId')] ?? 'N/A'}
            </Badge>
        ),
    },

    {
        accessorKey: 'statusId',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => (
            <Badge variant='secondary'>
                {statusMap[row.getValue<number>('statusId')] ?? 'N/A'}
            </Badge>
        ),
    },

    {
        accessorKey: 'createdAt',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Created' />
        ),
        cell: ({ row }) => {
            const date = row.getValue<string>('createdAt')
            return new Date(date).toLocaleString()
        },
    },

    {
        id: 'actions',
        cell: RowActions,
    },
]