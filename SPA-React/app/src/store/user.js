import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('user/signUp', async ({credentials}) => {
    // ASYNC operation

    return credentials;
})

let userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        staus: ''
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
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
        }
    }
});

export const { signIn, logOut} = userSlice.actions;

export default userSlice.reducer;