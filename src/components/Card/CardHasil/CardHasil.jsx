import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../../actions/carAction';

//assets
import { FiUsers, FiSettings, FiCalendar } from "react-icons/fi";
import './CardHasil.css'
import img from '../../../assets/images/banner.png'

function CardHasil() {

    const { getDataCarResult, getDataCarLoading, getDataCarError } = useSelector((state) => state.carReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCar());
    }, [dispatch])

    return (
        <>
            {getDataCarResult ? (
                getDataCarResult.map((carReducer) => {
                    return (
                        <div key={carReducer.id} className="card-hasil">
                            <div className="card">
                                <div className="image">
                                    <img src={carReducer.image} className="img" alt="img" />
                                </div>
                                <div className="content">
                                    <p className='name'>{carReducer.name}/{carReducer.category}</p>
                                    <p className='price'>{carReducer.price} / hari</p>
                                    <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
                                </div>
                                <button className='btn-pick'>Pilih Mobil</button>
                            </div>
                        </div>

                    )
                })
            ) : getDataCarLoading ? (
                <p>Loading . . .</p>
            ) : (
                <p>{getDataCarError ? getDataCarError : "Data Kosong"}</p>
            )}
        </>

    )
}

export default CardHasil