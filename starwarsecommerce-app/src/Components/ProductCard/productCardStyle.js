import styled from "styled-components";

export const CardProduto = styled.div`
display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
  height: 40vh;
  width: 20vw;

p{
    padding: 1rem;
}

button {
    width: 60%;
    margin: 0 auto;
}
`