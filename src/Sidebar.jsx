import React from "react";
import { Link } from "react-router-dom";
import products from "./products";

function Sidebar() {
  var unique = [...new Set(products.map((x) => x.type))];

  return (
    <>
      {unique.map((p) => (
        <Link to={`/products/sortby/${p}`}>
          <h1>{p}</h1>
        </Link>
      ))}
    </>
  );
}

export default Sidebar;
