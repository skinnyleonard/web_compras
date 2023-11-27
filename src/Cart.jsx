import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  const newCart = cart.flatMap((c) => c);
  const replaced = newCart.map(e => e.price.replaceAll('.', ''));
  let sum = 0

  replaced.forEach((price) => {
    sum += price * 1;
  });

  let finalSum = sum.toLocaleString()

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  }
  function deleteProd(id){
    const updCart = newCart.filter(e => e.id  !==id)
    setCart(updCart)
    localStorage.setItem('cart', JSON.stringify(updCart))
  }

  return (
    <>
      <Navbar />
      <h1>Carrito de Compras</h1>
      {newCart.map((c) => (
        <div className="cartProd">
          <img src={c.img} alt="" />
          <h1>{c.prod}</h1>
          <h2>precio: ${c.price}</h2>
          <Link to={`/products/${c.id}`}>Ver producto</Link>
          <button onClick={deleteProd}>Eliminar</button>
        </div>
      ))}
      <div className="right-bar">
        <button onClick={handleSubmit}>Vaciar Carrito</button>
        <h1>Total: ${finalSum}</h1>
      </div>
    </>
  );
}

export default Cart;
