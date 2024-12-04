import './CheckoutPage.css';
import MiniProducts from './MiniProducts';


export const CheckoutPage = (Props) =>{
    const { straw, grape, caram, menth, activateCheckout, handleAddition, handleSubtract } = Props;

    return(
        <div className='order'>
            <button className='closeBtn' onClick={activateCheckout}/>
            <div className="checkoutpage">
                <MiniProducts {...Props}/>
            </div>
        </div>
    )
}