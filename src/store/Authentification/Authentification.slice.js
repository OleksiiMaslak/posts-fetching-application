import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

export const autheficationSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        openAccess: (state, action) => state = true,
        closeAccess: (state, action) => state = false
    }

})

export const {actions, reducer} = autheficationSlice

