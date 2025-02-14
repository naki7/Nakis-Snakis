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
        <div className="Footer" id='Footer'>
            <div className='information'>
                <section>
                    <div className="factory">
                        <h3 className="underline" onClick={(e) => switchOpen('fact')}>Factory Address</h3>
                        <p className={factory ? "address" : "address isHidden"}>25 Naki Street,<br/>Snack City,<br/>West Snacklandia,<br/>United Snackdom</p>         
                    </div>
                    <div className='office'>
                        <h3 className="underline" onClick={(e) => switchOpen('offi')}>Office Address</h3>
                        <p className={office ? "address" : "address isHidden"}>16 Naki Avenue,<br/>Snack City,<br/>West Snacklandia,<br/>United Snackdom</p>   
                    </div>
                </section>
                <section>
                    <div className="contact">
                        <h3 className="underline" onClick={(e) => switchOpen('cont')}>Contact Us</h3>
                        <p className={contact ? "address" : "address isHidden"}>nakissnakis@snackmail.co.snacks</p>
                        <p className={contact ? "address" : "address isHidden"}>(+099) 196 1960</p>
                    </div>
                    <div className="portfolio">
                        <h3>This is a portfolio piece:</h3>
                        <p>created by Joshua 'Naki' Neves</p>
                        <a href="https://www.nakineves.com" tabIndex='1' target="_blank" rel="noreferrer"><p>Click Here to access my portfolio</p></a>
                        <a href="https://www.linkedin.com/in/joshua-neves-54baa6196/" tabIndex='1' target="_blank" rel="noreferrer"><p>LinkedIn</p></a>
                    </div>
                </section>
            </div>
        </div>
    )
}