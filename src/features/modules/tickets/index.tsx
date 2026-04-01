import type { RequestList } from "./data/schema"



interface RequestProps {
    data: RequestList;
}



export default function Requests({ data }: RequestProps) {
    return (
        <>
            <h1>This is the requests page</h1>
        </>
    )
}