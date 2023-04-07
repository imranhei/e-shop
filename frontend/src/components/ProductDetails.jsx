import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../products';

const ProductDetails = () => {
    const { id } = useParams();
    const product = Products.find(p => id === p._id)
    const addToCart = () => {
        if(document.getElementById('cart').value > product.countInStock){
            alert('Sorry, not available product in stock!');
        }
        else{

        }
    }
    return (
        <div className='pt-20 m-4 flex flex-wrap justify-center items-center'>
            <div className="h-96 w-96">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className='max-w-[600px] p-8 flex flex-col gap-2'>
                <h1 className='font-semibold'>{product.name}</h1>
                <h1><span className='font-semibold'>Brand : </span>{product.brand}</h1>
                <h1><span className='font-semibold'>Category : </span>{product.category}</h1>
                <h1><span className='font-semibold'>In Stock : </span>{product.countInStock}</h1>
                <h1><span className='font-semibold'>Description : </span>{product.description}</h1>
                <h1><span className='font-semibold'>Rating : </span>{product.rating}</h1>
                <h1><span className='font-semibold'>No of Review : </span>{product.numReviews}</h1>
                <h1><span className='font-semibold'>Price : </span>${product.price}</h1>
                <div className="flex flex-items-center gap-4">
                    <input id='cart' type="number" placeholder='Quantity' className='outline-none border border-purple-400 rounded pl-2 w-20 placeholder:text-sm'/>
                    <button className='bg-purple-600 rounded px-4 text-white shadow-lg shadow-purple-600/60 hover:shadow-transparent duration-300' onClick={addToCart}>Add to Cart</button>
                </div> 
            </div>
        </div>
    );
}

export default ProductDetails;
