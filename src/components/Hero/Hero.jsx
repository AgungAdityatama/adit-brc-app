import React from 'react'

//assets
import banner from '../../assets/images/banner.png'
import './Hero.css'

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-title col">
                    <p className='title'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    <p className='desc'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button className='btn-start'>Mulai Sewa Mobil</button>
                </div>
                <div className="hero-image col">
                    <img src={banner} alt="img-banner" />
                </div>
            </div>
        </>
    )
}

export default Hero