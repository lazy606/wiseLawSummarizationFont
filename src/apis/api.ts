import {instance} from "./index.ts";
import {OutputMethodItem} from "../classes";

// function get<T>(url: string, data?: any): T | void {
//     instance.get<T>(url, data)
//         .then(data => {
//             return data.data;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

async function post<T>(url: string, data?: any): Promise<T> {
    const response = await instance.post<T>(url, data);
    return response.data;
}

// function put<T>(url: string, data?: any): T | void {
//     instance.put<T>(url, data)
//         .then(data => {
//             return data.data;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }
//
// function del<T>(url: string, data?: any): T | void {
//     instance.delete<T>(url, data)
//         .then(data => {
//             return data.data;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

export async function getCause(content: string): Promise<OutputMethodItem> {
    return post<OutputMethodItem>('/cause', {content: content});
}

export async function getFact(content: string): Promise<OutputMethodItem> {
    return post<OutputMethodItem>('/fact', {content: content});
}

export async function getLaws(content: string): Promise<OutputMethodItem> {
    return post<OutputMethodItem>('/laws', {content: content});
}

