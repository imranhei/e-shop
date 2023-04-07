import React from 'react';
import { useSelector } from 'react-redux'

const Customer = () => {
    const users = useSelector((state) => state.allUser.userList)
    console.log(users);
    return (
        <div className='pt-20 m-4'>
            {
                users.map((user) => (
                    <div className="h-60 w-60 border flex flex-col px-2 rounded bg-white shadow-md">
                        <h1>Name: {user.name}</h1>
                        <h1>Username: {user.username}</h1>
                        <h1>Phone: {user.phone}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>
                ))
            }
        </div>
    );
}

export default Customer;
