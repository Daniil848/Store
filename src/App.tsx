import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import Header from './components/header/Header';
import Products from './components/products/Products';
import ProductPage from './components/products/ProductPage';
import Footer from './components/footer/Footer';
import Registration from './components/registration/Registration';

function App() {
  const stateProducts = useAppSelector(state => state.products);
  const stateRegistration = useAppSelector(state => state.registration);

  return (
    <div className="App">
      <Header/>
      {(stateRegistration.logIn || stateRegistration.signIn) && <Registration/>}
      <Routes>
        <Route index element={<Products/>}/>
        <Route path='/product/:productID' element={<ProductPage id={stateProducts?.productId || 0}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
