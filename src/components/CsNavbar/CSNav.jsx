import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from '../Link/Link';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const CSNav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
    ];

    // export default routes;

    return (
        <nav className='md:w-10/12 mx-auto'>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <IoClose ></IoClose> :
                        <HiMenuAlt1 ></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex duration-1000 absolute shadow-lg md:static bg-red-600 p-5 text-white z-10 
                ${open ? 'top-9' : '-top-60'}`}>
                {
                    routes.map((route, idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </nav>
    )
}

CSNav.propTypes = {}

export default CSNav