import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartId: null,
    cartInfo: {
        uid: "",
        cartID: "",
        items: []
    },
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartToUser: (state, action) => {
            state.cartInfo = {
                ...state.cartInfo,
                uid: action.payload
            }
        },
        generateCart: (state, action) => {
            state.cartId = action.payload
        },
        addToCart: (state, action) => {
            const { uid, cartID, items } = action.payload;
            let existingCart = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).cart)
            let cloneCart = { ...existingCart.cartInfo };
            cloneCart.uid = uid;
            cloneCart.cartID = cartID;
            if (cloneCart.items.length) {
                if (cloneCart.items.some(_ => _.productId === items.productId)) {
                    cloneCart.items = cloneCart.items.map((item) => {
                        if (item.productId === items.productId) {
                            Object.assign(item, { qty: Number(item.qty) + Number(items.qty) })
                            return item
                        } else {
                            return item
                        }
                    })
                } else {
                    cloneCart.items = [...cloneCart.items, items];
                }
            } else {
                cloneCart.items = [...cloneCart.items, items];
            }
            state.cartInfo = cloneCart;
        },
        removeCart: (state, action) => {
            state.cartId = null;
            state.cartInfo = {
                uid: "",
                cartID: "",
                items: []
            }
        },
        updateItemQty: (state, action) => {
            const { qty, pid } = action.payload;
            let existingCart = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).cart)
            let cloneCart = { ...existingCart.cartInfo };
            cloneCart.items = cloneCart.items.map((item) => {
                if (item.productId === pid) {
                    Object.assign(item, { qty: Number(qty) })
                    return item
                } else {
                    return item
                }
            })
            state.cartInfo = cloneCart;
        },
        removeItem: (state, action) => {
            let existingCart = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).cart)
            let cloneCart = { ...existingCart.cartInfo };
            cloneCart.items = cloneCart.items.filter((item) => item.productId !== action.payload)
            state.cartInfo = cloneCart;
        },
    },
});

export const { generateCart, addToCart, setCartToUser, removeCart, updateItemQty,removeItem } = cartSlice.actions;
export default cartSlice.reducer;
