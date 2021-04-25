import styles from "./HeroSection.module.css";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <img src="assets/hero.jpg" alt="IPG" className={styles.image} />
      <div className={styles.container}>
        <h3 className={styles.subtitle}>[ ALO 2A ]</h3>
        <h1 className={styles.title}>Nasze Najlepsze Artykuły</h1>
        <button className={styles.button}>
          Zobacz Najnowsze <IoIosArrowDown className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
