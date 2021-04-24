import styles from "./HeroSection.module.css";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <img src="assets/hero.jpg" alt="IPG" className={styles.image} />
      <div className={styles.centered}>
        Nasze najlepsze artykuły
        <button className={styles.button}>
          Zobacz najnowsze <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
