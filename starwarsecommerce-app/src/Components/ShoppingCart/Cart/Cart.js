import React from "react";
import Items from "../Items/Items";
import { CardDoCart } from "./cartStyle";

const Cart = ({ cart,
     removeProduto

}) => {
    let valorItems = cart.reduce((total, item) => total += (item.amount * item.value), 0)

    const money = (new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }). format(valorItems))

    console.log(valorItems)
    return (
        <CardDoCart>
            <h2>
                Cart
            </h2>
            {cart.map((produto) => {
                return (
            <Items key={produto.id} removeProduto={removeProduto} produto = {produto} />
            )
        })}
            <p>
                Valor Total: {money}
            </p>

        </CardDoCart>
    )
}

export default Cart