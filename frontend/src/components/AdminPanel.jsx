import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminPanel = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const Links = [
        {name: "Dashboard", link: '/admindashboard', icon: "fa-solid fa-table-columns"},
        {name: "Products", link: '/products', icon: "fa-solid fa-shop"},
        {name: "Cart", link: '/cart', icon: "fa-solid fa-cart-shopping"},
        {name: "Customers", link: '/customers', icon: "fa-solid fa-users"},
        {name: "Order", link: '/order', icon: "fa-brands fa-shopify"},
        {name: "Add Products", link: '/addproducts', icon: "fa-solid fa-cart-plus"},
    ]
    return (
        <div className='h-screen relative z-10 '>
            <div onClick={()=>setOpen(!open)} className={`absolute top-16 cursor-pointer md:hidden text-purple-600 z-20 duration-500 hover:text-rose-400 ${open ? 'left-44' : 'left-4'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <ul className={`md:pt-16 pt-20 pl-4 w-56 border-r h-full absolute md:static bg-white bg-opacity-75 ${open ? 'left-0' : 'left-[-250px]'} duration-500`}>
            {
                Links.map((link) => (
                    <div key={link.name} className={`flex items-center gap-3 hover:text-rose-400 duration-500 py-3 ${location.pathname === link.link ? 'text-rose-400' : 'text-purple-600'}`}>
                        <i className={`${link.icon} w-6 flex justify-center`}></i>
                        <Link to={link.link}>{link.name}</Link>
                    </div>
                    
                ))
            }
            </ul>
        </div>
    );
}

export default AdminPanel;
