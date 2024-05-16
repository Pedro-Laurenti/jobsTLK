import React from 'react'
import {useState , useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isMenuOpen,
        setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    const navItens = [
        {
            path: "/",
            title: "Start a search"
        }, {
            path: "/my-job",
            title: "My jobs"
        }, {
            path: "/salary",
            title: "Salary estimate"
        }, {
            path: "/post-job",
            title: "Post a job"
        }
    ]

    const [scrollActive, setScrollActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop === 0) {
                setScrollActive(true);
            } else {
                setScrollActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className={`w-screen fixed z-20 mx-auto xl:px-24 px-4 bg-appWhite-200
        ${scrollActive ? 'py-10' : 'py-5'}`}>
            <nav className='flex flex-row justify-between items-center'>
                
                {/* Imagem */}
                <Link to="/">Jobs TLK</Link>

                {/* NavItens for large devices */}
                <ul className='hidden md:flex gap-12'>
                    {navItens.map(({path, title}) => (
                        <li key={path} className='text-base text-appWhite-800 hover:text-appWhite-900'>
                            <NavLink
                                to={path}
                                className={({isActive}) => isActive
                                ? "active text-appBlue-500"
                                : ""}>
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Login e cadastro */}
                <div className='text-base font-medium space-x-5 hidden lg:block'>
                    <Link to="/login" className='py-2 px-5 border rounded hover:bg-appWhite-300 text-appWhite-700'>Login</Link>
                    <Link to="/sign-up" className='py-2 px-5 border rounded bg-appBlue-500 text-appWhite-200 hover:bg-appBlue-600'>Sign up</Link>
                </div>

                {/* Mobile menu */}
                <div className='md:hidden block '>
                <button onClick={handleMenuToggler}>
                    {isMenuOpen ? 
                        <IoMdClose className='w-8 h-8 text-primary' /> : 
                        <IoMenu className='w-8 h-8 text-primary' />
                    }
                    </button>
                </div>

            </nav>

            {/* NavItens mobile */}
            <div className={`md:hidden absolute right-0 w-2/3 h-auto px-4 py-5 rounded-sm  bg-appBlue-800
            ${isMenuOpen ? "" : "hidden"} ${scrollActive ? 'mt-10' : 'mt-5'}`}>
                <ul>
                    {navItens.map(({path, title}) => (
                        <li key={path} className='text-base text-appWhite-100 hover:text-appBlue-500 first:text-white py-1'>
                            <NavLink
                                to={path}
                                className={({isActive}) => isActive
                                ? "active text-appBlue-500"
                                : ""}>
                                {title}
                            </NavLink>
                        </li>
                    ))}

                    <hr className='mt-2' />
                    <li className="text-white mt-10 flex flex-col gap-2">
                        <Link to="/login" className='py-2 px-5 rounded bg-appBlue-700 hover:bg-appBlue-500'>Login</Link>
                        <Link to="/sign-up" className='py-2 px-5 border rounded bg-appBlue-500 text-appWhite-200 hover:bg-appBlue-600'>Sign up</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar