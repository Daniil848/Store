import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IRegistretionState {
  logIn : boolean;
  signIn : boolean;
}

const initialState : IRegistretionState = {
  logIn : false,
  signIn : false,
} 

export const registrationSlice = createSlice({
  name : "registration",
  initialState,
  reducers : {
    toggleLogIn(state) {
      state.logIn = !state.logIn;
      console.log(state.logIn);
    },
    toggleSignIn(state) {
      state.signIn = !state.signIn;
    }
  },
  extraReducers: (builder) => {
  }
});

export const {toggleLogIn, toggleSignIn} = registrationSlice.actions;

export default registrationSlice.reducer;