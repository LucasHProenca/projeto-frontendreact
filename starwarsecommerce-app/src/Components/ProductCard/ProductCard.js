import React from "react";
import { CardProduto } from "./productCardStyle";

const ProductCard = (props) => {
    return(
        <CardProduto>
            <img src={props.lista.imageUrl} alt="Produto"/>
            <p>
                {props.lista.name}
            </p>
            <p>
                R$ {props.lista.value}
            </p>
            <button>
                Adicionar ao carrinho
            </button>
        </CardProduto>
    )
}

export default ProductCard