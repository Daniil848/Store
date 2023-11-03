import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
};

export interface IRegistretionState {
  user : null | IUser,
  allUsers : IUser[],
  logIn : boolean,
  signIn : boolean,
  loading : boolean,
  errror : null | boolean,
};

const initialState : IRegistretionState = {
  user : null, 
  allUsers : [],
  logIn : false,
  signIn : false,
  loading : false,
  errror : null,
};

export const getAllUsers = createAsyncThunk<IUser[], undefined, {rejectValue: string}>(
  'registration/getAllUsers',
  async (_,{rejectWithValue}) => {
    try {
      const {data} = await axios.get('https://fakestoreapi.com/users');
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
    .addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.errror = null;
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload;
      state.loading = false;
      state.errror = null;
    })
  },
});

export const {toggleLogIn, toggleSignIn, switchRegistration} = registrationSlice.actions;

export default registrationSlice.reducer;