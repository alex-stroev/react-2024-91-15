import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";

export const getDishes = createAsyncThunk(
    "restaurant/getDishes",
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        const result = await response.json();
        return result;
    }
    // { condition: (_, { getState }) => !selectDishIds(getState())?.length }
);
