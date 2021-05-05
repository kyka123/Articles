import styles from "./HeroSection.module.css";
import { IoIosArrowDown } from "react-icons/io";

import Image from "next/image";

const HeroSection = () => {
  const scrollToDown = () => {
    window.scrollTo({
      top: window.screen.height - 59,
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
        loading="eager"
        priority
      />
      <header className={styles.container}>
        <h3 className={styles.subtitle}>[ ALO 2A ]</h3>
        <h1 className={styles.title}>Nasze Najlepsze Artykuły</h1>
        <button className={styles.button} onClick={scrollToDown}>
          Zobacz Najnowsze <IoIosArrowDown className={styles.icon} />
        </button>
      </header>
      <button className={styles.scrollDown} onClick={scrollToDown}>
        <span className={styles.scrollDownText}>Scroll Down</span>
        <span className={styles.arrow}></span>
      </button>
    </div>
  );
};

export default HeroSection;
