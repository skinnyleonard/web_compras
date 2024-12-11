import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsWindow from "./ProductsWindow";
import Initial from "./Initial";
import Fullcard from "./Fullcard";
import Cart from "./Cart";
import Sorted from "./Sorted";
import AboutUs from "./AboutUs";
import products from "./products";
import ScrollToTop from "./ScrollToTop";

function App({ updateCart }) {
  const [ cart, setCart ] = useState([])

  function updateCart(newArray){
    setCart([...cart, newArray])
  }

  useEffect(() => {
    let data = localStorage.getItem('cart')
    if (data) {
      setCart(JSON.parse(data))
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Initial />} />
          <Route exact path="/products" element={<ProductsWindow />} />
          <Route exact path="/products/:id" element={<Fullcard cart={cart} setCart={setCart} updateCart={updateCart}/>}/>
          <Route exact path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route exact path="/products/sortby/:type" element={<Sorted />} />
          <Route exact path="/about-us" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
