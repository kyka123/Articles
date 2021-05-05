import styles from "./Footer.module.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";

const Footer = ({ footerRef, transparent }) => {
  return (
    <footer
      className={`${styles.main} ${!transparent ? styles.background : ""}`}
      ref={footerRef}
    >
      <div className={styles.icons_text}>
        <div className={styles.icons}>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.facebook.com/ALO.rzeszow/"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <IoLogoFacebook className={styles.icon} />
          </a>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.instagram.com/alo_rzeszow/?hl=pl"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IoLogoInstagram className={styles.icon} />
          </a>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.youtube.com/channel/UCXaHPxICvAtYZUIlt9oMxsw/videos"
            rel="noreferrer"
            aria-label="Youtube"
          >
            <IoLogoYoutube className={styles.icon} />
          </a>
        </div>

        <p className={styles.text}>© 2021. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
