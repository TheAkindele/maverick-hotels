import styled from 'styled-components'

export const FooterStyle = styled.div`
    background: dimgray;
    padding: 30px 0;

    .container{
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 480px) {
            width: 80%;
        }

        a{
            .git{color: black}
        }
    }
`