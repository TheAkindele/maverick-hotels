import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomsList from './RoomsList'


class RoomsFilter extends Component {
    state = {
        rooms: this.props.roomsData,
        filteredRooms: ''
    }

    handleFilter = (e) => {
        const { rooms } = this.state
        //const { roomsData } = this.props
        const { value } = e.target

        //// Room type
        if (isNaN(value) && value !== 'all') {
            const roomFilter = rooms.filter(rooms => (
                rooms.roomType === value
            ))
            //console.log('room type= ', roomFilter)
            this.setState({
                //...this.state,
                filteredRooms: roomFilter
            })
        }
        else if (value === 'all') {
            this.setState({
                filteredRooms: rooms
            })
        }

        ///To set gues limit
        else if (value.toString().length === 1 && value > 0) {
            const roomFilter = rooms.filter(room => (
                room.guestLimit >= value
            ))
            this.setState({
                filteredRooms: roomFilter
            })
        }

        ///To set price
        else if (parseInt(value) !== 0) {
            const roomFilter = rooms.filter(room => (
                room.price === parseInt(value)
            ))
            this.setState({
                filteredRooms: roomFilter
            })
        }

        else {
            const roomFilter = rooms
            return this.setState({
                filteredRooms: roomFilter
            })
        }
    }

    render() {
        //console.log('rooms = ', this.state.rooms)
        //console.log('filtered= ', this.state.filteredRooms)
        const { guestLimit } = this.state
        return (
            <div className='room-filter'>
                <div className="search-room">
                    Search Room
                </div>
                <div className="filter">
                    <form >
                        <div className="option-box">
                            <label htmlFor="room-type" >Room Type</label>
                            <select name="room-type" id="room-type" onChange={this.handleFilter}>
                                <option value="all">all</option>
                                <option value="presidential palace">Presidential Palace</option>
                                <option value="executive standard">Executive Standard</option>
                                <option value="deluxe room">Deluxe Room</option>
                            </select>
                        </div>

                        <div className="option-box">
                            <label htmlFor="guest"> Guest Limit {guestLimit} </label>
                            <input type="range" name="guest" id="guest" defaultValue={1} min='1' max='5' step='1' onChange={this.handleFilter} />
                        </div>

                        <div className="option-box">
                            <label htmlFor="price">Price</label>
                            <select name="price" id="price" onChange={this.handleFilter}>
                                <option value="25000">25000</option>
                                <option value="30000">30000</option>
                                <option value="35000">35000</option>
                                <option value="45000">45000</option>
                                <option value="50000">50000</option>
                                <option value="70000">70000</option>
                                <option value="80000">80000</option>
                                <option value="99999">99999</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className='rooms-show'>
                    {
                        this.state.filteredRooms ? (<RoomsList theRoomsList={this.state.filteredRooms} />)
                            : (<RoomsList theRoomsList={this.state.rooms} />)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        roomsData: state.hotelReducer.roomsData
    }
}

export default connect(mapStateToProps)(RoomsFilter)
