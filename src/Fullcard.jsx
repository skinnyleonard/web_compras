import { useNavigate, useParams } from "react-router-dom";
import products from "./products";
import Navbar from "./Navbar";
import { useState } from "react";
import Footer from "./Footer";

function Fullcard({ cart, setCart, updateCart }) {
  const { id } = useParams();
  const arr = JSON.parse(localStorage.getItem("cart")).map(e => e.map(e => e.id))
  const countDuplicates = (arr) => {
    const counts = {};
    arr.forEach((value) => {
      if (!counts[value]) {
        counts[value] = 1;
      } else {
        counts[value]++;
      }
    });
    return counts;
  };
  const result = countDuplicates(arr);
  console.log(result);

  const newArray = products.filter(product => product.id == id).map(e => ({
    id: id,
    type: e.type,
    prod: e.prod,
    img: e.img,
    price: e.price
  }))

  function handleSubmit(e){
    e.preventDefault()
    updateCart(newArray)
    localStorage.setItem('cart', JSON.stringify(cart))
    // setCart(newArray)
    // alert('El producto fue agregado al carrito')
  }

  return (
    <>
      <Navbar back='Volver atras'/>
      <section className="principal">
        <div className="product">
          {products
            .filter((product) => product.id == id)
            .map((product) => (
              <div className="info">
                <h1>{product.prod}</h1>
                <img src={product.img} alt="" />
              </div>
            ))}
            {products
              .filter((p) => p.id == id)
              .map((p) => (
                <div className="moreInfo">
                <h2>precio: ${p.price}</h2>
                <ul className="desc">
                  <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, unde totam! Veritatis distinctio alias facere ratione, impedit nesciunt. Voluptatem id vel laboriosam corporis mollitia eligendi excepturi sint pariatur aut dignissimos!</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, id corrupti. Voluptatem adipisci delectus molestias maxime explicabo animi, quibusdam repellat cupiditate. Ratione voluptatem voluptate aliquid ullam! Neque similique vel voluptate?</li>
                </ul>
                <button onClick={handleSubmit}>Agregar al carrito</button>
                </div>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Fullcard;
