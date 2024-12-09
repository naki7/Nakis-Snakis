import { useState } from 'react';
import './CheckoutPage.css';
import MiniProducts from './MiniProducts';


export const CheckoutPage = (Props) =>{
    const { activateCheckout, resetCart, totalCost } = Props;

    const [checkedOut, setCheckedOut] = useState(false);
    
    const updateCheckout = () => {
        setCheckedOut(!checkedOut);
    }

    return(
        <>
            {!checkedOut && <div className='order'>
                <button className='closeBtn' onClick={activateCheckout}/>
                <div  className="checkoutpage"> 
                    <MiniProducts updateCheckout={updateCheckout} {...Props}/>
                </div>
            </div>}
            {checkedOut && <div className='order'>
                    <button className='closeBtn' onClick={resetCart}/>
                    <div className='purchasePage'>
                        <h3>Thank You for your Purchase!</h3>
                        <p>Your <span>${totalCost}</span> worth of tasty <span>Naki's Snakis'</span> macaroons will be teleported to you soon!</p>
                        <button className='returnBtn' onClick={resetCart}>Return</button>
                    </div>
                </div>}
        </>
    )
}