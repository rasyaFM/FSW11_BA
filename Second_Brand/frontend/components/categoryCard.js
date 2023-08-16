import React from "react";

function CategoryCard({ className, text, icon, rad, type, onClick }) {
  return (
    <button
      className={className}
      style={{
        color: "white",
        backgroundColor: "var(--purple)",
        borderRadius: `${rad}px`,
      }}
      type={type}
      onClick={onClick}
    >
      <i className={`bi bi-${icon} mx-auto`} style={{ fontSize: "1.5rem" }}></i>
      <p className="m-0 text-center">{text}</p>
    </button>
  );
}

export default CategoryCard;
