import React from "react";
import { FooterStyle, RedesSociais } from "./footerStyle";
import logo1 from "./midia/12.png"
import logo2 from "./midia/13.png"
import logo3 from "./midia/14.png"
import logo4 from "./midia/15.png"
import logo5 from "./midia/16.avif"


const Footer = ({mudarTela}) => {

    const mostrarTelaSugestao = () => {
        mudarTela("Sugestões")
    }
    return(
        <FooterStyle>
            <p className="fale-conosco" onClick={mostrarTelaSugestao}>Fale Conosco</p>
            <RedesSociais>
            <a className="icones" href="https://github.com/LucasHProenca" target={"_blank"}>
                <img src= {logo1} alt = "GitHub-Logo"></img>
            </a>
            <a className="icones" href="https://www.linkedin.com/in/lucas-proen%C3%A7a-512650106/" target={"_blank"}>
                <img src= {logo2} alt = "Linkedin-Logo"></img>
            </a>
            <a className="icones" href="https://www.instagram.com/_lukehp/" target={"_blank"}>
                <img src= {logo3} alt = "Instagram-Logo"></img>
            </a>
            <a className="icones" href="https://www.facebook.com/LucasHProenca" target={"_blank"}>
                <img src= {logo4} alt = "Facebook-Logo"></img>
            </a>
            <a className="icones" href="https://accounts.google.com/v3/signin/identifier?dsh=S-787958717%3A1682547818139924&authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=pt-BR&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession" target={"_blank"}>
                <img src= {logo5} alt = "Email-Logo"></img>
            </a>
            </RedesSociais>
        </FooterStyle>
    )
}

export default Footer