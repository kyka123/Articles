import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";

import styles from "./slug.module.css";

import Layout from "../../components/Layout/Layout";
import { useEffect, useRef } from "react";

//NOTE ^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/

const Article = ({ rawData, others }) => {
  const { data, content } = matter(rawData);
  const frontmatter = data;

  const randomOthers = others.sort(() => 0.5 - Math.random()).slice(0, 3);

  const components = {
    a: ({ href, children }) => (
      <a href={href} target="_blanc">
        {children}
      </a>
    ),
  };

  const wrapperRef = useRef(null);

  const setFeature = () => {
    if (!wrapperRef.current) return;
    const scrollPositin = window.scrollY;
    const [button, image, title, detail] = wrapperRef.current.children;
    if (scrollPositin > 20) {
      button.style.transform = `translateY(-500px)`;
    } else {
      button.style.transform = `translateY(0)`;
    }

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      return;

    [title, detail].map((element) => {
      element.style.transform = `translateY(${scrollPositin / 4}px)`;
      element.style.opacity = `${100 - scrollPositin / 5}%`;
      element.style.filter = `blur(${scrollPositin / 200}px)`;
    });

    image.style.transform = `translateY(${scrollPositin / 2}px)`;
  };

  useEffect(() => {
    document.addEventListener("scroll", setFeature);
    return () => {
      document.removeEventListener("scroll", setFeature);
    };
  }, []);

  useEffect(setFeature, []);

  return (
    <Layout title={data.title}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper} ref={wrapperRef}>
          <Link href="/">
            <a className={styles.button}>
              <IoMdHome className={styles.buttonIcon} />
              <span className={styles.buttonContent}>Strona główna</span>
            </a>
          </Link>
          <img
            src={`/assets/${frontmatter.image}`}
            className={styles.image}
            alt={data.title}
          />
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <h2 className={styles.details}>
            [ {frontmatter.date}, {frontmatter.author} ]
          </h2>
        </div>

        <div className={styles.content}>
          <ReactMarkdown
            escapeHtml={true}
            children={content}
            components={components}
          />
          <p className={styles.author}>Autor: {frontmatter.author}</p>
          <p>
            <b>Zobacz także</b>
          </p>

          <ul>
            {randomOthers.map(({ title, slug }) => {
              return (
                <li key={slug}>
                  <Link href={`/articles/${slug}`}>
                    <a className={styles.link}>{title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const fs = require("fs");
  const { slug } = context.params;

  const files = fs.readdirSync(`${process.cwd()}/articles`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const others = blogs
    .map((blog) => {
      const path = `${process.cwd()}/articles/${blog}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });

      const {
        data: { title },
      } = matter(rawContent);
      return { title, slug: blog.slice(0, -3) };
    })
    .filter(({ slug: currSlug }) => slug !== currSlug);

  const content = await import(`../../articles/${slug}.md`);

  const rawData = content.default;

  return { props: { rawData, others } };
}

export async function getStaticPaths() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/articles`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const slugs = blogs.map((blog) => {
    return { params: { slug: blog.slice(0, -3) } };
  });

  return { paths: slugs, fallback: false };
}

// Article.getInitialProps = async (context) => {
//   const { slug } = context.query;
//   const content = await import(`../../articles/${slug}.md`);
//   const data = matter(content.default);
// };

export default Article;
