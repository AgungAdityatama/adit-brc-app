import React from 'react'

//assets
import './Banner.css'

function Banner() {
    return (
        <>
            <div className="banner">
                <p className="title">Sewa Mobil di (Lokasimu) Sekarang</p>
                <div className="desc-banner">
                    <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <button className='btn-start'>Mulai Sewa Mobil</button>
            </div>
        </>
    )
}

export default Banner