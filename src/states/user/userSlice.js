import {createSlice} from "@reduxjs/toolkit";


const initState = {};

const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        deleteUser: (state) => {
            state.user = null;
        }
    },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;