import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Head from "next/head";

const Layout = ({ children, title = "Strona Główna", withNav }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    {withNav ? <Navbar /> : ""}
    {children}
    <Footer />
  </div>
);

export default Layout;
