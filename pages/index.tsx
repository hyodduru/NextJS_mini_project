import { useRouter } from "next/router";
import Image from "next/image";
import { Card } from "antd";
import StoreModal from "./storemodal";

import { BASE_URL } from "../config";

interface Props {
  stores: {
    id: number;
    name: string;
    description: string;
    image: string;
    thumb: string;
    url: string;
  }[];
}

export default function Home({ stores }: Props) {
  const router = useRouter();
  const { id } = router.query;

  const openModal = (id: number) => {
    router.replace({ query: { id } });
  };

  return (
    <div className="mx-auto mt-28 mb-0 py-0 px-4 max-w-5xl">
      {id && <StoreModal />}

      <h1 className="inline font-Arima text-3xl text-blue-900">STORE</h1>
      <div className="my-2 mx-0  h-1 bg-blue-900"></div>
      <div className="py-5 px-0 h-[27rem] grid grid-cols-4 lg:grid-cols-5 w-[800px] lg:w-full mx-auto">
        {stores.map(({ id, thumb }) => (
          <div
            key={id}
            className="w-48 h-48 rounded-[8px] overflow-hidden"
            onClick={() => openModal(id)}
          >
            <Card
              cover={<Image layout="fill" alt="food-thumnail" src={thumb} />}
              hoverable
            />
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
