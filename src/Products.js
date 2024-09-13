import './Products.css';
import Macaron1 from './assets/Macaroon-Pink.jpg';
import Macaron2 from './assets/Macaroon-Purple.jpg';
import Macaron3 from './assets/Macaroon-Golden.jpg';
import Macaron4 from './assets/Macaroon-Green.jpg';
import { useState } from 'react';
import { Cart } from './Cart.js';

export const Products = () =>{

    const [straw, setStraw] = useState(0);
    const [grape, setGrape] = useState(0);
    const [caram, setCaram] = useState(0);
    const [menth, setMenth] = useState(0);


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
                        <button onClick={()=>{handleAddition(Props.codeW)} }>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }

    const handleAddition = (codeW) =>{
        console.log(codeW)
        if(codeW === 'straw'){
            console.log(straw);
            return setStraw(straw + 1);
        } else if(codeW === 'grape'){
            return setGrape(grape + 1);
        } else if(codeW === 'caram'){
            return setCaram(caram + 1);
        } else if(codeW === 'menth'){
            return setMenth(menth + 1);
        }
        return console.log(straw, grape, caram, menth);
    }

    return(
        <div className='products' id='Products'>
            <h1>Product Range</h1>
            <div className='items'>
                <ProductBuilder image= {Macaron1} text= 'Strawberry Burst' price='$1.50' codeW='straw'/>
                <ProductBuilder image= {Macaron2} text= 'Grape Fusion' price='$1.75' codeW='grape'/>
                <ProductBuilder image= {Macaron3} text= 'Caramel Syrup' price='$1.99' codeW='caram'/>
                <ProductBuilder image= {Macaron4} text= 'Menthol Mix' price='$1.50' codeW='menth'/>
            </div>
            <Cart straw={straw} grape={grape} caram={caram} menth={menth}/>
        </div>
    )
}