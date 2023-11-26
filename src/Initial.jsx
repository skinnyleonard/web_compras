import React from "react";
import products from "./products";
import Navbar from "./Navbar";
import Pub from "./Pub";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Initial() {
  return (
    <>
      <Navbar />
      <Pub />
        <h1 className="wow">Productos Destacados</h1>
      <div className="destacado">
        {/* {products.map(product => <Card prod={product.prod} img={product.img} price={product.price}/>)} */}
        {products
          .filter((product) => product.id == 1)
          .map((product) => 
            <Card prod={product.prod} img={product.img} price={product.price} id={product.id}/>
          )}
        {products
          .filter((product) => product.id == 4)
          .map((product) => (
            <Card prod={product.prod} img={product.img} price={product.price} id={product.id}/>
          ))}
        {products
          .filter((product) => product.id == 5)
          .map((product) => (
            <Card prod={product.prod} img={product.img} price={product.price} id={product.id}/>
          ))}
        {products
          .filter((product) => product.id == 7)
          .map((product) => (
            <Card prod={product.prod} img={product.img} price={product.price} id={product.id}/>
          ))}
      </div>
      <Footer />
    </>
  );
}

export default Initial;

function Card({ prod, img, price, id }) {
  return (
    <div className="cards">
      <h1>{prod}</h1>
      <img src={img} alt="" />
      <h2>precio: {price}</h2>
      <h2><Link to={`/products/${id}`}>Ver mas</Link></h2>
    </div>
  );
}
