import React from "react";

function LoginregisterLayout({ children }) {
  return (
    <section className="row p-0 m-0" style={{ height: "100vh" }}>
      <div
        className="col-6 px-0 d-none d-md-block"
        style={{ position: "relative" }}
      >
        <img
          src="/loginregisterbg.png"
          alt="image"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: "100%", color: "white", marginLeft: "10%" }}
        >
          <h1
            className="m-0 p-0"
            style={{ fontSize: "3rem", fontWeight: "700" }}
          >
            Second
            <br />
            Hand.
          </h1>
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="px-3 ms-xl-4 d-lg-none d-xl-none d-md-none mt-2">
          <i className="bi bi-arrow-left fs-1"></i>
        </div>

        <div className="mx-auto d-flex flex-column justify-content-center" style={{maxWidth:"600px", height:"100%"}}>{children}</div>
      </div>
    </section>
  );
}

export default LoginregisterLayout;
