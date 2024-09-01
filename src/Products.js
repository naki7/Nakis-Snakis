import './Products.css';
import Macaron1 from './assets/Macaroon-Pink.jpg';
import Macaron2 from './assets/Macaroon-Purple.jpg';
import Macaron3 from './assets/Macaroon-Golden.jpg';
import Macaron4 from './assets/Macaroon-Green.jpg';

export const Products = () =>{

    const ProductBuilder = (Props) =>{
        return(
            <div className='card'>
                <div>
                    <img src= {Props.image} alt={Props.text}/>
                    <div className='info'>
                        <div className='text'>
                            <p>{Props.text}</p>
                            <p>{Props.price}</p>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className='products'>
            <h1>Product Range</h1>
            <div className='items'>
                <ProductBuilder image= {Macaron1} text= 'Strawberry Burst' price='$1.50'/>
                <ProductBuilder image= {Macaron2} text= 'Grape Fusion' price='$1.75'/>
                <ProductBuilder image= {Macaron3} text= 'Caramel Syrup' price='$1.99'/>
                <ProductBuilder image= {Macaron4} text= 'Menthol Mix' price='$1.50'/>
            </div>
        </div>
    )
}