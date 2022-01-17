import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    activated: false,
    user: null,
    otp: {
        phone: '',
        hash: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setOtp: (state, action) => {
            const { phone, hash } = action.payload;
            state.otp.phone = phone;
            state.otp.hash = hash
        },
        setAuth: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            state.isAuth = true;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setOtp, setAuth } = authSlice.actions

export default authSlice.reducer;