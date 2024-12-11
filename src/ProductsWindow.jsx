import React, { useEffect } from "react";
import Navbar from "./Navbar";
import products from "./products";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { createPortal } from "react-dom";
import Footer from "./Footer";

// .filter((p) => p.type == "Otras Cosas")

function ProductsWindow() {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <Sidebar found={products.length}/>
      </div>

      <div className="catalog">
        {products.map((product) => (
          <Catalog
            prod={product.prod}
            img={product.img}
            price={product.price}
            link={product.id}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default ProductsWindow;

function Catalog({ prod, img, price, link }) {
  return (
      <Link className="cards" to={`/products/${link}`}>
        <div>
          <h1>{prod}</h1>
          <img src={img} alt="" />
          <h2>precio: ${price}</h2>
        </div>
      </Link>
  );
}
