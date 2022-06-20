
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const HomeItems = styled.div`
margin:10px;
`

function Home() {
    return (
        <div>
            <Announcement />
            <HomeItems>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            </HomeItems>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home
