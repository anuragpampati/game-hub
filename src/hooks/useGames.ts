import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Games {
    id: number;
    name: string;
    background_image:string;
  }
interface FetchGameResponse {
    count: number;
    results: Games[];
}
const useGames = ()=>{
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState([]);
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<FetchGameResponse>("/games",{signal:controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError){
                return;
            }
            setError(err.message)});
            return ()=>controller.abort();
        },[]);
    return {games,error};
}
export default useGames;