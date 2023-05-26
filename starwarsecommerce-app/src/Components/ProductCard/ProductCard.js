import React from "react";
import { CardProduto} from "./productCardStyle";

const ProductCard = ({ 
    adicionaProduto,  produto,}) => {
        
        const money = (new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }). format(produto.value))
    return (
                    <CardProduto >
                        <img src={produto.imageUrl} alt="Produto" />
                        
                        <p>
                            {produto.name}
                        </p>
                        <p>
                            {money}
                        </p>
                        <button onClick={() => adicionaProduto(produto)}>
                            Adicionar ao carrinho
                        </button>
                        
                    </CardProduto>
    )
}

export default ProductCard