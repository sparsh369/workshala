import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Auth/authReducer";
const store = configureStore({
    reducer:{
        auth: rootReducer,
    }
});
export { store};