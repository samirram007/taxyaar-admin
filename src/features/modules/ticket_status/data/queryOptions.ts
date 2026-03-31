import { queryOptions, useMutation } from "@tanstack/react-query";
import { fetchTicketStatusService } from "./api";


const Key = "ticketStatus";
export const ticketStatusQueryOptions = (key: string = Key) => {
    return queryOptions({
        queryKey: [key],
        queryFn: fetchTicketStatusService,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    })
}



export function useTicketStatusMutation() {
    // const queryClient = useQueryClient()

    return useMutation({
        // mutationFn: async (data: DepartmentForm & { id?: number }) => {
        //     if (data.id) {
        //         // Update if id exists
        //         return await updateDepartmentService(data)
        //     }
        //     // Otherwise create
        //     return await storeDepartmentService(data)
        // },
        // onSuccess: () => {
        //     queryClient.invalidateQueries({ queryKey: [Key] })
        // },
        // onError: (error) => {
        //     console.error("Department mutation failed:", error)
        // },
    })
}