import React from "react";
import MainModalLayout from "../../layout/mainModalLayout";
import CategoryCard from "../categoryCard";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

const API = process.env.NEXT_PUBLIC_API_ENDPOINT;

const notify = () =>
  toast.success("Sukses", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default function TawarPopUp({
  token,
  onClick,
  product_name,
  product_image,
  product_price,
  product_id,
}) {
  const router = useRouter();
  const [orderData, setOrderData] = useState({
    product_id: null,
    order_price: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("product_id", product_id);
    data.append("order_price", Number(orderData.order_price));
    if (token) {
      try {
        await axios({
          method: "post",
          url: `${API}/orders`,
          data: data,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `multipart/form-data`,
          },
        });
        (e) => handleTawarPopup(e);
        router.reload();
      } catch (error) {
        console.log(error.response);
      }
    } else {
      alert("Please Login to continue");
      router.replace("/account/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  return (
    <MainModalLayout
      onClick={onClick}
      title={`Masukkan Harga Tawaranmu`}
      description={`Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.`}
    >
      <div
        className="d-flex p-2"
        style={{ backgroundColor: "#EEEEEE", borderRadius: "8px" }}
      >
        <img
          src={product_image}
          alt=""
          style={{ height: "48px", borderRadius: "8px", marginRight: "4px" }}
        />
        <div>
          <b>{product_name}</b>
          <p className="m-0 p-0">RP. {product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
        </div>
      </div>
      <p className="m-0">Harga Tawar</p>

      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <input
          name="order_price"
          className="card mb-3 mt-1 p-1"
          style={{ borderRadius: "8px", width:"100%" }}
          type="number"
          placeholder="Rp 0,00"
          onChange={(e) => handleChange(e)}
        />
        <CategoryCard
          className={"py-2"}
          text={"Kirim"}
          rad={"8"}
          type="submit"
          onClick={notify}
        />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </MainModalLayout>
  );
}
