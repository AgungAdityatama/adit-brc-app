import React from 'react'

import { FiCheck } from "react-icons/fi";

//assets
import imgService from '../../assets/images/girl.png'
import './OurServices.css'

function OurServices() {
    return (
        <>
            <div className="our-services" id='our-services'>
                <div className="image-service col">
                    <img src={imgService} alt="image-service" />
                </div>
                <div className="desc-service col">
                    <p className='title'>Best Car Rental for any kind of trip in (Lokasimu)!</p>
                    <p className='desc'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul>
                        <li className='list'>
                            <FiCheck className='icon' />
                            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </li>
                        <li className='list'>
                            <FiCheck className='icon' />
                            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </li>
                        <li className='list'>
                            <FiCheck className='icon' />
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </li>
                        <li className='list'>
                            <FiCheck className='icon' />
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </li>
                        <li className='list'>
                            <FiCheck className='icon' />
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OurServices