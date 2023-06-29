import React from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SideBar from './components/sideBar/SideBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <SideBar/>
      <Footer/>
    </div>
  );
}

export default App;
