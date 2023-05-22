import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { OrdemProdutos, TelaPrincipal, DisposicaoCards } from "./homeStyle";

const Home = ({lista,
minFilter,
maxFilter,
searchFilter,
adicionaProduto, }) => {

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
                        <option value = "">Selecionar</option>
                        <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                    </select>
                </p>
            </OrdemProdutos>
            <DisposicaoCards>
            {lista
            .filter((item) => {
                if(searchFilter && item.name.toLowerCase().includes(searchFilter.toLowerCase())) {
                    return item;
                } else if(!searchFilter) {
                    return item;
                } 
            })
            .filter((item) => {
                return item.value >=minFilter || minFilter === ""
            })

            .filter((item) => {
                return item.value <=maxFilter || maxFilter === ""
            })
            .sort((a, b) => {
                if(ordination === "Crescente") {
                    if(a.name < b.name) {
                        return -1;
                    }
                    if(a.name > b.name) {
                        return 1;
                    }
                }
                if(ordination === "Decrescente") {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(a.name < b.name) {
                        return 1;
                    } 
                }
                return 0;
            })
            .map((produto) => {
                return(
                <ProductCard key={produto.id}
                produto = {produto} 
                adicionaProduto = {adicionaProduto}
                 />
                )
            })}
            </DisposicaoCards>
        </TelaPrincipal>
    )
}

export default Home
