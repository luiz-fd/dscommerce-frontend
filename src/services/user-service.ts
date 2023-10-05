import { requestBackend } from "../utils/requests";
import { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    url: "users/me",
    withCredentials: true
}

export function findMe() {
    return requestBackend(config);
}
