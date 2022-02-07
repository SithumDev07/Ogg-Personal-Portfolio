import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    const [sticky, setSticky] = useState(true)

    window.addEventListener('scroll', () => {
        if (window.scrollY - window.innerHeight > 0) {
            setSticky(false)
        } else {
            setSticky(true)
        }
    })

    return (
        <nav className={`transition-all duration-1000 px-6 md:px-10 xl:px-0 ${sticky ? 'absolute' : 'fixed container mx-auto z-50'} top-6 flex items-center justify-between w-full`}>
            <div className="logo relative h-12">
                <div className='absolute h-12 lg:h-16 xl:h-12 w-12 lg:w-16 xl:w-12 rounded-full bg-red-500 filter top-0 left-0  mix-blend-color-dodge' />
                <div className='absolute h-12 lg:h-16 xl:h-12 w-12 lg:w-16 xl:w-12 rounded-full bg-white filter top-0 left-0 ml-7 mix-blend-color-dodge' />
            </div>
            <ul className='hidden md:flex items-center justify-end space-x-10 xl:space-x-6 text-2xl lg:text-5xl xl:text-base'>
                {
                    ["about", "cases", "contact"].map((item, index) => (
                        <Link key={index} to={`/${item}`} className='capitalize'>{item}</Link>
                    ))
                }
            </ul>
            <button className='block md:hidden '>
                <svg className='h-10 w-10' viewBox="0 0 86 79" fill="none">
                    <rect width="86" height="17" rx="8.5" fill="white" />
                    <rect x="24" y="31" width="62" height="17" rx="8.5" fill="white" />
                    <rect y="62" width="86" height="17" rx="8.5" fill="white" />
                </svg>
            </button>

        </nav>
    );
}

export default NavBar;
