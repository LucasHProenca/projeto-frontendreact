import React from "react";
import Items from "../Items/Items";
import { CardDoCart, TituloCart, BotaoZinho, ValorTotal } from "./cartStyle";

const Cart = ({ cart,
    removeProduto, removeItem, adicionaProduto, mudarTela
}) => {
    let valorItems = cart.reduce((total, item) => total += (item.amount * item.value), 0)

    const money = (new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(valorItems))

    console.log(valorItems)

    const mostrarTelaHome = () => {
        if(cart.length > 0) {
            mudarTela("Informações")
        }else {
            alert("Seu carrinho está vazio")
        }
        
    }
    return (
        <CardDoCart>
            <TituloCart>
                Carrinho
            </TituloCart>
            {cart.map((produto) => {
                return (
                    <Items key={produto.id} removeProduto={removeProduto} produto={produto} adicionaProduto={adicionaProduto} />
                )
            })}
            <ValorTotal>
                Valor Total: {money}
            </ValorTotal>
            <p>
                <BotaoZinho onClick={removeItem}>
                    Limpar Carrinho
                </BotaoZinho>
                <BotaoZinho onClick={mostrarTelaHome}>
                    Comprar
                </BotaoZinho>
            </p>
        </CardDoCart>
    )
}

export default Cart