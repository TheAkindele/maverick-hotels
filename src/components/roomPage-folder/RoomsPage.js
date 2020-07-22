import React from 'react'
import RoompageTop from '../roompageTop-folder/RoompageTop'
import RoomsFilter from '../roomfilter-folder/RoomsFilter'
import { RoomspageStyle } from './roomsPageStyle'

const RoomsPage = () => {
    return (
        <RoomspageStyle>
            <RoompageTop />
            <RoomsFilter />
        </RoomspageStyle>
    )
}

export default RoomsPage
