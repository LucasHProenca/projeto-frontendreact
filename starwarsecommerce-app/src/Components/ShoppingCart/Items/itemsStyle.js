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
  font-size: 1.6rem;


img{
  width: 30%;
  height: 100%;
  border-radius: 2.5rem;
}
p{
    padding: 0.5rem;
}


`

export const Button = styled.button`
text-align: left;
`