import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
