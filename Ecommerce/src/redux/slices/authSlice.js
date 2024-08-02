import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    auth : false,
    role : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login(state , action){
            state.auth = true,
            state.role = action.payload
        },
        logout(state,action){
            state.auth = false,
            state.role = null
        }
    }
});

export const { login , logout } = authSlice.actions;

export default authSlice.reducer;