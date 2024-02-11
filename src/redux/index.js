import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { userSlice } from "./entities/user";
import { dishSlice } from "./entities/dish";
import { reviewSlice } from "./entities/review";
import { cartSlice } from "./ui/cart";
import { requestSlice } from "./ui/request";

export const store = configureStore({
    reducer: combineSlices(restaurantSlice, userSlice, dishSlice, reviewSlice, cartSlice, requestSlice),
});

// console.log(store.getState());
