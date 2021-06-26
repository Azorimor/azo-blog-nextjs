import { GetStaticProps } from "next";
import React from "react";
import ArticleCard from "../../components/articles/articleCard";
import article from "../../types/article";
import Article from "../../types/article";

const Articles = ( { articles }:{articles: Article[]} ) => {
  return (
    <div className="content-section">
      <div className="p-grid">
        {articles.map((article: Article) => (
          <>
            <div className="p-col-12 p-md-6 p-lg-3">
              <div className="box">
                <ArticleCard key={article.id} title={article.title}/>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
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
