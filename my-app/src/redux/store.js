import {configureStore} from "@reduxjs/toolkit";
import writesSlice from "./writes/writesSlice";
export const store = configureStore({
    reducer: {
        writes:writesSlice
    },
})