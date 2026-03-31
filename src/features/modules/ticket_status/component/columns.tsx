import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
import type { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '../../../global/components/data-table/data-table-column-header'
import RowActions from './row-actions'
import type { TicketStatus } from '../data/schema'

export const columns: ColumnDef<TicketStatus>[] = [
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
    },

    {
        accessorKey: 'isActive',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Active' />
        ),
        cell: ({ row }) => (
            <Badge variant={row.getValue<boolean>('isActive') ? 'default' : 'secondary'}>
                {row.getValue<boolean>('isActive') ? 'Active' : 'Inactive'}
            </Badge>
        ),
    },

    {
        accessorKey: 'isPublic',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Public' />
        ),
        cell: ({ row }) => (
            <Badge variant={row.getValue<boolean>('isPublic') ? 'default' : 'outline'}>
                {row.getValue<boolean>('isPublic') ? 'Public' : 'Private'}
            </Badge>
        ),
    },

    {
        accessorKey: 'colorCode',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Color' />
        ),
        cell: ({ row }) => {
            const color = row.getValue<string | null>('colorCode')
            return color ? (
                <div className="flex items-center gap-2">
                    <span
                        className="h-3 w-3 rounded-full border"
                        style={{ backgroundColor: color }}
                    />
                    <span>{color}</span>
                </div>
            ) : (
                'N/A'
            )
        },
    },

    {
        accessorKey: 'displayOrder',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title='Order' />
        ),
    },

    {
        id: 'actions',
        cell: RowActions,
    },
]