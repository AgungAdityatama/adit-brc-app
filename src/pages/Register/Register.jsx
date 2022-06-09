import React from 'react'
import { Link } from 'react-router-dom'

//assets
import cover from '../../assets/images/cover.png'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import './Register.css'

function Register() {

    return (
        <>
            <div className="register">
                <div className="img-cover">
                    <img src={cover} alt="image cover" />
                </div>
                <form className="form">
                    <div className="logo"></div>
                    <p className="title">Create New Account</p>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="mail" placeholder='Contoh: jhondee@gmail.com'></input>
                    </div>
                    <div className="password">
                        <label htmlFor="email">Password</label>
                        <input type="password" placeholder='Contoh: 6+ karakter'></input>
                    </div>
                    <button className='btn-login'>
                        Sign Up
                    </button>
                    <p>Already have an account? <Link to="/login" className='link-login'>Login</Link></p>
                    <p>Login with:</p>
                    <button className='btn-oauth'>
                        <img src={google} alt="google-oauth" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register