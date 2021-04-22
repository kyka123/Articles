import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styles from './slug.module.css'

const Article = ({ content, data }) =>{
    const frontmatter = data;

  return (
    <>
    <div className={styles.wrapper}>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <ReactMarkdown escapeHtml={true} children={content} />
      </div>
    </>
  );

}

Article.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../articles/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};


export default Article