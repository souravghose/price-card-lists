import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Pricelist from '../PriceList/Pricelist';

const Navbar = () => {


    const routes = [
        {
            name: 'Home',
            id: 'home',
            path: '/',
        },
        {
            name: 'About',
            id: 'about',
            path: '/about',
        },
        {
            name: 'Services',
            id: 'services',
            path: '/services',
        },
        {
            name: 'Products',
            id: 'products',
            path: '/products',
        },
        {
            name: 'Contact',
            id: 'contact',
            path: '/contact',
        },
    ];

    const [open, setOpen] = useState(false)
    return (
        <div>
        <nav>
            <div className='md:hidden bg-purple-400' onClick={() => setOpen(!open)}>
                <span>{open===true ?  <XMarkIcon className="h-6 w-6 text-blue-500" />:<Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
           
            

            </div>
            <ul className={`md:flex md:static absolute duration-500 pl-8 py-2 bg-purple-400 ${open===true ? 'top-6' : '-top-48'}`}>       
             {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
        <h1 className='text-7xl text-center bg-purple-500 px-2 py-2 text-purple-800'>Most Affordable Price</h1>
        
        <Pricelist></Pricelist>

        </div>
    );
};

export default Navbar;