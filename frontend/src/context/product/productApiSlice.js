import { apiSlice } from "../../app/api/apiSlice";

export const getAllProductsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: credentials => ({
                url: '/product/all',
                method: 'GET'
            })
        }),
    })
})

export const {
    useGetAllProductsQuery
} = getAllProductsApiSlice