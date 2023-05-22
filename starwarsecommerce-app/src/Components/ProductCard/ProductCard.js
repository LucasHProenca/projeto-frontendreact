import React from "react";
import { CardProduto, TesteCard } from "./productCardStyle";

const ProductCard = ({ 
    adicionaProduto,  produto }) => {
        
    return (
                    <CardProduto >
                        <img src={produto.imageUrl} alt="Produto" />
                        <p>
                            {produto.name}
                        </p>
                        <p>
                            R$ {produto.value}
                        </p>
                        <button onClick={() => adicionaProduto(produto)}>
                            Adicionar ao carrinho
                        </button>
                    </CardProduto>
    )
}

export default ProductCard