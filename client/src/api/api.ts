import axios, { AxiosResponse } from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 15000
});

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url:string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url,body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url:string) => instance.delete(url).then(responseBody)
}

