import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url(https://pbs.twimg.com/media/FvG8c6eXwAENo9b?format=jpg&name=4096x4096);
  background-size: cover; 
  color: white;

  h1 {
    font-size: 3.2rem;
    margin: 3.2rem;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 2rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin-left: 1.6rem;
  
`;

export const TextArea = styled.textarea`
padding: 0.8rem;
  margin-left: 1.6rem;
`

export const SendButton = styled.button`
  background-color: #063C91;
  border-radius: 0.8rem;
  padding: 1.6rem;
  width: 20rem;
  border: none;
  color: white;
  margin-top: 3.2rem;
  cursor: pointer;
  font-weight: bold;
`;

export const StyledLabel = styled.label`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;