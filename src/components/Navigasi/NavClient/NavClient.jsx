import React from 'react'
import { Link } from "react-router-dom"

//assets
import './NavClient.css'

function NavClient() {
    return (
        <>
            <div className="nav-client">
                <div className="nav">
                    <Link to='/landing'>
                        <div className="logo"></div>
                    </Link>
                    <div className="menu">
                        <Link to="#our-service" className='link'>Our Services</Link>
                        <Link to="#why-us" className='link'>Why Us</Link>
                        <Link to="#testimonial" className='link'>Testimonial</Link>
                        <Link to="#faq" className='link'>FAQ</Link>
                        <Link to="/register" className='link-register'>Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavClient