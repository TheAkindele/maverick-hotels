import React from 'react'
import { Link } from 'react-router-dom'
import RoomsFilter from './RoomsFilter'

const RoomsPage = () => {
    return (
        <div className='rooms-page'>
            <div className="top">
                <div className="center-div">
                    <p>Our Rooms</p>
                    <Link to='/'>
                        <div className='home'>Return Home</div>
                    </Link>
                </div>
            </div>
            <RoomsFilter />
        </div>
    )
}

export default RoomsPage
