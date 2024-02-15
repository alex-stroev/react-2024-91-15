import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { normalizedDishes } from "../../../materials/normalized-mock";
import { getDishes } from "./thunks/getDishes";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: "dish",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getDishes.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});
