import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    _id: null,
    userInfo: null,
    verificationEmail: null
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
        setEmailForVerification: (state, action) => {
            state.verificationEmail = action.payload;
        },
    },
});

export const { loginSuccess, logout, setEmailForVerification } = userSlice.actions;
export default userSlice.reducer;
