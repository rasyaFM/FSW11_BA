import React from "react";
import moment from "moment";

function ItemList({ product }) {
  return (
    <div className="d-flex gap-3 container-fluid my-2">
      <div style={{ width: "20%" }}>
        <img
          style={{ width: "100%", borderRadius: "12px" }}
          src={product.Product.product_image}
          alt={product.Product.product_name}
        />
      </div>
      <div className="d-flex flex-column flex-grow-1">
        <div className="d-flex flex-grow justify-content-between">
          <p className="m-0">Penawaran Produk</p>
          <p className="m-0">
            {moment(product.createdAt).format("hh:mm:ss DD MMM, YYYY")}
          </p>
        </div>
        <h4>{product.Product.product_name}</h4>
        <p className="m-0">
          Rp.{" "}
          {product.Product.product_price
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
        <p className="m-0">
          Ditawar Rp.{" "}
          {product.order_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
        </p>
      </div>
    </div>
  );
}

export default ItemList;
