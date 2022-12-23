import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then(res => {
      setCatalog(res.data);
    });
  }, []);

  return (
    <>
      <h1>Catálogo</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {" "}
          <button type="button">Comprar</button>
        </article>
      ))}
    </>
  );
};

export default Catalog;