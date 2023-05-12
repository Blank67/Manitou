import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/auth-slice";
import userDataReducer from "./userdata-slice/usedata-slice";
import allUserDataReducer from "./alluserdata-slice/alluserdata-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userDataReducer,
        allUser: allUserDataReducer,
    },
});

export default store;
