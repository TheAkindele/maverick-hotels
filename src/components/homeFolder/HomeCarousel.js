import React from 'react'
import { connect } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'

const HomeCarousel = ({ homeCarouselData }) => {
    //console.log('home carousel ', homeCarouselData)
    return (
        <Carousel className='home-carousel'>
            {
                homeCarouselData.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            src={item.imageURL} alt='slides'
                            className='image d-block w-100'
                        />
                        <Carousel.Caption>
                            <h5 className='item'>{item.name}</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

const mapStateToProps = (state) => {
    //console.log('state ', state)
    return {
        homeCarouselData: state.hotelReducer.homeCarousel
    }
}

export default connect(mapStateToProps)(HomeCarousel)

