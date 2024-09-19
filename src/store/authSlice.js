import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            console.log("state....",state.status)
            state.status = true;
            console.log("state22....",state.status)

            state.userData = action.payload.userData
        },
        logout:(state)=>{
            sessionStorage.clear()
            state.status = false,

            state.userData = null
        }
    }
}
)

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;