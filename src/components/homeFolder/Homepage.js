import React from 'react'
import HomeCarousel from './HomeCarousel'
import Services from './Services'
import FeaturedRooms from './FeaturedRoom'
import FlipCards from './FlipCards'

const Homepage = () => {
    return (
        <div className='homepage'>
            <HomeCarousel />
            <Services />
            <FeaturedRooms />
            <FlipCards />
        </div>
    )
}

export default Homepage
//