import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

const Navbar = ({scrol}) => {
  const [navbarBg, setNavbarBg] = useState(true);



  const changeBackground = () => {
    if (window.scrollY >= 65) {
      setNavbarBg(false);
    } else {
      setNavbarBg(true);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    changeBackground()
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
      <Link href="/">
        <a
          className={navbarBg ? `${styles.logo} ${styles.white}` : styles.logo}
        >
          Articles
        </a>
      </Link>
      <ul className={styles.navLinks}>
        <li className={styles.navLinksLink}>
           <button className={styles.btn} onClick={scrol}>Kontakt</button>
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
