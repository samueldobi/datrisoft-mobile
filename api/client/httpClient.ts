import axios from "axios";

export const httpClient = axios.create({
    baseURL:"https://dev-e-bank-server-ksai.encr.app/api/v1",
    timeout:10000,
});