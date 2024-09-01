import './Footer.css';

export const Footer = () =>{
    return(
        <div className="Footer">
            <div className='information'>
                <section>
                    <div className="factory">
                        <h3>Factory Address</h3>
                        <p className="address">25 Naki Street,<br/>Snack City,<br/>West Snacklandia,<br/>United Snackdom</p>         
                    </div>
                    <div className='office'>
                        <h3>Office Address</h3>
                        <p className="address">16 Naki Avenue,<br/>Snack City,<br/>West Snacklandia,<br/>United Snackdom</p>   
                    </div>
                </section>
                <section>
                    <div className="contact">
                        <h3>You can reach us on:</h3>
                        <p>nakissnakis@snackmail.co.snacks</p>
                        <p>(+099) 196 1960</p>
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