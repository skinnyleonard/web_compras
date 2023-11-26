import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsWindow from "./ProductsWindow";
import Initial from "./Initial";
import Fullcard from "./Fullcard";
import Cart from "./Cart";
import Sorted from "./Sorted";

function App() {
  const [ newProd, setNewProd ] = useState([])

  useEffect(()=> {
    let data = localStorage.getItem('cart')
    if (data){
      setNewProd(JSON.parse(data))
    }
  }, [])
  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(newProd))
  }, [ newProd ])
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Initial />} />
          <Route exact path="/products" element={<ProductsWindow />} />
          <Route exact path="/products/:id" element={<Fullcard newProd={newProd} setNewProd={setNewProd}/>}/>
          <Route exact path="/cart" element={<Cart newProd={newProd} setNewProd={setNewProd}/>}/>
          <Route exact path="/products/sortby/:type" element={<Sorted />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
