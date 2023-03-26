import axios from "axios";

const axiosClient = axios.create();

const mapHeaders = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "",
};

axios.interceptors.request.use(
    function (request) {
        request.headers["Content-Type"] = "multipart/form-data";
        return request;
    },
    null,
    { synchronous: true }
);

axios.interceptors.response.use(
    function (response) {
        //Dispatch any action on success
        return response;
    },
    function (error) {
        if (error.response.status === 401) {
            //Add Logic to
            //1. Redirect to login page or
            //2. Request refresh token
        }
        return Promise.reject(error);
    }
);

export async function customAxios(method, url, data, headers) {
    if (headers !== null) {
        mapHeaders.Authorization = headers;
    }

    const response = await axios({
        method: method,
        url: url,
        data: data,
        headers: mapHeaders,
        baseURL: import.meta.env.VITE_REACT_APP_API_URL,
        timeout: 2000,
        withCredentials: true,
    });
    return response;
}

export function downloadRequest(URL, headers) {
    return axios({
        method: "GET",
        url: URL,
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            Authorization: headers,
        },
        baseURL: process.env.VITE_REACT_APP_API_URL,
        timeout: 2000,
        withCredentials: true,
        responseType: "blob",
    });
}

export function postRequest(URL, payload, headers) {
    return customAxios("POST", `/${URL}`, payload, headers);
}

export function getRequest(URL, headers) {
    return customAxios("GET", `/${URL}`, null, headers);
}

export function patchRequest(URL, payload, headers) {
    return customAxios("PATCH", `/${URL}`, payload, headers);
}

export function putRequest(URL, payload, headers) {
    return customAxios("PUT", `/${URL}`, payload, headers);
}

export function deleteRequest(URL, headers) {
    return customAxios("DELETE", `/${URL}`, null, headers);
}
export default axiosClient;