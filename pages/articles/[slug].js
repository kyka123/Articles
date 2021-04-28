import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import styles from "./slug.module.css";

import Layout from "../../components/Layout/Layout";
///^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/

const Article = ({ content, data }) => {
  const frontmatter = data;

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={`/assets/${frontmatter.image}`} className={styles.image} />
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <h3 className={styles.details}>
            [ {frontmatter.date}, {frontmatter.author} ]
          </h3>
        </div>
        <div className={styles.content}>
          <ReactMarkdown escapeHtml={true} children={content} />
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
