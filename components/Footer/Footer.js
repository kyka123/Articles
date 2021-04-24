import styles from "./Footer.module.css";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";


function Footer() {
  return (
        <div className={styles.main}>
          {/* <img src="assets/footer.jpg" alt="IPG" className={styles.image} /> */}
          <div className={styles.icons_text}>
            <div className={styles.icons}>
            <IoLogoFacebook></IoLogoFacebook>
            <IoLogoInstagram></IoLogoInstagram>
            <IoLogoYoutube></IoLogoYoutube>
            </div>
            <h2>qwerty</h2>
            <p>ALOOO</p>
          </div>
                      
          </div>

  );
}

export default Footer;