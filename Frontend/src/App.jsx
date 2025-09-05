import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Shop from "./Pages/Shop";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import ShopContextProvider from "./Context/ShopContext";
import banner_kids from "./assets/Assets/Frontend_Assets/banner_kids.png";
import banner_women from "./assets/Assets/Frontend_Assets/banner_women.png";
import banner_mens from "./assets/Assets/Frontend_Assets/banner_mens.png";
import Product from "./Pages/Product";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* ✅ Default "/" always goes to /shop */}
          <Route path="/" element={<Navigate to="/shop" />} />

          {/* ✅ Pages */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mens" element={<ShopCategory category="men" banner={banner_mens} />} />
          <Route path="/women" element={<ShopCategory category="women" banner={banner_women} />} />
          <Route path="/kids" element={<ShopCategory category="kid" banner={banner_kids} />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        {!["/login"].includes(location.pathname) && <Footer />}
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
