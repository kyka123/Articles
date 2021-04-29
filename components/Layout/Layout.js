import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Head from "next/head";

const Layout = ({ children, title = "Strona Główna", withNav }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {withNav ? <Navbar /> : ""}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
