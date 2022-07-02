import React from "react";
import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "Awesome Food Store",
  keyword: "Awesome food store by next.js ",
  contents: "Awesome food store by next.js ",
};

export default HeadInfo;
