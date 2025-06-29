import { compose, configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import cartReduer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReduer,
  },
});

export default store;
