import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  //! Initial state
  name: "auth",
  initialState: {
    user: null,
  },

  //! Reducers
  reducers: {
    //? login
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    //? logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});

//! generate the acitons

export const { loginAction, logoutAction } = authSlice.actions;
//! export the reducer
const authReducer = authSlice.reducer;
export default authReducer;