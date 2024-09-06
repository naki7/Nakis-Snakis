import './Navbar.css';
import { useState } from 'react';

export const Navbar = () =>{

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 95){
            setColor(true);
        } else{
            setColor(false);
        }
    }
    window.addEventListener('scroll', changeColor);

    const [logoT, setLogoT] = useState(true);
    const changeLogo = () =>{
        if(window.scrollY >= 600){
            setLogoT(false);
        } else{
            setLogoT(true);
        }
    }
    window.addEventListener('scroll', changeLogo);


    return(
        <div className={color ? 'navbar navbar-blur' : 'navbar'}>
            <div className={logoT ? 'logo logo-hide' : 'logo'}>
                <h1>NAKI'S<br/>SNAKIS</h1>
            </div>
            <div className="nav">
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Products'>Product Range</a></li>
                    <li><a href='#Footer'>Locations</a></li>
                </ul>
            </div>
        </div>
    )
}