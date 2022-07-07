import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  contents: string;
}

const HeadInfo = ({ title, contents }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "Awesome Food Store",
  contents: "Awesome food store by next.js ",
};

export default HeadInfo;
