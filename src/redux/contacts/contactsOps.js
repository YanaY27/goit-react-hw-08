import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6648993d2bb946cf2fa10fff.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  "contacts/Delete",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "contacts/Add",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post("contacts", body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
