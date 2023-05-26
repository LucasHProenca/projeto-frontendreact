import styled from "styled-components";

export const HeaderStyle = styled.header`
background-image: linear-gradient(to right, white, #e8ecef);
top: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 3.2rem;
height: 10vh;
width: 100%;

img{
width: 10%;
}

div{
display: flex;
flex-direction: row;
margin-left: 75%;
justify-content: flex-end;
gap: 1rem;
font-size: 2rem;
}

p:hover{
transform: scale(0.8);
cursor: pointer;
}

span{
width: cover;
height: cover;
position: absolute;
font-size: 1.6rem;
top: 0;
margin-top: 1.5rem;
background-color: #1289AB;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
border-radius: 2.5rem;
}

h3:hover{
transform: scale(0.8);
cursor: pointer;
}

@media screen and (min-device-width : 801px) and (max-device-width : 1000px) {
div{
    margin-left: 70%;
    font-size: 1.6rem;
}
span{
    font-size: 1.2rem;
    margin-top: 0.8rem;
}
}

@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    div{
        margin-left: 55%;
        font-size: 1.4rem;
    }
    span{
        font-size: 1rem;
        margin-top: 0.8rem;
    }
    img{
        width: 20%;
    }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        div{
            margin-left: 35%;
            font-size: 1.4rem;
        }

        img{
            width: 30%;
        }

        span{
            font-size: 1rem;
            margin-top: 2vh;
        }
     }
`

