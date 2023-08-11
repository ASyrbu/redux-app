import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '13273ceb26msheb74fe0757fc529p1c7809jsn48483aabcf10'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const creaeRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => creaeRequest('/coins')
        })
    })

});

export const {
    useGetCryptosQuery,
} = cryptoApi;