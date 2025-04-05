import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import AuthReducer from './slices/authSlice';
import LeApi from './api/leApi';

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    leApi: LeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(LeApi.middleware);
  },
});
setupListeners(store.dispatch) 

export default store;