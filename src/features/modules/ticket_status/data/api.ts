import { getData, postData, putData } from "@/utils/dataClient";



const API_PATH = "/ticket_statuses"
export async function fetchTicketStatusService() {
    return await getData(API_PATH)
}

export async function fetchTicketStatusByIdService(id: any) {
    return await getData(`${API_PATH}/${id}`);
}
export async function storeTicketStatusService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTicketStatusService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}