import React from "react";

function UlCategoryLayout({ children }) {
  return (
    <>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item px-1" role="presentation">
          {children}
        </li>
      </ul>
    </>
  );
}

export default UlCategoryLayout;
