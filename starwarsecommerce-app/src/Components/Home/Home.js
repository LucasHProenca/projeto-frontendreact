import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { OrdemProdutos, TelaPrincipal, DisposicaoCards } from "./homeStyle";

const Home = ({ lista,
    minFilter,
    maxFilter,
    searchFilter,
    adicionaProduto,
}) => {

    const [ordination, setOrdination] = useState("")
    const onChangeOrdination = (event) => {
        event.preventDefault()
        setOrdination(event.target.value)
    }

    const result = lista
        .filter((item) => {
            if (searchFilter && item.name.toLowerCase().includes(searchFilter.toLowerCase())) {
                return item;
            } else if (!searchFilter) {
                return item;
            }
        })
        .filter((item) => {
            return item.value >= minFilter || minFilter === ""
        })

        .filter((item) => {
            return item.value <= maxFilter || maxFilter === ""
        })
        .sort((a, b) => {
            if (ordination === "Crescente") {
                if (a.value < b.value) {
                    return -1;
                }
                if (a.value > b.value) {
                    return 1;
                }
            }
            if (ordination === "Decrescente") {
                if (a.value > b.value) {
                    return -1;
                }
                if (a.value < b.value) {
                    return 1;
                }
            }
            return 0;
        })
        .sort((a, b) => {
            if(ordination === "A-z") {
                if(a.name < b.name) {
                    return -1;
                }
                if(a.name > b.name) {
                    return 1;
                }
            }
            if(ordination === "Z-a") {
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
            return (
                <ProductCard key={produto.id}
                    produto={produto}
                    adicionaProduto={adicionaProduto}

                />
            )
        })

    return (
        <TelaPrincipal>
            <OrdemProdutos>
                <p className="quantidadeProdutos">
                    Quantidade de produtos: {result.length}
                </p>
                <p className="Ordenação">
                    Ordenação:
                    <select value={ordination} onChange={onChangeOrdination}>
                        <option value="">Selecionar</option>
                        <option value="Crescente">Menor Preço</option>
                        <option value="Decrescente">Maior Preço</option>
                        <option value="A-z">De A a Z</option>
                        <option value="Z-a">De Z a A</option>
                    </select>
                </p>
            </OrdemProdutos>
            <DisposicaoCards>
                {result}
            </DisposicaoCards>
        </TelaPrincipal>
    )
}

export default Home
