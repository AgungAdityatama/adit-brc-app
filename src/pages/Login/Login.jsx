import React from 'react'

//assets
import cover from '../../assets/images/cover.png'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import './Login.css'

function Login() {

    return (
        <>
            <div className="login">
                <div className="img-cover">
                    <img src={cover} alt="image cover" />
                </div>
                <form className="form">
                    <div className="logo"></div>
                    <p className="title">Welcome, Admin BCR</p>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="mail" placeholder='Contoh: jhondee@gmail.com'></input>
                    </div>
                    <div className="password">
                        <label htmlFor="email">Password</label>
                        <input type="password" placeholder='Contoh: 6+ karakter'></input>
                    </div>
                    <button className='btn-login'>
                        Sign In
                    </button>
                    <p>Login with:</p>
                    <button className='btn-oauth'>
                        <img src={google} alt="google-oauth" />
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login