import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./comment/reducer";

const store = configureStore({
    reducer: {
        comments : commentReducer
    }
});

export default store;