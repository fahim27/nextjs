import { API_ENDPOINT } from "@/lib/constants/endpoints";
import apiClient from "../apiClient";
import { requestExceptionHandler } from "@/lib/helper/helper";

export async function getPosts() {
  try {
    const res = await apiClient.get(API_ENDPOINT.post);
    if (res.data.success) {
      return res.data.posts;
    } else {
      return [];
    }
  } catch (error) {
    requestExceptionHandler(error);
  }
}
