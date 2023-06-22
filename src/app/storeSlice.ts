import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface IProduct {
  id : number,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string,
  rating : {
    rate : number,
    count : number,
  },
}

export interface IState {
  products : IProduct[],
  categories : string[],
  loading : boolean,
  error : null | string,
};

const initialState : IState = {
  products : [],
  categories : [],
  loading : false,
  error : null,
};

export const getAllProducts = createAsyncThunk<IProduct[], undefined, {rejectValue: string}>(
  "store/getAllProducts",
  async (_,{rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 
    console.log(response.json);
    return response.json();
  }
);

export const getAllCategories = createAsyncThunk<string[], undefined, {rejectValue: string}>(
  "store/getAllCategories",
  async (_,{rejectWithValue}) => {
    const response = await fetch('https://fakestoreapi.com/products/categories');

    if (!response.ok) {
      return rejectWithValue('Server error!');
    } 
    console.log(response.json);
    return response.json();
  }
);



export const storeSlice = createSlice({
  name : "store",
  initialState,
  reducers : {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    })
    .addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    })
  }
});

export default storeSlice.reducer;