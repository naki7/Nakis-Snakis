import React from "react";
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Cart = (Props) =>{
    const { straw, grape, caram, menth, activateCheckout } = Props;
    let total = straw + grape + caram + menth;

    return(
        <div>
            {(total > 0) && <div className="icon" onClick={activateCheckout}>
                <FontAwesomeIcon icon={faCartShopping} className="sCart" />
                <div className="count">
                    <p>{total}</p>
                </div>
            </div>}
        </div>
    )
}