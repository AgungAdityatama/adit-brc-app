import React from 'react'

//assets
import { FiThumbsUp, FiTag, FiClock, FiAward } from "react-icons/fi";
import './WhyUs.css'

function WhyUs() {
    return (
        <>
            <div className="why-us" id='why-us'>
                <p className="title">Why Us?</p>
                <p className="desc">Mengapa harus pilih Binar Car Rental?</p>
                <div className="card-group">
                    <div className="card">
                        <FiThumbsUp className="icon icon-1" />
                        <p className="card-title">Mobil Lengkap</p>
                        <p className="card-desc">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div className="card">
                        <FiTag className="icon icon-2" />
                        <p className="card-title">Harga Murah</p>
                        <p className="card-desc">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div className="card">
                        <FiClock className="icon icon-3" />
                        <p className="card-title">Layanan 24 Jam</p>
                        <p className="card-desc">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    <div className="card">
                        <FiAward className="icon icon-4" />
                        <p className="card-title">Sopir Profesional</p>
                        <p className="card-desc">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs