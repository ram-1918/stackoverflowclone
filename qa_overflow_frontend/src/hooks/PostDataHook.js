import axios from "axios";
import { useEffect, useState } from "react";

export const APIURL = "http://127.0.0.1:8001/api/";

export const usePostDataHook = (url) => {
    /*
    HTTP Method: POST
    Input: URL
    Returns: data, isLoading, error
    Description: Makes asynchronous API call using axios to retrieve data.
    */
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const postData = async (url, newdata) => {
        try {
            const response = await axios.post(url, newdata);
            setData(response.data);
            setIsLoading(false);
        }
        catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    return {data, isLoading, error, postData};
}