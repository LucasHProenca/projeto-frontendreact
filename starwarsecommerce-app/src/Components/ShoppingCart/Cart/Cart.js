import React from "react";
import Items from "../Items/Items";
import { CardDoCart, TituloCart, BotaoZinho } from "./cartStyle";

const Cart = ({ cart,
     removeProduto, removeItem, adicionaProduto
}) => {
    let valorItems = cart.reduce((total, item) => total += (item.amount * item.value), 0)

    const money = (new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }). format(valorItems))

    console.log(valorItems)

    
    return (
        <CardDoCart>
            <TituloCart>
                Cart
            </TituloCart>
            {cart.map((produto) => {
                return (
            <Items key={produto.id} removeProduto={removeProduto} produto = {produto} adicionaProduto = {adicionaProduto}/>
            )
        })}
            <p>
                Valor Total: {money}
            </p>

            <BotaoZinho onClick={removeItem}>
                Limpar Carrinho
            </BotaoZinho>
        </CardDoCart>
    )
}

export default Cart