import Styled from 'styled-components'

export const TopDivStyle = Styled.div`
    height: 70vh;
    width: 100%;
    background-image: url('https://i.ibb.co/FxJ4q4n/room-1.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CentralDiv = Styled.div`
    width: 25%;
    height: 40%;
    background: darkslategrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 70%;
    @media (max-width: 480px) {
        width: 60%;
        height: 40%;
    }
    @media (max-width: 768px) {
        width: 40%;
        height: 40%;
    }

    p{
        font-size: 2.5rem;
        font-weight: 900;
        color: white;
        text-transform: capitalize;
        @media (max-width: 480px) {
            font-size: 0.8rem;
            font-weight: 300;
        }
        @media (max-width: 768px) {
            font-size: 1.9rem;
            font-weight: 600;
        }
    }

    .home{
        background: rgb(206, 146, 69);
        color: yellow;
        padding: 1vw 2vw;
        font-size: large;
        font-weight: bold;
        text-transform: uppercase;

        @media (max-width: 480px) {
            font-size: small;
            font-weight: bold;
        }
    }
`