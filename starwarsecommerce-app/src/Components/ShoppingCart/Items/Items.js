import React from "react";
import { CardItem } from "./itemsStyle";

const Items = () => {
    return (
        <CardItem>
            <p>
                x0 Nome do Produto
                <button>Remover</button>
            </p>
            <p>
                Valor Total: 0
            </p>
        </CardItem>
    )
}

export default Items