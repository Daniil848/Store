import { createSlice } from "@reduxjs/toolkit";

export interface IState {};

const initialState : IState = {};

export const storeSlice = createSlice({
  name : "store",
  initialState,
  reducers : {}
});