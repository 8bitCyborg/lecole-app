import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthType {
  user: any;
  token: string | null;
  isLoggedIn: boolean;
  access_token: string | null;
};

const initialState: AuthType = {
  user: null,
  token: null,
  isLoggedIn: false,
  access_token: null,
};


export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthType>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.access_token = action.payload.access_token;
    },
    resetAuth: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.access_token = null;
    },
  },
});

export const { setAuth, resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;

