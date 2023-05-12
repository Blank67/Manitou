import { createSlice } from "@reduxjs/toolkit";

const rowsDataTest = [
    {
        id: 1,
        name: "Demo Name 1",
        branch: "India 1",
        lockStatus: "No",
        dept: "Transport 1",
        role: "CEO 1",
        action: true,
    },
    {
        id: 2,
        name: "Demo Name 2",
        branch: "India 2",
        lockStatus: "No",
        dept: "Transport 2",
        role: "CEO 2",
        action: false,
    },
    {
        id: 3,
        name: "Demo Name 3",
        branch: "India 3",
        lockStatus: "No",
        dept: "Transport 3",
        role: "CEO 3",
        action: true,
    },
    {
        id: 4,
        name: "Demo Name 4",
        branch: "India 4",
        lockStatus: "No",
        dept: "Transport 4",
        role: "CEO 4",
        action: true,
    },
    {
        id: 5,
        name: "Demo Name 5",
        branch: "India 5",
        lockStatus: "No",
        dept: "Transport 5",
        role: "CEO 5",
        action: false,
    },
    {
        id: 6,
        name: "Demo Name 6",
        branch: "India 6",
        lockStatus: "No",
        dept: "Transport 6",
        role: "CEO 6",
        action: false,
    },
    {
        id: 7,
        name: "Demo Name 7",
        branch: "India 7",
        lockStatus: "No",
        dept: "Transport 7",
        role: "CEO 7",
        action: true,
    },
    {
        id: 8,
        name: "Demo Name 8",
        branch: "India 8",
        lockStatus: "No",
        dept: "Transport 8",
        role: "CEO 8",
        action: true,
    },
    {
        id: 9,
        name: "Demo Name 9",
        branch: "India 9",
        lockStatus: "No",
        dept: "Transport 9",
        role: "CEO 9",
        action: false,
    },
    {
        id: 10,
        name: "Demo Name 10",
        branch: "India 10",
        lockStatus: "No",
        dept: "Transport 10",
        role: "CEO 10",
        action: true,
    },
];

const initialState = {
    // columnData: [],
    rowData: rowsDataTest,
};

const allUserDataSlice = createSlice({
    name: "alluserdata",
    initialState,
    reducers: {
        setAllUserDataTable(state, action) {
            // state.columnData = action.payload.columnData;
            state.rowData = action.payload.rowData;
        },
        addUser(state, action) {
            state.rowData.push(action.payload.data);
        },
        editUser(state, action) {
            const index = state.rowData.findIndex(
                (itm) => itm.id === action.payload.data.id
            );
            state.rowData[index] = {
                ...state.rowData[index],
                ...action.payload.data,
            };
        },
    },
});

export const { setAllUserDataTable, addUser, editUser } =
    allUserDataSlice.actions;
export default allUserDataSlice.reducer;
