import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("user");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

const initialState = {
    userData: loadState(),
};

const userDataSlice = createSlice({
    name: "userdata",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            state.userData = action.payload.user;
        },
    },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
