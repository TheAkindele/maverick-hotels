import styled from 'styled-components'

export const FlipboxStyle = styled.div`
    width: 100%;
    background: pink;
`

export const FlipcardStyle = styled.div`
    height: 200px;
    background: pink;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 480px) {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .icon{
        font-size: 1.5rem;
        padding: 10px 15px;
        border-radius: 50%;
        position: absolute;
        top: -25px;
        background: darkslategrey;
        color: white;
        border: 1px solid green;
        @media (max-width: 700px) {
            font-size: 0.9rem;
            padding: 5px 9px;
            position: relative;
            top: 0;
        }
    }

    h3{
        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
    }
    h6{
        font-size: 0.7rem;
    }
`