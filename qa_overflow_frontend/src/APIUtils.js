export const APIURL = "http://127.0.0.1:8001/api/";

export const fetchData = async () => {
    try {
        const response = await fetch(`${APIURL}questions`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
