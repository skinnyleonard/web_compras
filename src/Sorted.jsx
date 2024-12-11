import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "./products";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Sorted() {
  const { type } = useParams();
  // const sorts = ["Menor a Mayor", "Mayor a Menor"]
  const [found, setfound] = useState()
  console.log(type)
  return (
    <>
    {useEffect(() => {
      setfound(document.querySelector(".catalog").querySelectorAll(".cards").length)
    })}
    <Navbar back='Deshacer filtros'/>
    <div className="sidebar">
        <Sidebar found={found}/>
      </div>
      <div className="catalog">
        {products
          .filter((p) => p.type == `${type}`)
          .map((product) => (
            <Catalog
              prod={product.prod}
              img={product.img}
              price={product.price}
              link={product.id}
            />
          ))}
        {type == "Menor a Mayor" ? products
          .sort((a, b) => a.price - b.price)
          .map(product => (
          <Catalog
            prod={product.prod}
            img={product.img}
            price={product.price}
            link={product.id}
          />)) : null}
        {type == "Mayor a Menor" ? products
        .sort((a, b) => b.price - a.price) 
        .map(product => (
        <Catalog
            prod={product.prod}
            img={product.img}
            price={product.price}
            link={product.id}
          />)) : null}
      </div>
      <Footer />
    </>
  );
}

export default Sorted;

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
