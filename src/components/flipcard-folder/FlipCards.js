import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { MdLocationOn } from 'react-icons/md'
import { Jumbotron, Container, Row, Col } from 'reactstrap'
import { FlipcardStyle } from './flipcardStyle'

const FlipCards = () => {
    return (
        <Jumbotron fluid className='bg-info'>
            <Container>
                <Row>
                    <Col xs='12' lg='4' className='my-2 '>
                        <FlipcardStyle >
                            <div className="phone icon"><FaPhoneAlt /></div>
                            <h3 className="call-us">CALL US</h3>
                            <h6 className="numbers">+123 456 7890, +987 654 0321</h6>
                        </FlipcardStyle>
                    </Col>
                    <Col xs='12' lg='4' className='my-2 '>
                        <FlipcardStyle>
                            <div className="email icon"><GrMail /></div>
                            <h3 className="mail-us">EMAIL US</h3>
                            <h6 className="email-add">maverickhotels@testing.com</h6>
                        </FlipcardStyle>
                    </Col>
                    <Col xs='12' lg='4' className='my-2 '>
                        <FlipcardStyle>
                            <div className="location icon"><MdLocationOn /></div>
                            <h3 className="visit-us">VISIT US</h3>
                            <h6 className="address">1, Aso Rock Drive, Aso Villa, Abuja, Nigeria</h6>
                        </FlipcardStyle>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>

    )
}

export default FlipCards
