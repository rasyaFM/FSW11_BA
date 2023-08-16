import React from "react";
import CategoryCard from "./categoryCard";

function ButtonMasuk() {
  return (
    <div>
      <CategoryCard
        className="d-flex align-items-center px-3 py-1 gap-2"
        text="Masuk"
        icon="box-arrow-in-right"
        rad="16"
      />
    </div>
  );
}

export default ButtonMasuk;
