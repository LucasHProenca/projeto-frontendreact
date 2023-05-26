import styled from "styled-components";

export const TelaPrincipal = styled.section`
margin-left: 17%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 83%;
min-height: 75vh;
font-size:2rem;
margin-bottom: 11vh;

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
    margin-left: 25%;
    width: 75%;
    }
 @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    margin-left: 32%;
    width: 68%;
     }

     @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-left: 10vw;
    width: 80%;
    
     }
`
export const OrdemProdutos = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 5rem;
align-items: center;
width: 100%;
color: white;

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
    width: 60%;
}

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        width: 90%;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        font-size:1.4rem;
    }
`

export const DisposicaoCards = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;
 gap: 1rem;
 width: 100%;
 flex-wrap: wrap;

 `