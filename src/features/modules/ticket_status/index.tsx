import { Main } from "@/layouts/components/main";
import { ticketStatusList, type TicketStatusList } from "./data/schema"
import { GridTable } from "./component/grid-table";
import { columns } from "./component/columns";





interface TicketStatusProps {
    data: TicketStatusList;
}


export default function TicketStatus({ data }: TicketStatusProps) {
    return (
        <>
            <Main className='min-w-full'>

                <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Ticket Status List</h2>
                        <p className='text-muted-foreground'>
                            Manage your Ticket Status  here.
                        </p>
                    </div>
                    {/* <PrimaryButtons /> */}
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <GridTable
                        data={ticketStatusList.parse(data ?? [])}
                        columns={columns} />
                </div>
            </Main>
        </>
    )
}