import React from "react";
import MainModalLayout from "../../layout/mainModalLayout";
import CategoryCard from "../categoryCard";

export default function AcceptedPopUp() {
  return (
    <MainModalLayout
      title={`Yeay kamu berhasil mendapat harga yang sesuai`}
      description={`Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya`}
    >
      <div
        className="p-2 d-flex flex-column gap-3 mb-2"
        style={{ backgroundColor: "#EEEEEE", borderRadius: "8px" }}
      >
        <h5 className="text-center">Product Match</h5>
        <div className="d-flex">
          <img
            src="/dummypp.jpg"
            alt="dummypp"
            style={{ height: "48px", borderRadius: "8px", marginRight: "4px" }}
          />
          <div>
            <b>Damian</b>
            <p className="m-0 p-0">Suroboyo</p>
          </div>
        </div>
        <div className="d-flex">
          <img
            src="/airpodsmax.jpg"
            alt="airpodsmax"
            style={{ height: "48px", borderRadius: "8px", marginRight: "4px" }}
          />
          <div>
            <b>Airpods Max</b>
            <p className="m-0 p-0">Rp. 250.000</p>
          </div>
        </div>
      </div>
      <CategoryCard
        className={`py-2 px-2`}
        text={`Hubungi via Whatsapp`}
        rad={`8`}
      />
    </MainModalLayout>
  );
}
