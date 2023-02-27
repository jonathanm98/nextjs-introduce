import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={{ description }} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Le blog de Dev, pour les passionnés du web",
  description:
    "Apprendre et comprendre le developpement web, javascript, react, etc...",
};

export default Meta;
