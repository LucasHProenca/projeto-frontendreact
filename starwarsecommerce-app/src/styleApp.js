import styled from "styled-components";

export const Principal = styled.main`
display:flex;
width: 100%;
flex-direction: row;
background-image: url(https://pbs.twimg.com/media/FvG8c6eXwAENo9b?format=jpg&name=4096x4096);
background-size: cover;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    flex-direction: column;
    }
`

export const Corpo = styled.body`
display: flex;
flex-direction: column;
width: 100%;
`

// #1F304A, #10284C, #08090D
// #256793, #1289AB, #203646 
// #063C91, #021C58, #01060F


