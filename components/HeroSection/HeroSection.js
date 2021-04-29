import styles from "./HeroSection.module.css";
import { IoIosArrowDown } from "react-icons/io";

import Image from "next/image";

const HeroSection = ({ gridRef }) => {
  const scrollDown = () => {
    if (!gridRef.current) return;

    gridRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.wrapper}>
      <Image
        layout="fill"
        src="/assets/hero.jpg"
        alt="IPG"
        className={styles.image}
      />
      <header className={styles.container}>
        <h3 className={styles.subtitle}>[ ALO 2A ]</h3>
        <h1 className={styles.title}>Nasze Najlepsze Artykuły</h1>
        <button className={styles.button} onClick={scrollDown}>
          Zobacz Najnowsze <IoIosArrowDown className={styles.icon} />
        </button>
      </header>
      <button className={styles.scrollDown} onClick={scrollDown}>
        <span className={styles.scrollDownText}>Scroll Down</span>
        <span className={styles.arrow}></span>
      </button>
    </div>
  );
};

export default HeroSection;
