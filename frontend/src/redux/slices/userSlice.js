import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    _id: null,
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.userInfo = action.payload;
            state._id = action.payload._id
        },
        logout: (state) => {
            state = initialState
        },
    },
});

export const {loginSuccess, logout} = userSlice.actions;
export default userSlice.reducer;
