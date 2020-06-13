import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const FeaturedRooms = ({ featured }) => {
    return (
        <div className="featured-rooms">
            <div className="title-box">
                <h2 className="featured-title">Featured Rooms</h2>
            </div>
            <div className="rooms">
                {
                    featured.map(room => (
                        <Link to='/rooms' className="room" key={room.id}>
                            <h6 className="price">Prices from #{room.price}</h6>
                            <div className="image"><img src={room.imageUrl} alt='featured' /></div>
                            <div className="foot"><h6>{room.roomType}</h6></div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    featured: state.hotelReducer.roomsCarousel
})

export default connect(mapStateToProps)(FeaturedRooms)