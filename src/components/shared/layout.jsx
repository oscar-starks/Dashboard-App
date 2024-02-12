import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';

export default function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar/>

            <div className= 'flex flex-row bg-neutral-100 h-screen w-screen'>
                <div className='flex-1 bg-white h-16 px-4'>
                    <Header/>
                </div>
                <div>{<Outlet/>}</div>
            </div>
            
        </div>
    );
}

