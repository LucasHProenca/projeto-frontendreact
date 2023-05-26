import React from "react";
import { CardDoFilter } from "./filtersStyle";

const Filters = ({ minFilter,
    onChangeMinFilter,
    maxFilter,
    onChangeMaxFilter,
    searchFilter,
    onChangeSearchFilter
 }) => {

    return (
        <CardDoFilter>
            <h2>
                Filtros
            </h2>
            <label htmlFor="valorMinimo">Valor Mínimo:
                <input min={0} type={"number"} id="valorMinimo" value={minFilter} onChange={onChangeMinFilter}></input>
            </label>
            <label htmlFor="valorMaximo">Valor Máximo:
                <input min={0} type={"number"} id="valorMaximo" value={maxFilter} onChange={onChangeMaxFilter}></input>
            </label>

            <label htmlFor="buscaNome">Busca por nome:
                <input id="buscaNome" value={searchFilter} onChange={onChangeSearchFilter}></input>
            </label>

        </CardDoFilter>
    )
}

export default Filters