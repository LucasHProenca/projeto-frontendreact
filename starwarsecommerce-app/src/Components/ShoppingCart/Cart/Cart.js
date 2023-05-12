import React from "react";
import Items from "../Items/Items";
import { CardDoCart } from "./cartStyle";

const Cart = ({cart,
onChangeCart,
amount,
onChangeAmount}) => {
    return(
        <CardDoCart>
            <h2>
                Cart
            </h2>
            <Items/>
            <p value = {amount} onChange = {onChangeAmount}>
                Valor Total: 
            </p>
        </CardDoCart>
    )
}

export default Cart