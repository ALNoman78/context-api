import React from 'react'
import PropTypes from 'prop-types'
import { list } from 'postcss';
import Link from '../Link/Link';

const CSNav = props => {
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
            <ul className='md:flex gap-5'>
                {
                    routes.map((route, idx) => <Link key={idx} route = {route}></Link>)
                }
            </ul>
        </nav>
    )
}

CSNav.propTypes = {}

export default CSNav