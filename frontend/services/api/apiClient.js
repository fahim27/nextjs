import axios from "axios";
import { cookies } from 'next/headers/client';

const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("auth_token");
  
  config.headers.Authorization = `Bearer d6|V41JJ9Sj9vP10FmSNc4hLodsr3vQlGl4uvMSqfRM5647f519`;
  // if(token){
  // }
  return config;
});

export default apiClient;
