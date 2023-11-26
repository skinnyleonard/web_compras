import React from "react";
import { useParams } from "react-router-dom";
import products from "./products";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Sorted() {
  const { type } = useParams();

  return (
    <>
    <Navbar back='Deshacer filtros'/>
      <div className="catalog">
        {products
          .filter((p) => p.type == `${type}`)
          .map((product) => (
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

export default Sorted;

function Catalog({ prod, img, price, link }) {
  return (
    <div className="cards">
      <h1>{prod}</h1>
      <img src={img} alt="" />
      <h2>precio: {price}</h2>
      <h2>{link}</h2>
    </div>
  );
}
