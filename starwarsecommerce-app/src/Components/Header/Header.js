import React from "react";
import { HeaderStyle } from "./headerStyle";
import logo from "./midia/17.png"


const Header = ({ mudarTela, cart }) => {

    const mostrarTelaHome = () => {
        mudarTela("Home")
    }

    const mostrarTelaCart = () => {
        mudarTela("Cart")
    }

    let carrinho = cart.length

    const mostrarCarrinho = () => {
        if(carrinho > 0) {
            return carrinho
        } else {
            return carrinho = []
        }
    }
    return (
        <HeaderStyle>
            <img src={logo} alt = "Logo"/>

            <div>
            <h3 onClick={mostrarTelaHome}>Loja</h3>
            <p onClick={mostrarTelaCart}>🛸</p>
            <span>{mostrarCarrinho()}</span>
            </div>
        </HeaderStyle>
    )
}

export default Header