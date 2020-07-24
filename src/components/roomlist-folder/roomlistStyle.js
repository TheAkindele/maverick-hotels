import styled from 'styled-components'

export const ListContainerStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vw 0;
`

export const ListStyle = styled.div`
    width: 90%;
`

export const CardPrice = styled.div`
    padding: 10px;
    background: black;
    color: yellow;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.1rem;
    font-weight: 500;
    @media (max-width: 760px) {
        font-size: 0.8rem;
        t-weight: 300;
    }
`