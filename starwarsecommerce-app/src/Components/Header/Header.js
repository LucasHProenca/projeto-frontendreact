import React from "react";
import { HeaderStyle } from "./headerStyle";


const Header = ({ mudarTela }) => {

    const mostrarTelaHome = () => {
        mudarTela("Home")
    }

    const mostrarTelaCart = () => {
        mudarTela("Cart")
    }
    return (
        <HeaderStyle>
            <h2>
                Oi eu sou o header
            </h2>

            <button onClick={mostrarTelaHome}>Home</button>
            <button onClick={mostrarTelaCart}>Cart</button>
        </HeaderStyle>
    )
}

export default Header