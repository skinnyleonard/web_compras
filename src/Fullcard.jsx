import { useParams } from "react-router-dom";
import products from "./products";
import Navbar from "./Navbar";

function Fullcard({ cart, setCart, updateCart }) {
  const { id } = useParams();

  function handleSubmit(e){
    e.preventDefault()
    const newArray = products.filter(product => product.id == id)
    setCart(newArray)
    updateCart(newArray)
    localStorage.setItem('cart', cart)
    console.log(cart)
    alert('El producto fue agregado al carrito')
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
                <h2>precio: ${product.price}</h2>
                <button onClick={handleSubmit}>Agregar al carrito</button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Fullcard;
