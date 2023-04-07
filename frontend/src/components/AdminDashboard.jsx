import React from 'react';

const AdminDashboard = () => {
    return (
        <>
            <h1 className="pt-20 pb-2 m-4 font-bold text-2xl">Analytics</h1>
            <div className='flex flex-wrap m-4 gap-5 h-fit text-white font-semibold text-sm'>
                <div className="h-40 lg:h-48 w-56 lg:w-72 bg-teal-400 relative p-8 rounded bg-gradient-to-r from-cyan-400 to-blue-500">
                    <h1 className="absolute">Weekly Sales</h1>
                    <h1 className="absolute pt-6">$20,000</h1>
                    <h1 className="absolute pt-16">Increased by 40%</h1>
                </div>
                <div className="h-40 lg:h-48 w-56 lg:w-72 bg-teal-400 relative p-8 rounded bg-gradient-to-r from-rose-400 to-purple-400">
                    <h1 className="absolute">Weekly Orders</h1>
                    <h1 className="absolute pt-6">35,154</h1>
                    <h1 className="absolute pt-16">Decreased by 10%</h1>
                </div>
                <div className="h-40 lg:h-48 w-56 lg:w-72 bg-teal-400 relative p-8 rounded bg-gradient-to-r from-teal-400 to-green-400">
                    <h1 className="absolute">Visitors Online</h1>
                    <h1 className="absolute pt-6">$514</h1>
                    <h1 className="absolute pt-16">Increased by 5%</h1>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
