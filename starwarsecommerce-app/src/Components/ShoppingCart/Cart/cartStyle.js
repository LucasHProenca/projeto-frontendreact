import styled from "styled-components";

export const CardDoCart = styled.section`
display: flex;
flex-direction: column;
text-align: left;
width: 100%;
min-height: 100vh;
padding: 0.5rem;
align-items: center;
font-size: 1.6rem;
margin-bottom: 10vh;

`

export const BotaoZinho = styled.button`
background-color: white;
  border-radius: 0.8rem;
  padding: 1.6rem;
  width: 20rem;
  border: none;
  color: black;
  margin-top: 3.2rem;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height: 8vh;
    
  }
`

export const TituloCart = styled.h2`
text-align: center;
font-size: 4rem;
color: white;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  font-size: 3rem;
}
`

export const ValorTotal = styled.h3`
color: white;
font-size: 2.5rem;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  font-size: 2rem;
}
`


