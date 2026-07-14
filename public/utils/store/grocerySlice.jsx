import { createSlice } from "@reduxjs/toolkit";
const grocerySlice = createSlice({
  name: "grocery",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //mutating the state
      state.items.push(action.payload);


    },
    clearItems:(state)=>{
      state.items.length =0;
    },
    
  },
});
export const { addItems,clearItems } = grocerySlice.actions;
export default grocerySlice.reducer;
