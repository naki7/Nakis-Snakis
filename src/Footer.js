import './Footer.css';
import { useState } from 'react';

export const Footer = () =>{

    const [factory, setFactory] = useState(false);
    const [office, setOffice] = useState(false);
    const [contact, setContact] = useState(false);

    const switchOpen = (option) =>{
         if(option === 'fact'){
            setFactory(!factory);
            setOffice(false);
            setContact(false);
          } else if(option === 'offi'){
            setOffice(!office);
            setFactory(false);
            setContact(false);
        } else if('cont'){
            setContact(!contact);
            setFactory(false);
            setOffice(false);
        }
    }

    return(
        <div className="Footer">
            <div className='information'>
                <section>
                    <div className="factory">
                        <h3 onClick={(e) => switchOpen('fact')}>Factory Address</h3>
                        <p className={factory ? "address" : "address isHidden"}>25 Naki Street,<br/>Snack City,<br/>West Snacklandia,<br/>United Snackdom</p>         
                    </div>
                    <div className='office'>
                        <h3 onClick={(e) => switchOpen('offi')}>Office Address</h3>
                        <p className={office ? "address" : "address isHidden"}>16 Naki Avenue,<br/>Snack City,<br/>West Snacklandia,<br/>United Snackdom</p>   
                    </div>
                </section>
                <section>
                    <div className="contact">
                        <h3 onClick={(e) => switchOpen('cont')}>You can reach us on:</h3>
                        <p className={contact ? "" : "isHidden"}>nakissnakis@snackmail.co.snacks</p>
                        <p className={contact ? "" : "isHidden"}>(+099) 196 1960</p>
                    </div>
                    <div className="portfolio">
                        <h3>This is a portfolio piece:</h3>
                        <p>created by Joshua 'Naki' Neves</p>
                        <a href="www.nakineves.com" tabIndex='1' target="_blank"><p>Click Here to access my portfolio</p></a>
                        <p>LinkedIn</p>
                    </div>
                </section>
            </div>
        </div>
    )
}