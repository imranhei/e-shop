import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = () => {
        const username = document.querySelector('#username').value;
        const pass = document.querySelector('#pass').value;
    }

    return (
        <div className='w-full h-screen flex justify-center items-center relative text-white'>
            <div className="bg-black sm:p-16 p-10 sm:w-96 w-80 flex flex-col gap-2 items-center rounded-lg text-sm mt-12 border border-rose-400 bg-opacity-75">
                <h1 className='text-2xl font-bold sm:pb-8 pb-4 text-rose-400'>Login</h1>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold">Username</h1>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-rose-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <input id='username' type="text" placeholder='Type your username' className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold ">Password</h1>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-rose-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                        <input id='pass' type="password" placeholder='Type your password'  className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                {/* <Link to='/forgetpass' className="w-full text-right font-semibold cursor-pointer hover:text-rose-400">Forget password?</Link> */}
                <button onClick={handleLogin} className="bg-rose-400 rounded-sm px-16 py-1 mt-2 text-white font-semibold border border-transparent hover:border-rose-400 hover:text-rose-400 hover:bg-transparent mb-4">LOGIN</button>
                <h1>Or Sign Up Using</h1>
                <div className="flex gap-5 text-lg mt-2 mb-8">
                    <i class="fa-brands fa-facebook-f hover:text-blue-800 text-white bg-blue-800 px-3 py-2 rounded-full hover:bg-transparent cursor-pointer"></i>
                    <i class="fa-brands fa-twitter hover:text-teal-400 text-white bg-teal-400 p-2 rounded-full hover:bg-transparent cursor-pointer"></i>
                    <i class="fa-brands fa-google hover:text-red-600 text-white bg-red-600 p-2 rounded-full hover:bg-transparent cursor-pointer"></i>
                </div>
                <h1>Or Sign Up Using</h1>
                <Link to='/register' className='text-teal-400 font-semibold cursor-pointer hover:text-rose-400'>Register</Link>
            </div>
        </div>
    );
}

export default Login;