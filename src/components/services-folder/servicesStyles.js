import styled from 'styled-components'

export const ServicesStyle = styled.div`
    background-color: peru;
    padding: 2vw 0;
`

export const TitleStyle = styled.div`
    padding: 2vw 0;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 600;
    @media (max-width: 480px) {
        font-size: 1.5rem;
        font-weight: 500;
        padding: 3vw 0;
    }
    
    span{
        padding: 5px;
        border-bottom: 3px solid lawngreen;
    }
`

export const ServiceBoxStyle = styled.div`
    padding: 2vw 0;
`

export const ServiceStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title{
        color: lawngreen;
        @media (max-width: 480px) {
        font-size: 1.1rem;
        font-weight: 400;
    }
    }

    .body{
        text-align: center;
        color: white;
    }
`