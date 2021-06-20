import { GetStaticProps } from "next";
import React from "react";
import ArticleCard from "../../components/articles/articleCard";
import Article from "../../types/article";

const Articles = ( {articles} ) => {
  return (
    <>
    <ul>
      {articles.map((article: Article) => (
        <li key={article.title}>{article.title}</li>
      ))}
    </ul>
    <ArticleCard article={articles[0]}/>
    </>
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
