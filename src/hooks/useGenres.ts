
import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/apiClient';

import genres from '../data/genres';

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

const apiClient = new ApiClient<Genre>('/genre')

// const useGenres = () => ({data:genres,isLoading:false,error:null})
const useGenres = () => useQuery({
    queryKey:['genres'],
    queryFn:apiClient.getAll,
    staleTime: 24*60*60*1000,
    initialData : {count:genres.length,results:genres}
})

export default useGenres


