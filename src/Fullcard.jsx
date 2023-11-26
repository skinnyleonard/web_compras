import { useParams } from "react-router-dom";
import products from "./products";
import Navbar from "./Navbar";

function Fullcard({ newProd, setNewProd }) {
  const { id } = useParams();

  function handleSubmit(){
      const newCart = products.filter(product => product.id == id)
      console.log(newCart)
      setNewProd(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }

  return (
    <>
      <Navbar back='Volver atras'/>
      <section className="principal">
        <div>
          {products
            .filter((product) => product.id == id)
            .map((product) => (
              <div className="p">
                <h1>{product.prod}</h1>
                <img src={product.img} alt="" />
                <h2>precio: {product.price}</h2>
                <button onClick={handleSubmit}>Agregar al carrito</button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Fullcard;
