import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
    selectIsLoading: (state) => state.isLoading,
    selectIsError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactsThunk.pending,
          addContactsThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactsThunk.rejected,
          addContactsThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          addContactsThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
