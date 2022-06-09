import React from 'react'

//components
import NavClient from '../../components/Navigasi/NavClient/NavClient'
import Hero from '../../components/Hero/Hero'
import OurServices from '../../components/OurServices/OurServices'
import WhyUs from '../../components/WhyUs/WhyUs'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

function Landing() {
    return (
        <>
            <div className="landing">
                <NavClient />
                <Hero />
                <OurServices />
                <WhyUs />
                <Banner />
                <Footer />
            </div>
        </>
    )
}

export default Landing