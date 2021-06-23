import { GetStaticProps } from "next";
import React from "react";
import ArticleCard from "../../components/articles/articleCard";
import Article from "../../types/article";

const Articles = ( { articles }:{articles: Article[]} ) => {
  return (
    <>
    <ul>
      {articles.map((article: Article) => (
        <ArticleCard key={article.id} article={article}/>
      ))}
    </ul>
    
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  const res = await fetch('http://localhost:1337/articles') // Only debug and testing
  const articles:Article[] = await res.json();
  return { 
    props: {
      articles,
    },
  }
}

export default Articles;
