import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Head from "next/head";

const Layout = ({ children, title = "Strona Główna", withNav, footerRef, transparentFooter }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {withNav ? <Navbar /> : ""}
      {children}
      <Footer footerRef={footerRef || null} transparent={transparentFooter} />
    </>
  );
};

export default Layout;
