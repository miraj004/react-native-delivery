import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload.item];
    },
    removeFromBasket: (state, action) => {
      const { id: itemId, restaurantName } = action.payload;

      const index = state.items.findIndex(
        (item) => item._id == itemId && item.restaurantName == restaurantName
      );

      if (index !== -1) {
        const newBasket = [...state.items];
        newBasket.splice(index, 1);
        state.items = newBasket;
      }
    },
    removeAllFromBasket: (state, action) => {
      const { id: itemId, restaurantName } = action.payload;
      state.items = state.items.filter(
        (item) => item._id !== itemId || item.restaurantName !== restaurantName
      );
    },
  },
});

export const { addToBasket, removeFromBasket, removeAllFromBasket } = basketSlice.actions;
export const selectedBasketItems = (state) => state.basket.items;
export const selectedBasketItemsTotalPrice = (state) =>
  state.basket.items.reduce(
    (accumulator, item) => accumulator + Number(item.price),
    0
  );

export default basketSlice.reducer;
