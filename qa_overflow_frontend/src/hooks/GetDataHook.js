import axios from "axios";
import { useEffect, useState } from "react";

export const APIURL = "http://127.0.0.1:8001/api/";

export const useFetchDataHook = (url) => {
    /*
    HTTP Method: GET
    Input: URL
    Returns: data, isLoading, error
    Description: Makes asynchronous API call using axios to retrieve data.
    */
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            }
            catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return {data, isLoading, error};
}