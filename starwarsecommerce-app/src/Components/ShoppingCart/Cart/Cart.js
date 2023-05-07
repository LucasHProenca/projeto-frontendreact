import React from "react";
import Items from "../Items/Items";
import { CardDoCart } from "./cartStyle";

const Cart = () => {
    return(
        <CardDoCart>
            <h2>
                Cart
            </h2>
            <Items/>
        </CardDoCart>
    )
}

export default Cart