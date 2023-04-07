import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isAdmin = true;
    const isLoggedIn = true;
    
    return (
        <div className='flex justify-between px-4 md:px-16 py-2 border-b items-center fixed w-full bg-white z-50'>
            <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-rose-400 inline'>E-SHOP</h1>
            <div className="flex sm:gap-5 gap-2 items-center">
                {isAdmin ? <h1 className='text-white rounded-sm bg-rose-400 px-4'>Admin</h1> : <h1></h1>}
                <Link to='/register' className={`hover:text-rose-400 ${location.pathname === '/register' ? 'text-rose-400' : 'text-purple-600'}`}>Register</Link>
                <Link to='/login' className={`hover:text-rose-400 ${location.pathname === '/login' ? 'text-rose-400' : 'text-purple-600'}`}>Login</Link>
                {isLoggedIn ? <i class="fa-solid fa-arrow-right-from-bracket text-purple-600 hover:text-rose-400 cursor-pointer"></i> : <></>}
            </div>
        </div>
    );
}

export default Navbar;