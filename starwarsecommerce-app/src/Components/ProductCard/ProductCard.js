import React from "react";
import { CardProduto, TesteCard } from "./productCardStyle";

const ProductCard = ({ lista, cart,
    onChangeCart,
    amount,
    onChangeAmount,
    adicionaProduto }) => {
    return (
        <TesteCard>
            {lista.map((produto) => {
                return(
                    <CardProduto key={produto.id}>
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
            })}
        </TesteCard>
    )
}

export default ProductCard