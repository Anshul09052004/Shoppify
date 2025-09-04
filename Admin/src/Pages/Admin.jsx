import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct'
import ListProduct from '../Components/ListProduct'

function Admin() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>} />
                <Route path='/allproducts' element={<ListProduct/>} />
            </Routes>
        </div>
    )
}

export default Admin
