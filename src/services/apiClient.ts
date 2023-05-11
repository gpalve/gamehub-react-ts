import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count:number;
    next:number;
    results:T[];
}
const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
       
        key:'90ae3ee20d4f4179884fd509cde4c9f2'
    }
})

class ApiClient<T> {
    endpoint:string
    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = (config:AxiosRequestConfig) => {
     return axiosInstance
            .get<FetchResponse<T>>(this.endpoint,config)
            .then(res => res.data)
    }
}

export default ApiClient;