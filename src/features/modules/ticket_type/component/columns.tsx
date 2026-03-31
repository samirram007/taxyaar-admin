import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '../../../global/components/data-table/data-table-column-header'
import RowActions from './row-actions'
import type { TicketType } from '../data/schema'

export const columns: ColumnDef<TicketType>[] = [
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
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Name' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-40'>
                {row.getValue('name')}
            </LongText>
        ),
    },
    {
        accessorKey: 'code',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Code' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-40'>
                {row.getValue('name')}
            </LongText>
        ),
    },
    {
        accessorKey: 'status',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-40'>
                {row.getValue('name')}
            </LongText>
        ),
    },
    {
        accessorKey: 'description',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Description' />
        ),
        cell: ({ row }) => (
            <LongText className='max-w-40'>
                {row.getValue('name')}
            </LongText>
        ),
    },

    {
        id: 'actions',
        cell: RowActions,
    },
]