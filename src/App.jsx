import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useContext } from 'react';

//import Visto en clase
import CartContextProvider from './contenedores/CartContext'; 
import ItemDetailContainer from './contenedores/ItemDetailContainer';
import ItemListContainer from './contenedores/ItemListContainer';
import Cart from './componentes/Cart';

//Lazy se crea cuando se necesita 
const OtherComponent = React.lazy(() => import('./componentes/navbar'));

const App =()=> {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <OtherComponent/>
        <Routes>
          <Route path="" element={<ItemListContainer/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path='item'><Route path=":id" element={<ItemDetailContainer/>}/></Route>
          <Route path='category'><Route path=":id" element={<ItemListContainer/>}/></Route>
        </Routes> 
      </BrowserRouter>
      </CartContextProvider> 
  );
}

export default App;
