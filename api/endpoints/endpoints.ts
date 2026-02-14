export const authEndpoints = {
    GET_SIGNUP: "/signup",
    GET_LOGIN: "/signin",
}
export const accountsEndpoints = {
    GET_ACCOUNT: "/accounts",
    GET_ACCOUNT_NUMBER: "/accounts/:account_number",
    FUND_ACCOUNT: "/accounts/:account_number/fund",
}
export const transferEndpoints = {
    TRANSFER_SINGLE: "/transfers/single",
    TRANSFER_MULTIPLE: "/transfers/multiple-recipients",
    FUND_ACCOUNT: "/accounts/:account_number/fund",
}
export const exchangeRateEndpoints = {
    GET_EXCHANGE_RATES: "/exchange-rates/{base}/{target}",
}