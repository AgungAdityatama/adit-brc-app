import React from 'react'
import { Link } from 'react-router-dom'

//assets
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch } from "react-icons/fi";
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="address">
                    <p className="street">Jalan Suroyo No. 161 Mayangan Kota<br />Probolonggo 672000</p>
                    <p className="email">binarcarrental@gmail.com</p>
                    <p className="phone">081-233-334-808</p>
                </div>
                <div className="menu">
                    <Link to='#our-service' className='link'>Our Services</Link>
                    <Link to='#why-us' className='link'>Why Us</Link>
                    <Link to='#testimonial' className='link'>Testimonial</Link>
                    <Link to='#faq' className='link'>FAQ</Link>
                </div>
                <div className="social">
                    <p>Connect with us</p>
                    <Link to='www.facebook.com' className='link'><FiFacebook className='icon' /></Link>
                    <Link to='www.instagram.com' className='link'><FiInstagram className='icon' /></Link>
                    <Link to='www.twitter.com' className='link'><FiTwitter className='icon' /></Link>
                    <Link to='www.gmail.com' className='link'><FiMail className='icon' /></Link>
                    <Link to='www.twitch.com' className='link'><FiTwitch className='icon' /></Link>
                </div>
                <div className="source">
                    <div className="credit">
                        <p>Copyright Binar 2022</p>
                    </div>
                    <Link to='/landing'>
                        <div className="logo"></div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer