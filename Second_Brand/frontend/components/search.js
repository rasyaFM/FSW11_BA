import React from "react";

function Search() {
  return (
    <div>
      <div
        className="input-group"
        style={{
          background: "#EEEEEE",
          borderRadius: "16px",
        }}
      >
        <input
          type="text"
          className="form-control border-0"
          placeholder="Cari di sini..."
          style={{
            background: "#EEEEEE",
            borderRadius: "16px",
            height: "48px",
          }}
        />
        <span className="input-group-text bg-transparent border-0 fs-4 px-4">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  );
}

export default Search;
