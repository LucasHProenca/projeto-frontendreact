import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DisposicaoCards, OrdemProdutos, TelaPrincipal } from "./homeStyle";

const Home = (props) => {
    return (
        <TelaPrincipal>
            <OrdemProdutos>
            <p className="quantidadeProdutos">
                Quantidade de produtos: {props.lista.length}
            </p>
            <p className="Ordenação">
                Ordenação: 
                <button>Crescente</button>
            </p>
            </OrdemProdutos>
            <DisposicaoCards>
            <ProductCard lista = {props.lista[0]}/>
            <ProductCard lista = {props.lista[1]}/>
            <ProductCard lista = {props.lista[2]}/>
            </DisposicaoCards>
        </TelaPrincipal>
    )
}

export default Home