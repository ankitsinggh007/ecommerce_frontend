import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddItem=createAsyncThunk(

    'Product/addItem',
    async (productData)=>{
        try {
            const {data}=await axios.post(`api/v1/product/`,productData,
        {withCredentials:true
        });
        return data;
        } catch (error) {
            return error.response.data;
        }
    }
);

export const findProduct=createAsyncThunk(
    'Product/findItem',
    async (Pid)=>{
        try {
            const {data}=await axios.get(`api/v1/product/${Pid}`,
        {withCredentials:true
        });
        return data;
        } catch (error) {
            return error.response.data;
        }

    }
)

export const fetchAllProduct=createAsyncThunk(
    'Product/fetchAllProduct',
    
    async (page)=>{
        try {
            const {data}=await axios.get(`api/v1/product?page=${page}`,
        );
        return data;
        } catch (error) {
            return error.response.data;
        }
    }
)

export const fetchCartDetails=createAsyncThunk(
    'Product/fetchCart',
    async (id)=>{
        try {
            const {data}=await axios.get(`api/v1/product/${id}`,
        );

        return data;
        } catch (error) {
            return error.response.data;
        }
    }
)

export const productDetails=createAsyncThunk(

    'Product/productDetails',

    async(id)=>{
        console.log("hi i am inside slice")
        try {
            const {data}=await axios.get(`/api/v1/product/${id}`,
        );
        console.log(data,"from slice");
        return data;
        } catch (error) {
            return error.response.data;
        }
    }


)





const initialState={
    fetchedProduct:{},
    productDetails:{},
    Cart:{}
}

const productSlice=createSlice({

    name:"Product",
    initialState,
    // reducer:{

    // },
    extraReducers:(builder)=>{
        builder.addCase(AddItem.fulfilled,(state,action)=>{
            state.loading = false;
            state.message = action.payload.message;
        })
        .addCase(AddItem.rejected, (state, action) => {
            state.loading = false;
            state.message = "something went wrong";
          })
          .addCase(AddItem.pending, (state) => {
            state.message = "";
            state.loading = true;
          });


          builder.addCase(findProduct.fulfilled,(state,action)=>{
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = action.payload.message;
            state.fetchedProduct.productDetails = action.payload.response;
        })
        .addCase(findProduct.rejected, (state, action) => {
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = "something went wrong";
          })
          .addCase(findProduct.pending, (state) => {
            state.fetchedProduct.message = "";
            state.fetchedProduct.loading = true;
          });  
        //   fetchAll product
        builder.addCase(fetchAllProduct.fulfilled,(state,action)=>{
            state.fetchedProduct.allProduct = action.payload.response;
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = action.payload.message;
        })
        .addCase(fetchAllProduct.rejected, (state, action) => {
            state.fetchedProduct.loading = false;
            state.fetchedProduct.message = "something went wrong";
          })
          .addCase(fetchAllProduct.pending, (state) => {
            state.fetchedProduct.message = "";
            state.fetchedProduct.loading = true;
          });
        //   fetch produtDetails
        builder.addCase(productDetails.fulfilled,(state,action)=>{
            state.productDetails.product = action.payload.response;
            state.productDetails.loading = false;
            state.productDetails.message = action.payload.message;       
        })
        .addCase(productDetails.rejected,(state,action)=>{
            state.productDetails.loading = false;
            state.productDetails.message = "something went wrong";
        })
        .addCase(productDetails.pending,(state,action)=>{
            state.productDetails.message = "";
            state.productDetails.loading = true;
        })
        // added to Cart
        builder.addCase(fetchCartDetails.fulfilled,(state,action)=>{
            state.Cart.list.push(action.payload.response);
            state.Cart.loading = false;
            state.Cart.message = action.payload.message;       
        })
        .addCase(fetchCartDetails.rejected,(state,action)=>{
            state.Cart.list=[];
            state.Cart.loading = false;
            state.Cart.message = "something went wrong";
        })
        .addCase(fetchCartDetails.pending,(state,action)=>{
            state.Cart.message = "";
            state.Cart.list=[];
            state.Cart.loading = true;
        })
    }


});

export default productSlice.reducer;