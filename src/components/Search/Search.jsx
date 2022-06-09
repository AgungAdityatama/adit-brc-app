import React from 'react'

//assets
import './Search.css'

function Search() {
    return (
        <>
            <form className="form-search">
                <div className="field">
                    <label className="tipe">Tipe Driver</label>
                    <select className='input' id="tipe">
                        <option disabled selected hidden>Pilih Tipe Driver</option>
                        <option className='option' value="true">Dengan Sopir</option>
                        <option className='option' value="false">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                </div>
                <div className="field">
                    <label className="date">Tanggal</label>
                    <input className='input' type="date" />
                </div>
                <div className="field">
                    <label className="time">Waktu Jemput/Ambil</label>
                    <input className='input' type="time" />
                </div>
                <div className="field">
                    <label className="people">Jumlah Penumpang (optional)</label>
                    <input className='input' type="text" placeholder='Jumlah Penumpang' />
                </div>
                <div className="field">
                    <button className='btn-search'>Cari Mobil</button>
                </div>
            </form>
        </>
    )
}

export default Search