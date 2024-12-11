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
      <div className="marcas">
        <h1>Las mejores marcas colaborando</h1>
        <img src="https://logodix.com/logo/964947.png" alt="amd" />
        <img src="https://www.nvidia.com/content/nvidiaGDC/es/es_ES/about-nvidia/legal-info/logo-brand-usage/_jcr_content/root/responsivegrid/nv_container_392921705/nv_container_412055486/nv_image.coreimg.100.1070.png/1722330524427/nvidia-logo-horz.png" alt="nvidia" />
        <img src="https://logodownload.org/wp-content/uploads/2014/09/msi-logo-1-1.png" alt="corsair" />
        <img src="https://press.asus.com/assets/w_640,h_640/4a83deef-f73a-44e9-a9d6-1ae062de6fb9/ROG%20logo_red.png" alt="rog" />
        <img src="https://1000marcas.net/wp-content/uploads/2020/02/Intel-Logo-1.png" alt="intel" />
      </div>
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
      </div>
      <Footer />
    </>
  );
}

export default Initial;

function Card({ prod, img, price, id }) {
  return (
      <Link  className="cards" to={`/products/${id}`}>
    <div>
      <h1>{prod}</h1>
      <img src={img} alt="" />
      <h2>precio: {price}</h2>
    </div>
      </Link>
  );
}
