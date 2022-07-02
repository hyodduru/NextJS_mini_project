import Image from "next/image";
import { BASE_URL } from "../config";
import { Card } from "antd";

import home from "../styles/home.module.css";

export default function Home({ stores }) {
  return (
    <div className={home.home}>
      <div className={home["card-box"]}>
        {stores.map(({ id, name, description, image, thumb }) => (
          <div key={id} className={home["card-wrapper"]}>
            <Card
              style={{ width: "180px", height: "180px" }}
              key={id}
              cover={<Image layout="fill" alt="food-thumnail" src={thumb} />}
              hoverable
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/stores`);
  const stores = await res.json();

  return {
    props: {
      stores,
    },
  };
};
