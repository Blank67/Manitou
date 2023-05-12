import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: !!localStorage.getItem("login"),
};

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setLogin(state, action) {
            localStorage.setItem("login", action.payload.status);
            state.isLogin = action.payload.status;
        },
        setLogout(state) {
            localStorage.clear();
            state.isLogin = false;
        },
    },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
