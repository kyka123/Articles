import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useRef } from "react";

import Head from "next/head";

const Layout = ({ children, title = "Strona Główna", withNav }) => {
  const footerref = useRef();

  const scrollBottom = () => {
    footerref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {withNav ? <Navbar scrol={scrollBottom} /> : ""}
      {children}
      <Footer reff={footerref} />
    </>
  );
};

export default Layout;
