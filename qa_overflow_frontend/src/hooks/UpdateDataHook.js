import axios from "axios";
import { useState } from "react";

export const APIURL = "http://127.0.0.1:8001/api/";

export const useUpdateDataHook = () => {
    /*
    HTTP Method: PUT, PATCH
    Input: URL
    Returns: data, isLoading, error
    Description: Makes asynchronous API call using axios to retrieve data.
    */
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateData = async (url, newdata) => {
        try {
            const response = await axios.patch(url, newdata);
            setData(response.data);
            setIsLoading(false);
        }
        catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };

    return {data, isLoading, error, updateData};
}