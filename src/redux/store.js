import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsDataSlice';
import { userReducer } from './usersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
