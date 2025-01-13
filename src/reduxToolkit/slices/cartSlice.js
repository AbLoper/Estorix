import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cartProducts',
    initialState: [],
    reducers: {
        addToCart: (state) => {
            // state.push({state})
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer