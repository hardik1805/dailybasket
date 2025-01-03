import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartId: null,
    cartInfo: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        generateCart: (state, action) => {
            state.cartId = action.payload
        },
        addToCart: (state, action) => {
            // state.userInfo = action.payload;
            // state.cartId = action.payload.cartId
        },
    },
});

export const { generateCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
