import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { FeaturedRoomsStyle, CardboxStyle } from './featuredRoomsStyle'
import { Link } from 'react-router-dom'
import { TitleStyle } from '../services-folder/servicesStyles'

const FeaturedRooms = ({ featured }) => {
    return (
        <FeaturedRoomsStyle>
            <TitleStyle>
                <span>Featured Rooms</span>
            </TitleStyle>
            <CardboxStyle>
                <Container>
                    <Row>
                        {
                            featured.map(room => (
                                <Col lg='4' xs='12' key={room.id} className='my-2'>
                                    <Card >
                                        <Link to={`/rooms`} className='to-rooms' style={{ textDecoration: 'none' }}>
                                            <CardImg top width="100%" height="200px" src={room.imageUrl} alt="Card" />
                                            <CardBody style={{ background: 'brown' }}>
                                                <CardTitle className='font-weight-bold text-white'>{room.roomType.toUpperCase()}</CardTitle>
                                            </CardBody >
                                        </Link>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </CardboxStyle>
        </FeaturedRoomsStyle>
    )
}

const mapStateToProps = state => ({
    featured: state.hotelReducer.roomsCarousel
})

export default connect(mapStateToProps)(FeaturedRooms)
