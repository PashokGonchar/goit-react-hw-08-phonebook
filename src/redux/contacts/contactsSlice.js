import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './operations';

const extraActions = [addContact, deleteContact, fetchContacts];

const getActions = type => {
  return isAnyOf(...extraActions.map(action => action[type]));
};

const fetchContactsReducer = (state, action) => {
  state.items = action.payload;
};

const addContactReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactReducer = (state, action) => {
  state.items = state.items.filter(item => item.id !== action.payload.id);
};

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(addContact.fulfilled, addContactReducer)
      .addCase(deleteContact.fulfilled, deleteContactReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer);
  },
});

export const contactsReducer = contactSlice.reducer;
