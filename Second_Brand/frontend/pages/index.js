/* eslint-disable @next/next/no-sync-scripts */
import axios from "axios";
import Head from "next/head";
import MainLayout from "../layout/mainLayout";
import useResize from "../hooks/useResize";
import ButtonMasuk from "../components/buttonMasuk";
import CategoryLayout from "../layout/categoryLayout";
import CategoryLayoutMobile from "../layout/categoryLayoutMobile";
import { useRouter } from "next/router";
import { GetToken } from "../utils/getToken";
import { useEffect } from "react";

export async function getServerSideProps({ req, res }) {
  const API = process.env.NEXT_PUBLIC_API_ENDPOINT;
  let user = null;
  let allcookie = req.headers.cookie || "   ";
  let token = GetToken(allcookie);
  let products = [];
  let products_hobi = [];
  let products_elektronik = [];
  let products_kesehatan = [];
  let products_baju = [];
  let products_kendaraan = [];
  let notifications = [];

  try {
    const res_products = await axios.get(API + "/products");
    products = res_products.data.data;

    const res_products_hobi = await axios.get(API + "/products/categories/1");
    products_hobi = res_products_hobi.data.data;

    const res_products_kendaraan = await axios.get(
      API + "/products/categories/2"
    );
    products_kendaraan = res_products_kendaraan.data.data;

    const res_products_baju = await axios.get(API + "/products/categories/3");
    products_baju = res_products_baju.data.data;

    const res_products_elektronik = await axios.get(
      API + "/products/categories/4"
    );
    products_elektronik = res_products_elektronik.data.data;

    const res_products_kesehatan = await axios.get(
      API + "/products/categories/5"
    );
    products_kesehatan = res_products_kesehatan.data.data;

    const res_user = await axios({
      method: `get`,
      url: `${API}/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    user = res_user.data.data;

    const res_notifications = await axios({
      method: `get`,
      url: `${API}/users/notifications`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    notifications = res_notifications.data.data;
  } catch (error) {
    console.log(error.response);
  }

  return {
    props: {
      user,
      products,
      products_hobi,
      products_kesehatan,
      products_elektronik,
      products_baju,
      products_kendaraan,
      notifications,
    },
  };
}

export default function Home({
  user,
  products,
  products_hobi,
  products_kesehatan,
  products_elektronik,
  products_baju,
  products_kendaraan,
  notifications,
}) {
  const screen = useResize();
  const router = useRouter();

  useEffect(() => {
    if (user != null && user.user_role == 2) {
      router.replace("/seller");
    }
  });

  return (
    <>
      <Head>
        <title>SecondHand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      {screen.md ? (
        <MainLayout user={user} notifications={notifications}>
          <div className="row">
            <div className="col-10 offset-1 mt-5 d-none d-sm-block">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/banner.png" className="d-flex w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/banner.png" className="d-flex w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="/banner.png" className="d-flex w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 offset-1 mt-5 fs-5">
              <CategoryLayout
                user={user}
                products={products}
                products_hobi={products_hobi}
                products_kesehatan={products_kesehatan}
                products_elektronik={products_elektronik}
                products_baju={products_baju}
                products_kendaraan={products_kendaraan}
              />
            </div>
          </div>
        </MainLayout>
      ) : (
        <div className="d-flex flex-column">
          <div className="banner">
            <div className="container-fluid px-0 mb-0 mt-0">
              <div className="d-flex flex-row gap-2">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#demo"
                >
                  <img className="navbar-toggler-icon fs-1" src="/toggle.png" />
                </button>
                <div
                  className="input-group mt-2 me-2"
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                  }}
                >
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Cari di sini..."
                    style={{
                      borderRadius: "16px",
                      height: "48px",
                    }}
                  />
                  <span className="input-group-text bg-transparent border-0 fs-4 px-4">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
              <div className="row px-5 mt-3">
                <div className="col-7">
                  <p className="fs-2 fw-bold">
                    Bulan Ramadhan <br />
                    Banyak Diskon!
                  </p>

                  <h6>Diskon Hingga</h6>
                  <p className="fs-2 text-danger p-3">60%</p>
                </div>
                <div className="col-5">
                  <img src="/kado.png" />
                </div>
              </div>

              <div className="offcanvas offcanvas-start" id="demo">
                <div className="offcanvas-header">
                  <strong className="offcanvas-title fs-4">Second Hand</strong>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <a href="/login" className="text-decoration-none">
                    <ButtonMasuk />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <CategoryLayoutMobile
            products={products}
            products_hobi={products_hobi}
            products_kesehatan={products_kesehatan}
            products_elektronik={products_elektronik}
            products_baju={products_baju}
            products_kendaraan={products_kendaraan}
          />
        </div>
      )}
    </>
  );
}
