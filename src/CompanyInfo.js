import './CompanyInfo.css';
import baker from './assets/baker.jpg';

export const CompanyInfo = () =>{
    return(
        <div className='compInfo'>
            <p>What started as a small Macaron shop in a small city has become a large scale delivery system for the whole nation!</p>
            <div className='compImg'>
                <img src={baker} alt='baker'/>
            </div>
        </div>
    )
}