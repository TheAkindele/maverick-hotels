import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRoom } from '../../redux/actions/hotelActions'

const RoomsList = ({ theRoomsList, pickedRoom }) => {
    //console.log('room list ', theRoomsList)

    return (
        <div className='rooms-list-container'>
            <div className="room-list">
                {
                    theRoomsList.map(room => (
                        <div key={room.id} onClick={() => pickedRoom(room)}>
                            <Link to={`/rooms/${room.roomType}`} className='the-room'>
                                <h6 className="price">#{room.price}</h6>
                                <div className="image"><img src={room.roomImage} alt='featured' /></div>
                                <div className="foot"><h6>{room.roomType}</h6></div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    pickedRoom: room => dispatch(selectRoom(room))
})

export default connect(null, mapDispatchToProps)(RoomsList)


