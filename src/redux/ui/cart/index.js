import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        increment: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) + 1;
        },
        decrement: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) - 1;

            if (state[productId] <= 0) {
                delete state[productId];
            }
        },
    },
    selectors: {
        selectProductAmountById: (state, productId) => {
            return state[productId] || 0;
        },
    },
});

export const { selectProductAmountById } = cartSlice.selectors;
export const cartActions = cartSlice.actions;
