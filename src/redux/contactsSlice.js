import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts/contactsOperation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {})
      .addCase(fetchContacts.fulfilled, (state, action) => action.payload)
      .addCase(addContact.fulfilled, (state, action) => [
        ...state,
        action.payload,
      ])
      .addCase(deleteContact.fulfilled, (state, action) => [
        ...state.filter(contact => contact.id !== action.payload.id),
      ]);
  },
});

export default contactsSlice.reducer;
