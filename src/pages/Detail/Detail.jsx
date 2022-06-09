import React from 'react'

//components
import NavClient from '../../components/Navigasi/NavClient/NavClient'
import Search from '../../components/Search/Search'
import CardDetail from '../../components/Card/CardDetail/CardDetail'
import Footer from '../../components/Footer/Footer'

//assets
import './Detail.css'

function Detail() {
    return (
        <>
            <div className="detail">
                <NavClient />
                <div className="header"></div>
                <Search />
                <div className="desc">
                    <div className="package">
                        <p className='title'>Tentang Paket</p>
                        <p>Include</p>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                        <p>Excludess</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <p className='title'>Refund, Reschedule, Overtime</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <button className='btn-pick'>Lanjutkan Pembayaran</button>
                    </div>
                    <CardDetail />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Detail