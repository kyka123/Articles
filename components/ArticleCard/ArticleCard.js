import styles from "./ArticleCard.module.css";

import Image from "next/image";

import Link from "next/link";

const ArticleCard = ({ image = "", title = "", slug, ...props }) => (
  <Link href={`/articles/${slug}`}>
    <a>
      <section className={styles.wrapper} {...props}>
        <Image
          src={`/assets/${image}`}
          className={styles.image}
          alt={title}
          layout="fill"
        />

        <h2 className={styles.title}>{title}</h2>
      </section>
    </a>
  </Link>
);

export default ArticleCard;
