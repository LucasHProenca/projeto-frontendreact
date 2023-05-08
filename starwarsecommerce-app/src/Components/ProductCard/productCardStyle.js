import styled from "styled-components";

export const CardProduto = styled.div`
display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: thin;
  height: 60vh;
  width: 20vw;
  justify-content: flex-start;

img{
  width: 100%;
  height: 60%;
}
p{
    padding: 0.5rem;
}

button {
    width: 60%;
    margin: 0 auto;
}
`