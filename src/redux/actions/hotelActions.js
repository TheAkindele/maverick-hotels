export const SELECT_ROOM = 'SELECT_ROOM'
export const GET_ROOM = 'GET_ROOM'

export const selectRoom = room => dispatch => {
    dispatch({
        type: SELECT_ROOM,
        payload: room
    })
}

export const getRoom = room => ({
    type: GET_ROOM,
    payload: room
})
