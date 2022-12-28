import { apiSlice } from "../../app/api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
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
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const {
    useGetAllProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation
} = productsApiSlice