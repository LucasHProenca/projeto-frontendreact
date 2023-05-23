import styled from "styled-components";

export const CardProduto = styled.div`
display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2.5rem;
  height: 60vh;
  width: 15vw;
  justify-content: flex-start;

img{
  width: 100%;
  height: 60%;
  border-radius: 2.5rem;
}
p{
    padding: 0.5rem;
}

button {
    width: 60%;
    margin: 0 auto;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 2.5rem;
}
`
