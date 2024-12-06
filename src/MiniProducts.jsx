import Macaron1 from './assets/Macaroon-Pink.jpg';
import Macaron2 from './assets/Macaroon-Purple.jpg';
import Macaron3 from './assets/Macaroon-Golden.jpg';
import Macaron4 from './assets/Macaroon-Green.jpg';

function MiniProducts(Props) {
    const { straw, grape, caram, menth, handleAddition, handleSubtract, totalCost } = Props;

    let strawTrue = (straw > 0) ? true : false;
    let grapeTrue = (grape > 0) ? true : false;
    let caramTrue = (caram > 0) ? true : false;
    let menthTrue = (menth > 0) ? true : false;



    const MiniBuilder = (Props) => {
        let cost = Props.price * Props.flavor;
        return (
            <div className='mini'>
                <button onClick={() => { handleSubtract(Props.codeW) }}>-</button>
                <div className='flavorBox'>
                    <img src={Props.image} alt={Props.text} />
                    <div className='flavorTotal'>
                        <p>{Props.flavor}</p>
                    </div>
                </div>
                <button onClick={() => { handleAddition(Props.codeW) }}>+</button>
                <p className='flavorCost'>{`$${(cost).toFixed(2)}`}</p>
            </div>
        )
    }


    return (
        <>
            <div className='miniGroup'>
                {strawTrue && <MiniBuilder flavor={straw} image={Macaron1} text='Strawberry Burst' price='1.50' codeW='straw' />}
                {grapeTrue && <MiniBuilder flavor={grape} image={Macaron2} text='Grape Fusion' price='1.75' codeW='grape' />}
                {caramTrue && <MiniBuilder flavor={caram} image={Macaron3} text='Caramel Syrup' price='1.99' codeW='caram' />}
                {menthTrue && <MiniBuilder flavor={menth} image={Macaron4} text='Menthol Mix' price='1.50' codeW='menth' />}
            </div>
            <div className='bottomModal'>
                <div className='finalAmount'>
                    <h3>Total:</h3>
                    <p>${(totalCost).toFixed(2)}</p>
                </div>
                <div className='checkoutBtns'>
                    <button className='clear'>Clear</button>
                    <button className='pay'>Purchase</button>
                </div>
            
            </div>
        
        </>
    )
}

export default MiniProducts