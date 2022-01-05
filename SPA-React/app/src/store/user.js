import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';


export const signUp = createAsyncThunk('user/signUp', async ({credentials}) => {
    // ASYNC operation
    let response = await Axios.post(`${apiConfig.domain}/users`,{
        user: credentials
    })


    return response.data.user;
})

export const signIn = createAsyncThunk('user/signIn', async ({credentials}) => {
    // ASYNC operation
    let response = await Axios.post(`${apiConfig.domain}/users/signin`,{
        user: credentials
    })

    return response.data.user;
})

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        staus: ''
    },
    reducers: {
       /*  signIn: (state, action) => {
            state.user = action.payload;
        }, */
        logOut: (state) => {
            state.user = null;
        }
    },
    extraReducers: {
        [signUp.pending]: (state) => {
            state.status = 'loading';
        },
        [signUp.fullfilled]: (state, action) => {
            state.user = action.payload;
        },
        [signUp.rejected]: (state) => {
            state.status = 'failed';
        },
        [signIn.pending]: (state) => {
            state.status = 'loading';
        },
        [signIn.fullfilled]: (state, action) => {
            state.user = action.payload;
        },
        [signIn.rejected]: (state) => {
            state.status = 'failed';
        }
    }
});

export const { logOut} = userSlice.actions;

export default userSlice.reducer;