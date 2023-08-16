import React from "react";

function ProdukMobileLayout(props) {
  return (
    <>
      {props.images}
      <div className="p-2 d-flex flex-column gap-4" style={{marginBottom:"110px"}}>
        {props.information}
        {props.owner}
        {props.description}
      </div>
      <div className="position-fixed bottom-0 start-0 end-0 p-2 d-flex">
        {props.button}
      </div>
    </>
  );
}

export default ProdukMobileLayout;
