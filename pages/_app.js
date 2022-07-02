// import "../styles/antd.less";
import "../styles/globals.css";
import Layout from "../components/Layout";
import "antd/dist/antd.css";
import { SWRConfig } from "swr";
import axios from "axios";

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
