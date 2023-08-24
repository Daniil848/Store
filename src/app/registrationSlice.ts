import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IUser {
  id : number,
  email : string,
  username : string,
  password : string,
  name : {
    firstname : string,
    lastname : string,
  },
  address : {
    city : string,
    street : string,
    number : number,
    zipcode : string,
    geolocation : {
      lat : string,
      long : string,
    }
  },
  phone : string,
}

export interface IRegistretionState {
  user : null | IUser,
  allUsers : IUser[],
  logIn : boolean,
  signIn : boolean,
}

const initialState : IRegistretionState = {
  user : null, 
  allUsers : [],
  logIn : false,
  signIn : false,
} 

export const registrationSlice = createSlice({
  name : "registration",
  initialState,
  reducers : {
    toggleLogIn(state) {
      state.logIn = !state.logIn;
    },
    toggleSignIn(state) {
      state.signIn = !state.signIn;
    },
    switchRegistration (state) {
      if (state.logIn && !state.signIn) {
        state.logIn = false;
        state.signIn = true;
      } else if (state.signIn && !state.logIn) {
        state.signIn = false;
        state.logIn = true; 
      }
    },
  },
  extraReducers: (builder) => {
  },
});

export const {toggleLogIn, toggleSignIn, switchRegistration} = registrationSlice.actions;

export default registrationSlice.reducer;