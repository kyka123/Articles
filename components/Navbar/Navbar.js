import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(true);

  const changeBackground = () => setNavbarBg(window.scrollY <= 65);

  const scrollToDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(changeBackground, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const secondary = !navbarBg ? styles.secondary : "";
  const header = `${styles.header} ${secondary}`;
  const link = `${styles.link} ${secondary}`;
  return (
    <nav className={header}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a className={`${link} ${styles.logo}`}>Articles</a>
          </Link>
        </li>

        <li className={styles.listItem}>
          <button onClick={scrollToDown} className={link}>
            Kontakt
          </button>
        </li>

        <li className={styles.listItem}>
          <Link href="/about">
            <a className={link}>O Projekcie</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
