import React from 'react'
import { createPortal } from 'react-dom'

function Footer() {
  return createPortal(
    <footer>
      <ul className="footerUl">
        <h3>Contactos</h3>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
      <ul className="footerUl">
        <h3>Quejas</h3>
        <li>Quejate al telefono 1234 5689</li>
      </ul>
      <ul className="footerUl">
        <h3>Nosotros</h3>
        <li>Trabajar</li>
        <li>Historia</li>
      </ul>
      <ul className="footerUl">
        <h3>Productos</h3>
        <li>Laptops</li>
        <li>Accesorios</li>
        <li>Componentes de PC</li>
        <li>Perifericos</li>
        <li>Tablets</li>
      </ul>
      <ul className="footerUl">
        <h3>Garantia</h3>
        <li>Reclamos</li>
        <li>Reemplazos</li>
      </ul>
      <div className="copyright">
        <h1>Katalogo.com</h1>
        <p>Copyright Katalogo.com 2024</p>
      </div>
      <ul className="footerIcons">
        <li><i className="fa-brands fa-twitter"></i></li>
        <li><i className="fa-brands fa-instagram"></i></li>
        <li><i className="fa-brands fa-discord"></i></li>
        <li><i className="fa-brands fa-facebook"></i></li>
      </ul>
    </footer>,
    document.getElementById("footer")
  );
}

export default Footer