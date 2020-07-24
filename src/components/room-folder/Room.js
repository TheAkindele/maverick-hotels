import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { RoomStyle, RoomTopStyle, RoomMiddlestyle, RoomBottomStyle } from './roomStyle'
import { CentralDiv } from '../roompageTop-folder/RoompageTopstyle'

const Room = ({ room }) => {
    //console.log('room= ', room)
    const { breakfast, guestLimit, price, roomImage, roomType, wifi } = room
    const { bathroom, settings } = room.others
    return (
        <RoomStyle>
            <RoomTopStyle style={{ backgroundImage: `url(${roomImage})` }}>
                <CentralDiv>
                    <p>{roomType}</p>
                    <div className="home"><Link to='/rooms' >Back To Rooms</Link></div>
                </CentralDiv>
            </RoomTopStyle>
            <RoomMiddlestyle>
                <div className="images">
                    <img src={bathroom} alt="room part 1" />
                    <img src={settings} alt="room part 2" />
                </div>
            </RoomMiddlestyle>
            <RoomBottomStyle>
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
            </RoomBottomStyle>
        </RoomStyle>
    )
}

const mapStateToProps = state => {
    return {
        room: state.hotelReducer.pickedRooms
    }
}

export default connect(mapStateToProps)(Room)
