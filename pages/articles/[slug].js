import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';

import styles from "./slug.module.css";

import Layout from "../../components/Layout/Layout";

//NOTE ^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/
//NOTE array.sort(() => 0.5 - Math.random()).slice(0,1)

const Article = ({ content, data }) => {
  const frontmatter = data;

  const components = {
    a: ({ href, children }) => (
      <a href={href} target="_blanc">
        {children}
      </a>
    ),
  };

  return (
    <Layout title={data.title}>
    <Link href="/">
     <a className={styles.button} >
        <IoIosArrowBack className={styles.buttonIcon}/>
        <span className={styles.buttonContent}>Back</span>
      </a>
      </Link>
      <div className={styles.imageWrapper}>
          <img src={`/assets/${frontmatter.image}`} className={styles.image} />
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <h3 className={styles.details}>
            [ {frontmatter.date}, {frontmatter.author} ]
          </h3>
        </div>

      <div className={styles.wrapper}>
       
        <div className={styles.content}>
          <ReactMarkdown
            escapeHtml={true}
            children={content}
            components={components}
          />
        </div>
      </div>
    </Layout>
  );
};

Article.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../articles/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};

export default Article;
