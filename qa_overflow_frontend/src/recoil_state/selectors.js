import { selector } from "recoil";
import { questionsData } from "./state";

// import { useFetchDataHook } from "../hooks/GetDataHook";
import axios from "axios";
import { fetchData } from "../APIUtils";

export const APIURL = "http://127.0.0.1:8001/api/";
// const { data:questions, fetchData } = useFetchDataHook();

// Questions selector to fetch data from API
export const fetchQuestionsSelector = selector({
    key: 'fetchQuestionsSelector',
    get: async () => {
        try {
            return await fetchData();
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    set: ({ set }, newValue) => set(questionsData, newValue)
})
// Questions selector to POST data to the API

// Questions selector to PU/PATCH data to the API