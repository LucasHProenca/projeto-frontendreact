import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DisposicaoCards, OrdemProdutos, TelaPrincipal } from "./homeStyle";

const Home = () => {
    return (
        <TelaPrincipal>
            <OrdemProdutos>
            <p className="quantidadeProdutos">
                Quantidade de produtos:
            </p>
            <p className="Ordenação">
                Ordenação: 
                <button>Crescente</button>
            </p>
            </OrdemProdutos>
            <DisposicaoCards>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </DisposicaoCards>
        </TelaPrincipal>
    )
}

export default Home