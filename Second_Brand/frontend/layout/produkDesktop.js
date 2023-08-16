import React from "react";

function ProdukDesktopLayout(props) {
  return (
    <div className="container-fluid row m-0 mt-5 p-2" style={{width:"100%"}}>
      <div className="col-7 d-flex flex-column gap-4">
        {props.images}
        {props.description}
      </div>
      <div className="col-5">
        <div className="sticky-top d-flex flex-column gap-4" style={{top:"70px"}}>
          {props.information}
          {props.owner}
        </div>
      </div>
    </div>
  );
}

export default ProdukDesktopLayout;
