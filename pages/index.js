import matter from "gray-matter";


import HeroSection from "../components/HeroSection/HeroSection.js";
import Grid from "../components/Grid/Grid.js";
import ArticleCard from "../components/ArticleCard/ArticleCard.js"
import Layout from "../components/Layout/Layout";


const examples = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

export async function getStaticProps() {
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/articles`, "utf-8");

  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/articles/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
    },
  };
}

const Home = ({data}) => {
  const RealData = data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  return(
  <div>
    <Layout withNav title="Strona Główna">
      <HeroSection></HeroSection>
      <Grid>
      {ListItems.map(({title, image}, index) => (
        <ArticleCard key={index} title={title} image={image}/>
      ))}
      </Grid>
    </Layout>
  </div>
)}



export default Home;
