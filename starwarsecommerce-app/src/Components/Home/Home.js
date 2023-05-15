import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { DisposicaoCards, OrdemProdutos, TelaPrincipal } from "./homeStyle";

const Home = ({lista,
cart,
onChangeCart,
amount,
onChangeAmount}) => {

    const [ordination, setOrdination] = useState("")
    const onChangeOrdination = (event) => {
        event.preventDefault()
        setOrdination(event.target.value)
    }

    console.log(ordination)

    return (
        <TelaPrincipal>
            <OrdemProdutos>
                <p className="quantidadeProdutos">
                    Quantidade de produtos: {lista.length}
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
                <ProductCard lista={lista[0]} />
                <ProductCard lista={lista[1]} />
                <ProductCard lista={lista[2]} />
            </DisposicaoCards>
        </TelaPrincipal>
    )
}

export default Home