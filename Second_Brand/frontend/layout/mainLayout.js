import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function MainLayout({ children, user, notifications }) {
  return (
    <>
      <Header user={user} notifications={notifications}/>
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
