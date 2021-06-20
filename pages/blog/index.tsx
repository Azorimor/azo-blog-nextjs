import { GetStaticProps } from "next";

type Article = {
  title: string;
}

const Articles = ( {articles} ) => {
  return (
    <ul>
      {articles.map((article: Article) => (
        <li key={article.title}>{article.title}</li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const articles = [{title: "title One"},{title: "title Two"},{title: "title Three"}]
  return { 
    props: {
      articles,
    },
  }
}

export default Articles;
