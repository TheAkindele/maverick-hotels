import React from 'react'
import { connect } from 'react-redux'

const FeaturedRooms = ({ featured }) => {
    return (
        <div className="featured-rooms">
            <div className="title-box">
                <h2 className="featured-title">Featured Rooms</h2>
            </div>
            <div className="rooms">
                {
                    featured.map(room => (
                        <div key={room.id} className='rooms-sample'>
                            <h6 className="price">Prices from #{room.price}</h6>
                            <div className="image"><img src={room.imageUrl} alt='featured' /></div>
                            <div className="foot"><h6>{room.roomType}</h6></div>
                        </div>
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