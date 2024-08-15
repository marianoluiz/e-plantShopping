
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        
        <div className="content">
          {/* left */}
         <div className="landing_content">
         <h1>Welcome To Green Galores</h1>
          <div className="divider"></div>
          <p>Nurturing Nature's Wonders</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
         {/* right */}
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



