import Styled from 'styled-components'

export const RoomStyle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`
export const RoomTopStyle = Styled.div`
    height: 70vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const RoomMiddlestyle = Styled.div`
    width: 100%;
    padding: 3vw;
    height: 40vh;

    .images {
        width: 80%;
        height: 85%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        border: 1x solid red;

        img {
            width: 40%;
            height: 100%;
        }
    }

    @media (max-width: 480px) {
        height: 30vh;
    }
`

export const RoomBottomStyle = Styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .details {
        width: 60%;
    }
    .info {
        width: 32%;
    }

    @media (max-width: 480px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .details {
            width: 85%;
        }
        .info {
            width: 80%;
        }
    }
    
` 