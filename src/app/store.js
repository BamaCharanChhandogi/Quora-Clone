import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import questionReducer from '../features/counter/questionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer
  },
});