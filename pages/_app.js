import axios from "axios";
import { SWRConfig } from "swr";

import Layout from "../components/Layout";

import "antd/dist/antd.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((response) => response.data),
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
