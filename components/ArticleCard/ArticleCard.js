import styles from "./ArticleCard.module.css";

import Image from "next/image";

import Link from "next/link";

const ArticleCard = ({ image = "", title = "", slug, ...props }) => (
  <Link href={`/articles/${slug}`}>
    <a>
      <div className={styles.wrapper} {...props}>
        <Image
          src={`/assets/${image}`}
          className={styles.image}
          layout="fill"
        />
        {/* <Image
        src={image}
        alt="Picture of the author"
        layout="fill"
        className={styles.image}
        /> */}
        <h3 className={styles.title}>{title}</h3>
      </div>
    </a>
  </Link>
);

export default ArticleCard;
