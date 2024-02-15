import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantMenuById } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk(
    "dish/getDishesByrestaurantId",
    async (restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
        const result = await response.json();
        return result;
    },
    // {
    //     condition: (restaurantId, { getState }) => {
    //         const restaurantDishIds = selectRestaurantMenuById(getState(), restaurantId);
    //         const dishIds = selectDishIds(getState());
    //         return !restaurantDishIds.every((id) => dishIds.includes(id));
    //     },
    // }
);
