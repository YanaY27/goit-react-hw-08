import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { selectIsRefreshing } from "./redux/auth/slice";
import { refreshThunk } from "./redux/auth/operations";
import RefreshLoader from "./components/RefreshLoader/RefreshLoader";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <RefreshLoader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
