import React from "react";
import { CardItem, Button, } from "./itemsStyle";

const Items = ({ produto, removeProduto, adicionaProduto }) => {
    const money = (new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }). format(produto.value))
    return (
        <CardItem>
            <img src={produto.imageUrl} alt="Produto" />

            <div>
            <p>
            {produto.name}
            </p>

            <p>
            {money}
            </p>
            
            <p>
            <Button onClick={() => removeProduto(produto)}>-</Button>
            {produto.amount}
            <Button onClick={() => adicionaProduto(produto)}>+</Button>
            </p>
            </div>
        </CardItem>
    )
}

export default Items