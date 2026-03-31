import { getData, postData, putData } from "@/utils/dataClient";



const API_PATH = "/ticket_types"
export async function fetchTicketTypeService() {
    return await getData(API_PATH)
}

export async function fetchTicketTypeByIdService(id: any) {
    return await getData(`${API_PATH}/${id}`);
}
export async function storeTicketTypeService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTicketTypeService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}