import React from 'react';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SideBar from './components/sideBar/SideBar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <SideBar/>
    </div>
  );
}

export default App;
