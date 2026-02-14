import { httpClient } from "../client/httpClient";
import { authEndpoints, accountsEndpoints, transferEndpoints,exchangeRateEndpoints } from "../endpoints/endpoints";

export interface SignInPayload {
  email: string;
  password: string;
}
export const signup = async ()=>{
    const response = await httpClient.post(authEndpoints.SIGN_UP);
    return response.data
}
export const signin = async (payload:SignInPayload)=>{
    const response = await httpClient.post(
        authEndpoints.SIGN_IN,
        payload
    );
    return response.data
}