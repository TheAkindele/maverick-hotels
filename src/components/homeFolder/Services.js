import React from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

const Services = () => {
    return (
        <div className="services-container">
            <div className="title-box">
                <h2 className="service-title">Services</h2>
            </div>
            <div className="services-box">
                <div className="service">
                    <h2 className="icon"><FaCocktail /></h2>
                    <h5 className="title">Free Cocktail</h5>
                    <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                </div>
                <div className="service">
                    <h2 className="icon"><FaHiking /></h2>
                    <h5 className="title">Endless hiking</h5>
                    <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                </div>
                <div className="service">
                    <h2 className="icon"><FaShuttleVan /></h2>
                    <h5 className="title">Free shuttle</h5>
                    <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                </div>
                <div className="service">
                    <h2 className="icon"><FaBeer /></h2>
                    <h5 className="title">strongest beer</h5>
                    <p className="body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum sint veritatis sit ea cumque officiis velit inventore sed ducimus rem.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
