import { getData, postData, putData } from "@/utils/dataClient";



const API_PATH = "/ticket_master"
export async function fetchTicketMasterService() {
    return await getData(API_PATH)
}

export async function fetchTicketMasterByIdService(id: any) {
    return await getData(`${API_PATH}/${id}`);
}
export async function storeTicketMasterService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTicketMasterService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}