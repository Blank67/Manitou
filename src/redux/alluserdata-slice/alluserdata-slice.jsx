import { createSlice } from "@reduxjs/toolkit";

const rowsDataTest = [
    {
        i: 0,
        id: 1,
        name: "Demo Name 1",
        branch: "India 1",
        lockStatus: "No",
        dept: "Inbound",
        role: "CEO 1",
        action: true,
    },
    {
        i: 1,
        id: 2,
        name: "Demo Name 2",
        branch: "India 2",
        lockStatus: "No",
        dept: "Inbound",
        role: "CEO 2",
        action: false,
    },
    {
        i: 2,
        id: 3,
        name: "Demo Name 3",
        branch: "India 3",
        lockStatus: "No",
        dept: "Outbound",
        role: "CEO 3",
        action: true,
    },
    {
        i: 3,
        id: 4,
        name: "Demo Name 4",
        branch: "India 4",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 4",
        action: true,
    },
    {
        i: 4,
        id: 5,
        name: "Demo Name 5",
        branch: "India 5",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 5",
        action: false,
    },
    {
        i: 5,
        id: 6,
        name: "Demo Name 6",
        branch: "India 6",
        lockStatus: "No",
        dept: "Inbound",
        role: "CEO 6",
        action: false,
    },
    {
        i: 6,
        id: 7,
        name: "Demo Name 7",
        branch: "India 7",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 7",
        action: true,
    },
    {
        i: 7,
        id: 8,
        name: "Demo Name 8",
        branch: "India 8",
        lockStatus: "No",
        dept: "Outbound",
        role: "CEO 8",
        action: true,
    },
    {
        i: 8,
        id: 9,
        name: "Demo Name 9",
        branch: "India 9",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 9",
        action: false,
    },
    {
        i: 9,
        id: 10,
        name: "Demo Name 10",
        branch: "India 10",
        lockStatus: "No",
        dept: "Outbound",
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
