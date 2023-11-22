import { configureStore } from "@reduxjs/toolkit";

import scoreReducer from "./scoreSlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        score: scoreReducer,
        auth: authReducer,
    },
});

export default store;