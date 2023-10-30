import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call -createAsyncThunk
export const fetchResturents = createAsyncThunk('restuarantList/fetchResturents',()=>
{
    // api call
   return axios.get('/restaurants.json').then(response=>response.data.restaurants)

})

const restuarantSlice = createSlice({
    name:'restuarantList',
    initialState:{
        loading:false,
        allRestaurants:[],
        allRestaurentContainer:[],
        error:''
    },

    reducers:{
        searchRestaurent:(state,action)=>{
            state.allRestaurants = state.allRestaurentContainer.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchResturents.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchResturents.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurants = action.payload
            state.allRestaurentContainer = action.payload
            state.error = ""
        })
        builder.addCase(fetchResturents.rejected,(state,action)=>{
            state.loading=false
            state.allRestaurants = []
            state.error=action.error.message
        })
    }
})

export const {searchRestaurent}= restuarantSlice.actions
export default restuarantSlice.reducer