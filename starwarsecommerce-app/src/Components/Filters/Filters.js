import React from "react";
import { CardDoFilter } from "./filtersStyle";

const Filters = ({ minFilter,
    onChangeMinFilter,
    maxFilter,
    onChangeMaxFilter,
    searchFilter,
    onChangeSearchFilter }) => {

    console.log(minFilter)
    console.log(maxFilter)
    console.log(searchFilter)

    return (
        <CardDoFilter>
            <h2>
                Filters
            </h2>
            <label htmlFor="valorminimo">Valor Mínimo:
                <input min={0} type={"number"} id="valorMinimo" placeholder="Digite o valor mínimo" value={minFilter} onChange={onChangeMinFilter}></input>
            </label>
            <label htmlFor="valorMaximo">Valor Máximo:
                <input min={0} type={"number"} id="valorMaximo" placeholder="Digite o valor máximo" value={maxFilter} onChange={onChangeMaxFilter}></input>
            </label>

            <label htmlFor="buscaNome">Busca por nome:
                <input id="buscaNome" placeholder="Digite o nome do produto" value={searchFilter} onChange={onChangeSearchFilter}></input>
            </label>


        </CardDoFilter>
    )
}

export default Filters