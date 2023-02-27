import Article from "@/components/Article";
import Meta from "@/components/Meta";
import React from "react";

const index = ({ articles }) => {
  return (
    <div>
      <Meta />
      <h2>Home</h2>
      <div className="article-list">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default index;

//executé coté serveur
export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
