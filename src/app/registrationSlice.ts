import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IRegistretionState {
  toggleLogIn : boolean;
  toggleSignIn : boolean;
}

const initialState : IRegistretionState = {
  toggleLogIn : false,
  toggleSignIn : false,
} 

export const registrationSlice = createSlice({
  name : "registration",
  initialState,
  reducers : {
  },
  extraReducers: (builder) => {
  }
});

export default registrationSlice.reducer;