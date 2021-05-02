import Head from "next/head";

import "../theme/globalStyles.css";

const App = ({ Component, pageProps }) => (
  <div>
    <Head>
      <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16" />
      <link rel="icon" href="/assets/favicon.ico" type="image/x-icon"/>

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;0,700;1,500&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Component {...pageProps} />
  </div>
);

export default App;
