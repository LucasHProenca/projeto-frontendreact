import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { OrdemProdutos, TelaPrincipal } from "./homeStyle";

const Home = ({lista,
cart,
onChangeCart,
amount,
onChangeAmount,
adicionaProduto}) => {

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
                <ProductCard lista = {lista} 
                cart = {cart} 
                onChangeCart = {onChangeCart} 
                amount = {amount} 
                onChangeAmount = {onChangeAmount} 
                adicionaProduto = {adicionaProduto} />
        </TelaPrincipal>
    )
}

export default Home
