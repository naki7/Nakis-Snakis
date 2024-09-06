import bowl from './assets/Macaroons-Hero.png';
import './Hero.css';

export const Hero = () => {
    return(
        <div className='hero' id='Home'>
            <img className='bowl' src={bowl} alt='bowl of macarons'/>
            <h1 className='hero-header'>NAKI'S<br/>SNAKIS</h1>
        </div>
    )
}