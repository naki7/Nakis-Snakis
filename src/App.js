import { Navbar } from './Navbar.js';
import { Hero } from './Hero.js';
import { CompanyInfo } from './CompanyInfo.js';
import { Products } from './Products.js';
import { Footer } from './Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CompanyInfo/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
