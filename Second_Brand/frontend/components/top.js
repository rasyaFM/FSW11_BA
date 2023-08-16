/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unknown-property */
import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Top({ children }) {
  return (
    <div>
      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row d-flex flex-row gap-2">
              <div className="col-md-4 d-flex mb-3 mb-md-0">
                <a href="/" className="ms-md-2 d-none d-sm-block">
                  <img src="/logo.png" height="35" />
                </a>
              </div>

              <div className="col-md-4">
                <div className="d-flex w-auto my-auto mb-3 mb-md-0 justify-content-center">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Top;
