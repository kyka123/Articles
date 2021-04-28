import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(true);

  const changeBackground = () => setNavbarBg(window.scrollY <= 65);

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
            <a className={link}>Strona główna</a>
          </Link>
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
