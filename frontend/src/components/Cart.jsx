import React, { useEffect, useState } from 'react';
import Products from '../products';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        setCartItems(Products);
    }, [])
    const handleRemove = (id) => {
        const updatedData = cartItems.filter(row => row._id !== id);
        setCartItems(updatedData);
    }
    
    return (
        <div className='flex flex-col justify-center pt-20 m-4'>
            <h1 className='text-center font-bold text-2xl pb-4'>Cart</h1>
            <div className="p-2 bg-white rounded drop-shadow-md">
                <div className='flex border-b pb-2'>
                    <h1 className='w-5/12 pl-2'>Product</h1>
                    <h1 className='w-2/12 text-center'>Price</h1>
                    <h1 className='w-2/12 text-center'>Quantity</h1>
                    <h1 className='w-2/12 text-center'>Total</h1>
                    <h1 className='w-1/12 text-center'>Action</h1>
                </div>
                {
                    cartItems.map((product) => (
                        <div className='flex itmes-center items-center border-b py-2' key={product._id}>
                            <div className="flex gap-2 w-5/12 items-center">
                                <div className="h-8 w-8">
                                    <img src={product.image} alt="" className="h-full w-full object-cover" />
                                </div>
                                <h1>{product.name}</h1>
                            </div>
                            <h1 className='text-center w-2/12'>${product.price}</h1>
                            <h1 className='text-center w-2/12'>2</h1>
                            <h1 className='text-center w-2/12'>{product.price * 2}</h1>
                            <button onClick={() => handleRemove(product._id)} className='text-center w-1/12'><span className='border rounded-full px-2 pb-1'>x</span></button>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Cart;
