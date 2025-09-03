import React from 'react'
import CartItem from '../Components/CartItem.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function Cart() {
    

    return (
        <>
            <CartItem/>
            <ToastContainer position="top-center" autoClose={1500} />

        </>
    )
}

export default Cart
