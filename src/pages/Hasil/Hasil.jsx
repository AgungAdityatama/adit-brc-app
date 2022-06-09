import React from 'react'

//components
import NavClient from '../../components/Navigasi/NavClient/NavClient'
import Search from '../../components/Search/Search'
import CardHasil from '../../components/Card/CardHasil/CardHasil'
import Footer from '../../components/Footer/Footer'

//asets
import './Hasil.css'

function Hasil() {
    return (
        <>
            <div className="hasil">
                <NavClient />
                <div className="header"></div>
                <Search />
                <div className="list-card">
                    <CardHasil />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Hasil