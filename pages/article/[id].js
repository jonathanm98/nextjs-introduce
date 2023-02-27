import Meta from "@/components/Meta";
import Link from "next/link";
import React from "react";

const article = ({ article }) => {
  return (
    <div className="article-page">
      <Meta title={article.title} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <Link href="/">Revenir à l&apos;accueil</Link>
    </div>
  );
};

export default article;

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=12`
  );
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
