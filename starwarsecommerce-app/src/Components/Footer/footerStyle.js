import styled from "styled-components";

export const FooterStyle = styled.footer`
background-image: linear-gradient(to right, white, #e8ecef);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 10vh;
width: 100%;

.fale-conosco{
font-family: Helvetica, sans-serif;
font-size: 1.6rem;
text-align: center;
cursor: pointer;
}

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
    .fale-conosco{
        font-size: 1.2rem
    }
}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    .fale-conosco{
        font-size: 1.2rem;
    }
 }

 @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    .fale-conosco{
        font-size: 1.2rem;
    }
 }
`

export const RedesSociais = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1rem;
margin-bottom: 1rem;


img{
    width: 3rem;
    height: 3rem;
}

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
    img{
        width: 2rem;
        height: 2rem;
    }
}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    img{
        width: 1.6rem;
        height: 1.6rem;
    }
 }

 @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    img{
        width: 1.8rem;
        height: 1.8rem;
    }
 }
 
`