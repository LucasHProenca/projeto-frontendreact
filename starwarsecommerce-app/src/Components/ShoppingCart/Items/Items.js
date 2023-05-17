import React from "react";
import { CardItem } from "./itemsStyle";

const Items = ({cart, removeProduto,}) => {
    console.log(cart)
    
    
    
    return (
        <CardItem>
            {cart.map((produto) => {
                return (
                    
                    <p key={produto.id}>
                        Nome:{produto.name} Quantidade:{produto.amount}
                        <button onClick={() => removeProduto(produto)}>Remover</button>
                    </p>

                    
                    
                )
            })}
        </CardItem>
    )
}

export default Items