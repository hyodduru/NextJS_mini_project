import { useRouter } from "next/router";
import Image from "next/image";
import { Card } from "antd";
import StoreModal from "./storemodal";
import home from "../styles/home.module.css";
import { BASE_URL } from "../config";

export default function Home({ stores }) {
  const router = useRouter();
  const { id } = router.query;

  const openModal = (id) => {
    router.replace({ query: { id } });
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={home.home}>
      {id && <StoreModal />}

      <h1 className={home.subtitle}>STORE</h1>
      <div className={home.line}></div>
      <div className={home["card-box"]}>
        {stores.map(({ id, thumb }) => (
          <div
            key={id}
            className={home["card-wrapper"]}
            onClick={() => openModal(id)}
          >
            <Card
              cover={<Image layout="fill" alt="food-thumnail" src={thumb} />}
              hoverable
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/stores`);
  const stores = await res.json();

  return {
    props: {
      stores,
    },
  };
};
