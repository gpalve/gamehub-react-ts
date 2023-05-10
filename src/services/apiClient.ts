import axios from "axios";

export interface FetchResponse<T>{
    count:number;
    results:T[];
}
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
       
        key:'90ae3ee20d4f4179884fd509cde4c9f2'
    }
})