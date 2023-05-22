import React from "react";
import { CardItem } from "./itemsStyle";

const Items = ({ produto, removeProduto, }) => {
    return (
        <CardItem>
            <p>
                Nome:{produto.name} Quantidade:{produto.amount}
                <button onClick={() => removeProduto(produto)}>Remover</button>
            </p>
        </CardItem>
    )
}

export default Items