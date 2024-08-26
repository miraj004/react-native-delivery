import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    
  }
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export const selectedRestaurant = (state) => state.restaurant

export default restaurantSlice.reducer;





