import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbarBg(false);
      console.log("false");
    } else {
      setNavbarBg(true);
      console.log("true");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={
        navbarBg ? styles.header : `${styles.header} ${styles.headerBackground}`
      }
    >
      <Link href="/lol">
        <a
          className={navbarBg ? `${styles.logo} ${styles.white}` : styles.logo}
        >
          Articles
        </a>
      </Link>
      <ul className={styles.navLinks}>
        <li className={styles.navLinksLink}>
          <Link href="/">
            <button className={styles.btn}>Przycisk</button>
          </Link>
        </li>
        <li>
          <Link href="/">
            <button className={`${styles.btn} ${styles.colored}`}>
              O Projekcie
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
