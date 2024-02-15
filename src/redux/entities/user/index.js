import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { normalizedUsers } from "../../../materials/normalized-mock";
import { getUsers } from "./thunks/getUsers";

const entityAdapter = createEntityAdapter();
export const userSlice = createSlice({
    name: "user",
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) =>
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        }),
});
