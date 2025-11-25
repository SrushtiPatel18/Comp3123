import React from "react";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Login from "./Login";
import Library from "./Library";

// ---- AUTH SLICE ----
const authSlice = createSlice({
  name: "auth",
  initialState: { token: null },
  reducers: {
    login: (state) => {
      state.token = "temp-jwt-token";
    },
    logout: (state) => {
      state.token = null;
    }
  }
});

// ---- BOOKS SLICE ----
const booksSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((_, i) => i !== action.payload);
    }
  }
});

// ---- EXPORT ACTIONS ----
export const { login, logout } = authSlice.actions;
export const { addBook, deleteBook } = booksSlice.actions;

// ---- STORE ----
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    books: booksSlice.reducer
  }
});

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Personal Library Manager</h1>
        <Login />
        <Library />
      </div>
    </Provider>
  );
}

export default App;
