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
        <nav>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <IoClose ></IoClose> :
                        <HiMenuAlt1 ></HiMenuAlt1>
                }
            </div>
            <ul className='md:flex gap-5 items-center absolute bg-red-600 p-5 text-white'>
                {
                    routes.map((route, idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </nav>
    )
}

CSNav.propTypes = {}

export default CSNav