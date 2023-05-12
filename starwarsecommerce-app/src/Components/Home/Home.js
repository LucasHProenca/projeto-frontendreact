import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DisposicaoCards, OrdemProdutos, TelaPrincipal } from "./homeStyle";

const Home = (props) => {

    const [ordination, setOrdination] = useState("")
    const onChangeOrdination = (event) => {
        event.preventDefault()
        setOrdination(event.target.value)
    }

    return (
        <TelaPrincipal>
            <OrdemProdutos>
                <p className="quantidadeProdutos">
                    Quantidade de produtos: {props.lista.length}
                </p>
                <p className="Ordenação">
                    Ordenação:
                    <select value={ordination} onChange={onChangeOrdination}>
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </p>
            </OrdemProdutos>
            <DisposicaoCards>
                <ProductCard lista={props.lista[0]} />
                <ProductCard lista={props.lista[1]} />
                <ProductCard lista={props.lista[2]} />
            </DisposicaoCards>
        </TelaPrincipal>
    )
}

export default Home