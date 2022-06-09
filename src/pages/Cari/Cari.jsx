import React from 'react'

//components
import NavClient from '../../components/Navigasi/NavClient/NavClient'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'

function Cari() {
    return (
        <>
            <div className="cari">
                <NavClient />
                <Hero />
                <Search />
                <Footer />
            </div>
        </>
    )
}

export default Cari