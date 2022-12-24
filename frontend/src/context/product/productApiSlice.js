import { apiSlice } from "../../app/api/apiSlice";

export const getAllProductsApiSlice = apiSlice.injectEndpoints({
    tagTypes: ['Products'],
    endpoints: builder => ({
        getAllProducts: builder.query({
            query: () => '/product/all',
            providesTags: ['Products']
        }),
        addProduct: builder.mutation({
            query: fields => ({
                url: '/product/add',
                method: 'POST',
                body: {...fields}
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const {
    useGetAllProductsQuery,
    useAddProductMutation
} = getAllProductsApiSlice