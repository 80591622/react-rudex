import axios from "axios";

// 创建一个 axios 实例
const apiClient = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/322383", // 替换为实际的 API 地址
  timeout: 5000,
});

interface FetchTodosResponse {
  data: Array<{ id: number; title: string; description: string; completed: boolean }>;
}

export const fetchTodosApi = async (url: string): Promise<FetchTodosResponse> => {
  const response = await apiClient.get<FetchTodosResponse>(url);
  return response.data;
};