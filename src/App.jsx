import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Shop from './Pages/Shop'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mens" element={<ShopCategory />} />
            <Route path="/Women" element={<ShopCategory />} />
            <Route path="/Kids" element={<ShopCategory />} />
            {/* <Route path="/product" element={<Product />} />
            <Route path=":productId" element={<Product />} /> */}
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
