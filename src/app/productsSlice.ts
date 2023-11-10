import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IProduct {
  id : number,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string | null,
  rating : {
    rate : number,
    count : number,
  },
}

export interface IState {
  products : IProduct[],
  product : null | IProduct,
  productId : number | null,
  categories : string[],
  category : null | string,
  viewedProducts : IProduct[],
  modal : boolean,
  loading : boolean,
  error : null | string,
};

const initialState : IState = {
  products : [],
  product : null,
  productId : null,
  categories : [],
  category : null,
  viewedProducts : [],
  modal : false,
  loading : false,
  error : null,
};

export const getAllProducts = createAsyncThunk<IProduct[], undefined, {rejectValue: string}>(
  "store/getAllProducts",
  async (_,{rejectWithValue}) => {
    try {
      const {data} = await axios.get('http://localhost:3001/products');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Server error!");
    };
  }
);

export const getSingleProduct = createAsyncThunk<IProduct, number | string, {rejectValue: string}>(
  "store/getSingleProduct",
  async (id : number | string,{rejectWithValue}) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/products/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Server error!");
    };
  }
);

export const getAllCategories = createAsyncThunk<string[], undefined, {rejectValue: string}>(
  "store/getAllCategories",
  async (_,{rejectWithValue}) => {
    try {
      const {data} = await axios.get('http://localhost:3001/categories');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Server error!");
    };
  }
);

export const getSpecificCategory = createAsyncThunk<IProduct[], string, {rejectValue: string}>(
  "store/getSpecificCategory",
  async (category : string,{rejectWithValue}) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/products`);
      const filteredData = data.filter((product: { category: string; }) => product.category === category);
      return filteredData;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Server error!");
    };
  }
);


export const productsSlice = createSlice({
  name : "products",
  initialState,
  reducers : {
    setCategory(state, action) {
      state.category = action.payload.category;
    },
    resetFilter(state) {
      if (state.category !== null) {
        state.category = null;
      } 
    },
    toggleModal(state) {
      state.modal = !state.modal;
    },
    getProductId(state, action) {
      state.productId = action.payload;
    },
    recentlyViewed(state, action) {
      const existingProductIndex = state.viewedProducts.findIndex((product) => product.id === action.payload.id);
      
      if (existingProductIndex !== -1) {
        state.viewedProducts.splice(existingProductIndex, 1);
      }
      
      state.viewedProducts.unshift(action.payload);
    },
  },
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
    .addCase(getSpecificCategory.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(getSingleProduct.pending, (state) => {
      state.loading = true;
    })
    .addCase(getSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    })
  }
});

export const {setCategory, resetFilter, toggleModal, getProductId, recentlyViewed} = productsSlice.actions;

export default productsSlice.reducer;