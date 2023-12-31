// Trong file redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const store = configureStore({
   reducer: {
      counter: counterReducer,
      // Các reducers khác nếu có
   },
});

export { store };
