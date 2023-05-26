import styled from "styled-components";

export const CardProduto = styled.div`
display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2.5rem;
  height: 60vh;
  width: 15vw;
  justify-content: flex-start;
  background-color: white;
  padding: 1rem;

  :hover{
    transform: scale(1.05)
  }

  :hover button{
    display: inline;
  }

img{
  width: 100%;
  height: 60%;
  border-radius: 2.5rem;
}

p{
    text-align: center;
    font-size: 1.8rem
    max-width: 15ch;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}

button {
  display: none;
  cursor: pointer;
    width: 60%;
    height: 10%;
    margin: 0 auto;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 2.5rem;
    font-size: 1.6rem;
}

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
  width: 20vw;
  height: 50vh;

  img{
    height: 50%;
  }
  p{
    font-size: 1.4rem;
  }

  button{
    font-size: 1rem;
  }
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 30vw;

    img{
      height: 50%;
    }

    p{
      font-size: 1.4rem;
    }

    button{
      font-size: 1rem;
    }
 }

 @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  width: 80vw;
  margin-bottom: 1rem;

  img{
    height: 60%;
  }

  p{
    font-size: 1.6rem;
  }

  button{
    font-size: 1rem;
  }
}

  
`


