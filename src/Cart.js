import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = (Props) =>{
    const { straw, grape, caram, menth } = Props;

    return(
        <div>{straw} {grape} {caram} {menth}
            <div className="checkout">

            </div>
            <div className="icon">
                <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
            </div>
        </div>
    )
}