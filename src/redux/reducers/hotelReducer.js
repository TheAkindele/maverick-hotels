import { homeCarousel, roomsCarousel, hotelRoomsData } from '../../hotelData'
import { SELECT_ROOM, GET_ROOM } from '../actions/hotelActions'

const initialState = {
    roomsData: hotelRoomsData,
    pickedRooms: hotelRoomsData,
    homeCarousel,
    roomsCarousel
}

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ROOM:
            //console.log('clicked room ', action.payload)
            return ({
                ...state,
                pickedRooms: action.payload
            })

        case GET_ROOM:
            //console.log('room result')
            return ({
                ...state,
                pickedRooms: action.payload
            })

        default:
            return state
    }
}

export default hotelReducer
