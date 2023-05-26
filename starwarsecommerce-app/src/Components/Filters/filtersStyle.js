import styled from "styled-components"

export const CardDoFilter = styled.aside`
position: fixed;
left: 0;
border: 1px solid black;
height: 77vh;
width: 15vw;
text-align: left;
padding: 0.5rem;
font-size: 1.6rem;
background-color: white;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
border-radius: 2.5rem;

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
    width: 23vw;
    height: 50vh;
}

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    width: 30vw;
    height: 45vh;
    font-size: 1.2rem;
    
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 80vw;
    height: 40vh;
    font-size: 1.2rem;
    position: relative;
    margin-left: 10vw
}


input{
    display: block;
    margin: 0.5rem;
    width: 80%;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 2.5rem;
}
`
