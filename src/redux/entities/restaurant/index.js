import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/getRestaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder
            // .addCase(getRestaurants.pending, () => {})
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
            }),
    // .addCase(getRestaurants.rejected, () => {}),
});
