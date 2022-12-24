import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    prepareHeaders: (headers, { getState }) => {
        headers.set('Content-Type', 'application/json')
        //headers.set("Accept", "application/json");
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryIfExpiredToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryIfExpiredToken,
    endpoints: builder => ({})
})