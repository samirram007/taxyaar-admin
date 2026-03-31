import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTicketMasterService } from "./api";


const Key = "ticketMaster";
export const requestsQueryOptions = (key: string = Key) => {
    return queryOptions({
        queryKey: [key],
        queryFn: fetchTicketMasterService,
        staleTime: 1000 * 60 * 5,
        retry: 1,
    })
}



export function useDepartmentMutation() {
    const queryClient = useQueryClient()

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