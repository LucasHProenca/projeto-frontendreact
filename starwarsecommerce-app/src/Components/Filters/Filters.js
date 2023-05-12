import React from "react";
import { CardDoFilter } from "./filtersStyle";

const Filters = ({ minFilter,
    onChangeMinFilter,
    maxFilter,
    onChangeMaxFilter,
    searchFilter,
    onChangeSearchFilter }) => {
    return (
        <CardDoFilter>
            <h2>
                Filters
            </h2>
            <label for="valorMinimo">Valor Mínimo:</label>
            <input type={Number} id="valorMinimo" placeholder="Digite o valor mínimo" name="valorMinimo" value = {minFilter} onChange = {onChangeMinFilter}></input>

            <label for="valorMaximo">Valor Máximo:</label>
            <input type={Number} id="valorMaximo" placeholder="Digite o valor máximo" name="valorMaximo" value = {maxFilter} onChange = {onChangeMaxFilter}></input>

            <label for="buscaNome">Busca por nome:</label>
            <input type={Text} id="buscaNome" placeholder="Digite o nome do produto" name="buscaNome" value = {searchFilter} onChange = {onChangeSearchFilter}></input>


        </CardDoFilter>
    )
}

export default Filters