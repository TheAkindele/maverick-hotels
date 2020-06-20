import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Room = ({ room }) => {
    //console.log('room= ', room)
    const { breakfast, guestLimit, price, roomImage, roomType, wifi } = room
    const { bathroom, settings } = room.others
    return (
        <div className='room'>
            <div className="top" style={{ backgroundImage: `url(${roomImage})` }}>
                <div className="center">
                    <div className='room-type'>{roomType}</div>
                    <div className="back"><Link to='/rooms' >Back To Rooms</Link></div>
                </div>
            </div>
            <div className="middle">
                <img src={bathroom} alt="room part 1" />
                <img src={settings} alt="room part 2" />
            </div>
            <div className="bottom">
                <div className="details">
                    <h3 className="topic">Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum est in totam a, saepe, praesentium tempore explicabo ipsum deserunt non illum consectetur rerum similique eligendi. Repellendus saepe aliquid quia voluptates, ab blanditiis libero doloribus, quibusdam exercitationem explicabo fuga tenetur. Tenetur deleniti dolore dolorem sapiente voluptatem cum aliquam dolorum necessitatibus ea!</p>
                </div>
                <div className="info">
                    <h3 className="title">Info</h3>
                    <ul className="features">
                        <li>Price: #{price}</li>
                        <li>Guest Limit: {guestLimit}</li>
                        <li>Free Breakfast: {breakfast ? 'Yes' : 'No'} </li>
                        <li>Free Wifi Available: {wifi ? 'Yes' : 'No'}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        room: state.hotelReducer.pickedRooms
    }
}

export default connect(mapStateToProps)(Room)
