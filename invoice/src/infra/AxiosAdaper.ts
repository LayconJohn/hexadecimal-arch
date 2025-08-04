import HttpClient from "../application/HttpClient";
import axios from "axios";

export default class AxiosAdapter implements HttpClient {
    async get(url: string): Promise<any> {
        const response = axios.get(url)
        return response.data; 
    }
    async post(url: string, body: any): Promise<any> {
        const response = axios.post(url, body)
        return response.data; 
    }
}