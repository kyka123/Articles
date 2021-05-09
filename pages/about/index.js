import Layout from "../../components/Layout/Layout";

import styles from "./about.module.css";

const About = () => (
  <div className={styles.background}>
    <Layout transparentFooter withNav>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>O Projekcie</h1>
        <p className={styles.text}>
          Projekt ten został wykonany przez Jakuba Wilka, Bartosza Ślepeckiego i
          Krzysztofa Kasprzyka. Chociaż zajęło nam to sporo czasu nie zdążyliśmy
          zaiplmementować wszystki funkcji. Czas nie pozwolił nam też na
          obeszerny redesign, dlatego strona ma w niektórych miejscach dość
          roboczy wygląd.
        </p>
        <p className={styles.text}>
          Zastosowaliśmy framework react/next.js, który pozwala na serwerowe
          renderowanie stron i dynamiczny routing po podstronach. Dzięki temu
          projek mogł przyjąć formę wydajnej Single Page application (SPA)
        </p>
        <p className={styles.text}>
          Aplikacja webowa jest hostowana na platformie Vercel, gdzie
          dynamicznie zsynchornizowana ze swoim repozytorium na platformie
          GitHub, co ułatwiło nam zdalną współpracę.
        </p>
      </div>
    </Layout>
  </div>
);

export default About;
