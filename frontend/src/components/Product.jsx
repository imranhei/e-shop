import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../products';

const Product = () => {

    return (
        <div className='flex flex-wrap gap-5 justify-center pt-20 m-4'>
            {
                Products.map((product) => (
                    <div className="h-72 w-48 border" key={product._id}>
                        <div className="h-30 w-30 border-b">
                            <img src={product.image} alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="px-4 pt-2 text-sm">
                            <Link to={`/product/${product._id}`}><p className="font-semibold hover:text-rose-400">{product.name}</p></Link>
                            <h1>Category : {product.category}</h1>
                            <h1>Price : ${product.price}</h1>
                            <button className='ml-7 bg-purple-600 rounded px-4 py-1 mt-2 text-white shadow-lg shadow-purple-600/60 hover:shadow-transparent duration-300'>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Product;
