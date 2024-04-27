import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsDataSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
