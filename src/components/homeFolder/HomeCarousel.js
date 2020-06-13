import React from 'react'
import { connect } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'

const HomeCarousel = ({ homeCarouselData }) => {
    console.log('home carousel ', homeCarouselData)
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
    console.log('state ', state)
    return {
        homeCarouselData: state.hotelReducer.homeCarousel
    }
}

export default connect(mapStateToProps)(HomeCarousel)

/*


            <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
*/
