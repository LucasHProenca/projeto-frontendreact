import React from "react";
import { CardDoFilter } from "./filtersStyle";

const Filters = () => {
    return(
        <CardDoFilter>
            <h2>
                Filters
            </h2>
            <label for = "valorMinimo">Valor Mínimo:</label>
            <input type={Number} id="valorMinimo" placeholder="Digite o valor mínimo" name="valorMinimo"></input>

            <label for = "valorMaximo">Valor Máximo:</label>
            <input type={Number} id="valorMaximo" placeholder="Digite o valor máximo" name="valorMaximo"></input>

            <label for = "buscaNome">Busca por nome:</label>
            <input type={Text} id="buscaNome" placeholder="Digite o nome do produto" name="buscaNome"></input>
            
            
        </CardDoFilter>
    )
}

export default Filters