import React from 'react'

//assets
import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
import './CardDetail.css'
import img from '../../../assets/images/banner.png'

function CardDetail() {
    return (
        <>
            <div className="card-detail">
                <div className="card">
                    <div className="image">
                        <img src={img} className="img" alt="img" />
                    </div>
                    <div className="content">
                        <p className='name'>Nama/Tipe Mobil</p>
                        <div className="content-info">
                            <div className='info'>
                                <FiUsers className='icon' />
                                <p>4 Orang</p>
                            </div>
                            <div className='info'>
                                <FiSettings className='icon' />
                                <p>Manual</p>
                            </div>
                            <div className='info'>
                                <FiCalendar className='icon' />
                                <p>Tahun 2020</p>
                            </div>
                        </div><br /><br />
                        <div className="fee">
                            <p>Total</p>
                            <p className='price'>Rp 430.000 / hari</p>
                        </div>
                    </div>
                    <button className='btn-pick'>Lanjutkan Pembayaran</button>
                </div>
            </div>
        </>
    )
}

export default CardDetail