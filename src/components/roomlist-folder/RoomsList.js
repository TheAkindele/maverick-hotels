import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRoom } from '../../redux/actions/hotelActions'
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { ListContainerStyle, ListStyle, CardPrice } from './roomlistStyle'

const RoomsList = ({ theRoomsList, pickedRoom }) => {
    //console.log('room list ', theRoomsList)

    return (
        <ListContainerStyle>
            <ListStyle>
                <Container fluid>
                    <Row>
                        {
                            theRoomsList.map(room => (
                                <Col lg='3' md='6' xs='12' key={room.id} className='my-2' onClick={() => pickedRoom(room)}>
                                    <Card >
                                        <Link to={`/rooms/${room.roomType}`} className='the-room'>
                                            <CardImg top width="100%" height="200px" src={room.roomImage} alt="Card" />
                                            <CardBody style={{ background: 'brown' }}>
                                                <CardTitle className='font-weight-bold text-white'>{room.roomType.toUpperCase()}</CardTitle>
                                                <CardPrice>{room.price}</CardPrice>
                                            </CardBody>
                                        </Link>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </ListStyle>
        </ListContainerStyle>
    )
}

const mapDispatchToProps = dispatch => ({
    pickedRoom: room => dispatch(selectRoom(room))
})

export default connect(null, mapDispatchToProps)(RoomsList)
