import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'products',
    initialState: { products: null},
    reducers: {
        setProducts: (state, action) => {
            const { products } = action.payload
            state.products = products
        },
        clearProducts: (state, action) => {
            state.products = null   
        }

    },
})

export const { setProducts, clearProducts, addNewProduct } = productSlice.actions

export default productSlice.reducer

export const selectCurrentProducts = (state) => state.products.products