import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
      state.user=action.payload;
    },
    logout: (state) => {
      state.user=null;
    }
  },
});

export const {login,logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
