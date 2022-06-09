import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

//assets
import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
import './CardDetail.css'
import img from '../../../assets/images/banner.png'

function CardDetail() {
    const { id } = useParams();

    let [item, setItem] = useState([]);

    const datas = async () => {
        let fetchs = await fetch('https://rent-cars-api.herokuapp.com/customer/car/' + id)
        let datas = await fetchs.json();
        setItem(item = datas)
    }

    useEffect(() => {

        datas();

    }, []);
    return (
        <>
            <div className="card-detail">
                <div className="card">
                    <div className="image">
                        <img src={img} className="img" alt="img" />
                    </div>
                    <div className="content">
                        <p className='name'>{item.name}/{item.category}</p>
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
                            <p className='price'>{datas.price} / hari</p>
                        </div>
                    </div>
                    <button className='btn-pick'>Lanjutkan Pembayaran</button>
                </div>
            </div>
        </>
    )
}

export default CardDetail