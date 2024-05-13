import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navItens = [
        {path:"/", title:"Start a search"},
        {path:"/my-job", title:"My jobs"},
        {path:"/salary", title:"Salary estimate"},
        {path:"/post-job", title:"Post a job"},
    ]

    return (
        <header className='min-h-[80px] px-10 w-full flex flex-row items-center bg-appWhite-200'>
            <nav>
                <Link to="/">oi</Link>
                <ul>
                    {
                        navItens.map(({path, title}) => (
                            <li key={path} className=' text-base text-appWhite-800'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? "active" : "" }
                                >{title}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navbar