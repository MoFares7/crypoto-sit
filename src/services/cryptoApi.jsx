import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
        'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        endpoints: (builder) => ({
                getCryptos: builder.query({
                        query: () => createRequest('/coins')
                })
        })

}); export const {
        useGetCryptosQuery,
        useGetCryptoDetailsQuery,
        useGetExchangesQuery,
        useGetCryptoHistoryQuery,
} = cryptoApi;