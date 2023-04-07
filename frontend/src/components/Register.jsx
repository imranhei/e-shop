import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isValidPhoneNumber } from 'libphonenumber-js';

import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../redux/users'

const Register = () => {
    const users = useSelector((state) => state.allUser.userList)
    const dispatch = useDispatch()

    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const username = document.querySelector('#username').value;
        const phone = document.querySelector('#phone').value;
        const email = document.querySelector('#email').value;
        const pass = document.querySelector('#pass').value;

        const nameRegex = /^[a-zA-Z\s]*$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === '') setNameError("Name can't be blank");
        else if(!nameRegex.test(name.trim())) setNameError('Name can only contain letters and spaces')
        else setNameError('')

        if(username === '') setUsernameError('Username required');
        else if(!nameRegex.test(name.trim())) setUsernameError('Username can only contain letters and spaces');
        else setUsernameError('')

        const isValidPhone = isValidPhoneNumber(phone, 'BD');
        if (!isValidPhone) {
        setPhoneError('Please enter a valid Bangladeshi phone number. ex:+8801XXXXXXXXX');
        } else setPhoneError('')

        if(!emailRegex.test(email)) setEmailError('Invalid email');
        else setEmailError('');

        if(pass.length < 6) setPassError('Password must have at least 6 letter');
        else setPassError('')

        if(nameError === '' && usernameError ==='' && phoneError ==='' && emailError ==='' && passError === ''){
            dispatch(addUser({name: name, username: username, phone: phone, email: email, password: pass}));
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center relative text-white'>
            <div className="bg-black sm:p-16 p-10 sm:w-96 w-80 flex flex-col gap-2 items-center rounded-lg text-sm mt-12 border border-rose-400 bg-opacity-75">
                <h1 className='text-2xl font-bold sm:pb-8 pb-4 text-rose-400'>Register</h1>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold">Name</h1>
                    <div className="flex items-center gap-2">
                        <i class="fa-solid fa-user text-rose-400 w-5 pl-1"></i>
                        <input id='name' type="text" placeholder='Enter your full name' className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <h1 className='text-red-400 leading-4 -mt-1'>{nameError}</h1>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold">Username</h1>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-rose-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <input id='username' type="text" placeholder='Enter your username' className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <h1 className='text-red-400 leading-4 -mt-1'>{usernameError}</h1>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold">Phone</h1>
                    <div className="flex items-center gap-2">
                        <i class="fa-solid fa-phone text-rose-400 w-5 pl-1"></i>
                        <input type="tel" id="phone" pattern="[+]{1}[8]{2}[01]{1}[3-9]{1}[0-9]{8}" required className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <h1 className='text-red-400 leading-4 -mt-1'>{phoneError}</h1>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold">Email</h1>
                    <div className="flex items-center gap-2">
                        <i class="fa-solid fa-envelope text-rose-400 w-5 pl-1"></i>
                        <input id='email' type="text" placeholder='Enter your email address' className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <h1 className='text-red-400 leading-4 -mt-1'>{emailError}</h1>
                <div className='border-b pb-1 focus-within:border-rose-400 w-full'>
                    <h1 className="text-left pb-1 font-semibold ">Password</h1>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-rose-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                        <input id='pass' type="password" placeholder='Enter your password'  className='outline-none w-full bg-transparent'/>
                    </div>
                </div>
                <h1 className='text-red-400 leading-4 -mt-1'>{passError}</h1>
                <button onClick={handleRegister} className="bg-rose-400 rounded-sm px-16 py-1 mt-4 text-white font-semibold border border-transparent hover:border-rose-400 hover:text-rose-400 hover:bg-transparent mb-4">Register</button>
                
                <h1>Already have an account? <span>
                <Link to='/login' className='text-teal-400 font-semibold cursor-pointer hover:text-rose-400'>Sign In</Link>
                    </span>
                </h1>
                
            </div>
        </div>
    );
}

export default Register;