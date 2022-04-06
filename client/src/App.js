import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/actions/products-actions";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from './pages/NotFound';
import MainNavigation from "./layout/MainNavigation";
import Footer from "./layout/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import TheProducts from "./components/dashboard/TheProducts";
import AddProduct from "./components/dashboard/AddProduct";
import UpdateProduct from "./components/dashboard/UpdateProduct";
import LoginRedirect from "./components/auth/LoginRedirect";




const App = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  
  return (
    <>
      {!isAdmin && <MainNavigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route element={<LoginRedirect />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="admin/dashboard" element={<Dashboard />}>
          <Route path="products" element={<TheProducts />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="updateproduct" element={<UpdateProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
