import {instance} from "./index";

export interface ApiResult<T> {
    code: number;
    message: string;
    data: T;
}

export async function get<T>(url: string, params?: any): Promise<T> {
    const response = await instance.get<ApiResult<T>>(url, {params});
    return response.data;
}

export async function post<T>(url: string, data?: any): Promise<T> {
    const response = await instance.post<ApiResult<T>>(url, data);
    return  response.data;
}

export async function put<T>(url: string, data?: any): Promise<T> {
    const response = await instance.put<ApiResult<T>>(url, data);
    return response.data;
}

export async function del<T>(url: string, params?: any): Promise<T> {
    const response = await instance.delete<ApiResult<T>>(url, { params });
    return response.data;
}
