import React from 'react'
import HomepageCarousel from '../carousel-folder/Carousel'
import Services from '../services-folder/Services'
import FeaturedRooms from '../featured-folder/FeaturedRoom'
import FlipCards from '../flipcard-folder/FlipCards'

const Homepage = () => {
    return (
        <div className='homepage'>
            <HomepageCarousel />
            <Services />
            <FeaturedRooms />
            <FlipCards />
        </div>
    )
}

export default Homepage
//