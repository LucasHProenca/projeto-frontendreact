import React from "react";
import { CardProduto } from "./productCardStyle";

const ProductCard = () => {
    return(
        <CardProduto>
            <img src="" alt="Produto"/>
            <p>
                Nome do Produto:
            </p>
            <p>
                Valor:
            </p>
            <button>
                Adicionar ao carrinho
            </button>
        </CardProduto>
    )
}

export default ProductCard