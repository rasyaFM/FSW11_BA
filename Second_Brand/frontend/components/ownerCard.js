import Link from "next/link";
import React from "react";
import MainButton from "./mainButton";

function OwnerCard({ foto, fotoalt, nama, kota, isOwner }) {
  return (
    <div
      className="d-flex flex-row p-3 gap-3"
      style={{
        boxShadow: "0px 0px 6px rgba(0,0,0,0.15)",
        borderRadius: "1rem",
      }}
    >
      <img
        src={foto}
        alt={fotoalt}
        style={{ height: "5rem", borderRadius: "1rem" }}
      />
      <div className="flex-fill d-flex flex-column justify-content-center">
        <h3 className="m-0">{nama}</h3>
        <p className="m-0">{kota}</p>
      </div>
      {isOwner && (
        <div className="d-flex align-items-center">
          <Link href={"/info-profile"}>
            <a style={{textDecoration:"none"}}>

            <MainButton
              className="d-flex align-items-center px-3 py-1 gap-2"
              text="Edit"
              rad="8"
              />
              </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OwnerCard;
