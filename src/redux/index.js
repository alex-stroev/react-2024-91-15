import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { userSlice } from "./entities/user";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice, userSlice, dishSlice, reviewSlice),
});

// console.log(JSON.stringify(store.getState(), null, 2));
console.log(store.getState());
