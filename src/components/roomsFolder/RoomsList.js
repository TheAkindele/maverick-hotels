import React from 'react'
import { Link } from 'react-router-dom'

const RoomsList = ({ roomsList }) => {
    //console.log('room list ', roomsList)
    return (
        <div className='rooms-list-container'>
            <div className="room-list">
                {
                    roomsList.length ?
                        (roomsList.map(room => (
                            <Link to={`/rooms/${room.roomType}`} className="room" key={room.id}>
                                <h6 className="price">#{room.price}</h6>
                                <div className="image"><img src={room.roomImage} alt='featured' /></div>
                                <div className="foot"><h6>{room.roomType}</h6></div>
                            </Link>
                        )))
                        : (<h3>No matching rooms found</h3>)
                }
            </div>
        </div>
    )
}

export default RoomsList
