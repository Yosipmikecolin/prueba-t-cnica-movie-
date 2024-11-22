import axios from "axios";

const apiUrl = import.meta.env.VITE_URL_API_MOVIE;
const apiUrlSearch = import.meta.env.VITE_URL_SEARCH_API_MOVIE;
const token = import.meta.env.VITE_TOKEN_AUTHORIZATION;

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  });

  instance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
};

export const axiosConfig = createAxiosInstance(apiUrl);
export const axiosConfigSearch = createAxiosInstance(apiUrlSearch);
