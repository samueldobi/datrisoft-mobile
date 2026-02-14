export const authEndpoints = {
    SIGN_UP: "/signup",
    SIGN_IN: "/signin",
}
export const accountsEndpoints = {
    BASE: "/accounts",
    BY_ACCOUNT_NUMBER: "/accounts/:account_number",
    FUND: "/accounts/:account_number/fund",
}
export const transferEndpoints = {
    SINGLE: "/transfers/single",
    MULTIPLE: "/transfers/multiple-recipients",
}
export const exchangeRateEndpoints = {
    GET_RATE: "/exchange-rates/{base}/{target}",
}