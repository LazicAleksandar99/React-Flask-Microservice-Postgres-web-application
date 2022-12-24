import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product',
    initialState: { products: []},
    reducers: {
        setProducts: (state, action) => {
            //const { products } = action.payload
            state.products = state.products.concat(action.payload)
        },
        clearProducts: (state) => {
            state.products = []
        }
    },
})

export const { setProducts, clearProducts} = productSlice.actions

export default productSlice.reducer

export const selectCurrentProducts = (state) => state.product.products
