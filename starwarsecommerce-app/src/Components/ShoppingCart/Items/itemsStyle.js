import styled from "styled-components";

export const CardItem = styled.div`
display: flex;
  flex-direction: row;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2.5rem;
  height: 20vh;
  width: 40vw;
  align-item: center;
  margin: 1vh;
  font-size: 1.8rem;
  background-color: white;

img{
  width: 30%;
  height: 100%;
  border-radius: 2.5rem;
}
p{
    padding: 0.5rem;
}

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
  height: 25vh;
  width: 50vw;
  font-size: 1.5rem;

  img{
    width: 40%;
  }
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    height: 35vh;
    width: 60vw;
    font-size: 1.5rem;

    img{
      width: 40%;
    }
 }

 @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  height: 35vh;
  width: 80vw;
  font-size: 1.5rem;

  img{
    width: 40%;
  }
}
`

export const Button = styled.button`
text-align: left;
border-radius: 1rem;
`

