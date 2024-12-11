import React from "react";
import { Link } from "react-router-dom";
import products from "./products";

function Sidebar({ found }) {
  var unique = [...new Set(products.map((x) => x.type))];
  const sorts = ["Menor a Mayor", "Mayor a Menor"]
  return (
    <>
      <h3>{found} productos encontrados</h3><br />
      <h1><small><i className="fa-solid fa-arrow-right-arrow-left"></i></small> Ordernar por</h1>
      <ul>
        {sorts.map(e => (
          <li>
            <h1><Link to={`/products/sortby/${e}`}>{e}</Link></h1>
          </li>
        ))}
      </ul> 
      <h1><small><i className="fa-solid fa-filter"></i></small> Filtrar por:</h1>
      <ul>
        {unique.map((p) => (
          <li>
            <h1><Link to={`/products/sortby/${p}`}>{p}</Link></h1>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sidebar;
