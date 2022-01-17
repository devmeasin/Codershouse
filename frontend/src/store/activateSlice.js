import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    avatar: ''
}

export const activatedSlice = createSlice({

    name: 'activate',
    initialState,

    reducers: {

        setName: (state, action) => {
            const name = action.payload;
            state.name = name;
        },

        setAvatar: (state, action) => {
            const avatar = action.payload;
            state.avatar = avatar;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setName, setAvatar } = activatedSlice.actions

export default activatedSlice.reducer;