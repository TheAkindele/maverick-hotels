import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoomsList from './RoomsList'


class RoomsFilter extends Component {
    state = {
        rooms: [],
        filteredRooms: [],
        guestLimit: 1,
        price: 0
    }

    //static getDerivedStateFromProps(props, state) {
    //    return { rooms: props.roomsData }
    //}
    componentDidMount() {
        this.setState({
            rooms: this.props.roomsData
        })
    }

    handleFilter = (e) => {
        const { roomsData } = this.props
        const { value, name } = e.target
        console.log('name= ', name)
        console.log('the value= ', value)

        //// Room type
        if (isNaN(value) && value !== 'all') {
            const roomFilter = roomsData.filter(rooms => (
                rooms.roomType === value
            ))
            console.log('room type= ', roomFilter)
            this.setState({
                //...this.state,
                rooms: roomFilter
            })
        }
        else if (value === 'all') {
            this.setState({
                rooms: roomsData
            })
        }

        ///To set gues limit
        else if (value.toString().length === 1 && value > 0) {
            const roomFilter = roomsData.filter(room => (
                room.guestLimit >= value
            ))
            console.log('guest limit= ', roomFilter)
            this.setState({
                rooms: roomFilter
            })
        }

        ///To set price
        else if (parseInt(value) !== 0) {
            const roomFilter = roomsData.filter(room => (
                room.price === parseInt(value)
            ))
            console.log('room price= ', roomFilter)
            this.setState({
                rooms: roomFilter
            })
        }

        // To check for breakfast
        else if (value = true && value === 'false') {
            const roomFilter = roomsData.filter(room => (
                room.breakfast === 'true'
            ))
            console.log('breakfast= ', roomFilter)
            this.setState({
                rooms: roomFilter
            })
        }

        else {
            const roomFilter = roomsData
            console.log('else= ', roomFilter)
            return this.setState({
                rooms: roomFilter
            })
        }
    }

    render() {
        console.log('mounted state= ', this.state.rooms)
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

                        <div className="check">
                            <div className="option">
                                <input type="checkbox" name="food" id="food" checked={false} onChange={this.handleFilter} />
                                <label htmlFor="food">Breakfast</label>
                            </div>

                            <div className="option" onChange={this.handleFilter}>
                                <input type="checkbox" name="wifi" id="wifi" />
                                <label htmlFor="wifi">WiFi</label>
                            </div>
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
                    {this.state.rooms ?
                        <RoomsList roomsList={this.state.rooms} />
                        : 'no item to show'}

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log('mapStateToProps ', state)
    return {
        roomsData: state.hotelReducer.roomsData
    }
}

export default connect(mapStateToProps)(RoomsFilter)
