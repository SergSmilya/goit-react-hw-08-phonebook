import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './contacts/contactsOperation';
import { initialStateCotacts } from './contacts/contactsInitialState';

const handlePending = (state, _) => ({ ...state, isLoading: true });
const handleRejected = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateCotacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        items: payload,
        isLoading: false,
      }))

      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        items: [...state.items, payload],
        isLoading: false,
      }))

      .addCase(deleteContact.fulfilled, (state, { payload }) => ({
        ...state,
        items: [...state.items.filter(contact => contact.id !== payload.id)],
        isLoading: false,
      }))

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export default contactsSlice.reducer;
