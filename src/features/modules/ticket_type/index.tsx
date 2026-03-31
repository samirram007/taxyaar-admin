import { Main } from "@/layouts/components/main";
import { ticketTypeList, type TicketTypeList } from "./data/schema"
import { GridTable } from "./component/grid-table";
import { columns } from "./component/columns";





interface TicketTypeProps {
    data: TicketTypeList;
}


export default function TicketType({ data }: TicketTypeProps) {
    return (
        <>
            <Main className='min-w-full'>

                <div className='mb-2 flex flex-wrap items-center justify-between space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>Ticket Types List</h2>
                        <p className='text-muted-foreground'>
                            Manage your Ticket Type  here.
                        </p>
                    </div>
                    {/* <PrimaryButtons /> */}
                </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12'>
                    <GridTable
                        data={ticketTypeList.parse(data ?? [])}
                        columns={columns} />
                </div>
            </Main>
        </>
    )
}