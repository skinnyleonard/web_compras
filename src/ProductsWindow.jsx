import React from "react";
import Navbar from "./Navbar";
import products from "./products";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

// .filter((p) => p.type == "Otras Cosas")

function ProductsWindow() {
  return (
    <>
      <Navbar />
      <div className="catalog">
        {products.map((product) => (
          <Catalog
            prod={product.prod}
            img={product.img}
            price={product.price}
            link={<Link to={`/products/${product.id}`}>Ver mas</Link>}
          />
        ))}
      </div>

      <div className="sidebar">
        <Sidebar />
      </div>
    </>
  );
}
export default ProductsWindow;

function Catalog({ prod, img, price, link }) {
  return (
    <div className="cards">
      <h1>{prod}</h1>
      <img src={img} alt="" />
      <h2>precio: ${price}</h2>
      <h2>{link}</h2>
    </div>
  );
}
