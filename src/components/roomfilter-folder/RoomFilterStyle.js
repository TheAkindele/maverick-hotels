import Styled from 'styled-components'

export const RoomFilterStyle = Styled.div`
    width: 100%;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: pink;
    }
`

export const SearchRoomStyle = Styled.div`
    text-align: center;
        font-size: 2.7rem;
        font-weight: 900;
        color: black;
        background: white;
        padding: 2vw;

    @media (max-width: 480px) {
        font-size: 1.5rem;
        font-weight: 400;
    }
`

export const FormStyle = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding: 2vw 0;
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .option-box{
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 480px ){
            width: 90%;
            margin-bottom: 10px;
        }

        input, select {
            width: 100%;
        }
    }
`