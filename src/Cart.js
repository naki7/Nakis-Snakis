import React from "react";
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Cart = (Props) =>{
    const { straw, grape, caram, menth } = Props;
    let total = straw + grape + caram + menth;

    return(
        <div>{straw} {grape} {caram} {menth}
            <div className="checkout">

            </div>
            <div className="icon">
                <FontAwesomeIcon icon={faCartShopping} className="sCart" />
                <div className="count">
                    <p>{total}</p>
                </div>
            </div>
        </div>
    )
}