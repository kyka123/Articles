import styles from "./Footer.module.css";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.icons_text}>
        <div className={styles.icons}>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.facebook.com/ALO.rzeszow/"
          >
            <IoLogoFacebook className={styles.icon} />
          </a>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.instagram.com/alo_rzeszow/?hl=pl"
          >
            <IoLogoInstagram className={styles.icon} />
          </a>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.youtube.com/channel/UCXaHPxICvAtYZUIlt9oMxsw/videos"
          >
            <IoLogoYoutube className={styles.icon} />
          </a>
        </div>

        <p className={styles.text}>© 2021. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
