import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import { Container, Row, Col } from 'reactstrap'
import { ServicesStyle, TitleStyle, ServiceBoxStyle, ServiceStyle } from './servicesStyles'

const Services = () => {
    return (
        <ServicesStyle>
            <TitleStyle>
                <span>Services</span>
            </TitleStyle>
            <ServiceBoxStyle>
                <Container>
                    <Row>
                        <Col lg='3' xs='12'>
                            <ServiceStyle>
                                <h2 className="icon"><FaCocktail /></h2>
                                <h5 className="title">Free Cocktail</h5>
                                <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                            </ServiceStyle>
                        </Col>
                        <Col lg='3' xs='12'>
                            <ServiceStyle>
                                <h2 className="icon"><FaHiking /></h2>
                                <h5 className="title">Endless hiking</h5>
                                <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                            </ServiceStyle>
                        </Col>
                        <Col lg='3' xs='12'>
                            <ServiceStyle>
                                <h2 className="icon"><FaShuttleVan /></h2>
                                <h5 className="title">Free shuttle</h5>
                                <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                            </ServiceStyle>
                        </Col>
                        <Col lg='3' xs='12'>
                            <ServiceStyle>
                                <h2 className="icon"><FaBeer /></h2>
                                <h5 className="title">strongest beer</h5>
                                <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                            </ServiceStyle>
                        </Col>
                    </Row>
                </Container>
            </ServiceBoxStyle>
        </ServicesStyle>
    )
}

export default Services
