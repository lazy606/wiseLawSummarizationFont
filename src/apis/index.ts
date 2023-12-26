import axios, {AxiosInstance, AxiosRequestConfig} from "axios";


const instance: AxiosInstance = axios.create({
    baseURL: "https://localhost",
    timeout: 5000
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error)
    },
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error)
    },
);


const instanceProd: AxiosInstance = axios.create({
    baseURL: "https://localhost:8888",
    timeout: 5000
});

instanceProd.interceptors.request.use(
    (config) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error)
    },
);

instanceProd.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error)
    },
);

export {instance, instanceProd};

