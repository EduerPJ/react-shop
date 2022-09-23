import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import ResetPassword from "../containers/ResetPassword";
import RecoveryPassword from "../containers/RecoveryPassword";
import Register from "../containers/Register";
import MyAccount from "../containers/MyAccount";
import Product from "../containers/Product";
import SignOff from "../containers/SignOff";
import Category from "../containers/Category";
import Order from "../containers/Order";
import Orders from "../containers/Orders";
import Car from "../containers/Car";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/product" element={<Product />} />
          <Route path="/sign-off" element={<SignOff />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/car" element={<Car />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
