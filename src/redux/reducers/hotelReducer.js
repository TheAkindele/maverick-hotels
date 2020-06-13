import { homeCarousel, roomsCarousel, hotelRoomsData } from '../../hotelData'
//import { GET_DATA } from '../actions/hotelActions'

const initialState = {
    roomsData: hotelRoomsData,
    homeCarousel,
    roomsCarousel
}

const hotelReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default hotelReducer

/*
case GET_DATA:
            return {
                ...state,
                homeCarousel: action.payload
            }
*/