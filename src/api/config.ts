import axios from "axios";
const apiUrl = import.meta.env.VITE_URL_API_MOVIE;
const token = import.meta.env.VITE_TOKEN_AUTHORIZATION;

export const axiosConfig = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

axiosConfig.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
