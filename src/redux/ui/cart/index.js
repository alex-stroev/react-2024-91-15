import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        increment: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) + 1;
            // console.log(state[productId]);
        },
        decrement: (state, { payload: productId }) => {
            state[productId] = (state[productId] || 0) - 1;

            if (state[productId] <= 0) {
                delete state[productId];
            }
            // console.log(state[productId]);
        },
    },
    selectors: {
        selectProductAmountById: (state, productId) => {
            // Постоянно падает devtools, так что продублирую в консоли
            // console.log(state);
            return state[productId] || 0;
        },
        selectProductsAmount: (state) =>
            Object.values(state).reduce((acc, amount) => {
                return acc + amount;
            }, 0),

        selectCartProductsIds: (state) => Object.keys(state),
    },
});

export const { selectProductAmountById, selectProductsAmount, selectCartProductsIds } = cartSlice.selectors;
export const cartActions = cartSlice.actions;
