import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IUser {
  id : number,
  email : string | number,
  username : string | number,
  password : string | number,
};

export interface IRegistretionState {
  user : null | IUser,
  logIn : boolean,
  signIn : boolean,
  loading : boolean,
  errror : null | boolean,
};

const initialState : IRegistretionState = {
  user : null, 
  logIn : false,
  signIn : false,
  loading : false,
  errror : null,
};

export const signIn = createAsyncThunk<IUser, IUser, {rejectValue: string}>(
  'registration/signIn',
  async (payload,{rejectWithValue}) => {
    try {
      const {data} = await axios.post(`http://localhost:3001/users`, payload);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Server error!");
    };
  }
);

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
    builder
    .addCase(signIn.fulfilled,(state, action) => {
      state.user = action.payload;
    })
  },
});

export const {toggleLogIn, toggleSignIn, switchRegistration} = registrationSlice.actions;

export default registrationSlice.reducer;