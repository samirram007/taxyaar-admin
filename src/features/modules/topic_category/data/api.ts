import { getData, postData, putData } from "@/utils/dataClient"


const API_PATH = "/topic_categories"
export async function fetchTopicCategoryService() {
    return await getData(API_PATH)
}
export async function fetchTopicCategoryByIdService(id: number) {
    return await getData(`${API_PATH}/${id}`)
}

export async function storeTopicCategoryService(payload: any) {
    return await postData(API_PATH, payload)
}
export async function updateTopicCategoryService(payload: any) {
    return await putData(`${API_PATH}/${payload.id}`, payload)
}