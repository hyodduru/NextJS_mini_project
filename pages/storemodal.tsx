import React from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Modal } from "antd";

import { BASE_URL } from "../config";

const StoreModal = () => {
  const router = useRouter();
  const { id } = router.query;

  const closeModal = () => {
    router.replace("/");
  };

  const { data } = useSWR(id ? `${BASE_URL}/stores/${id}` : null);

  return (
    <Modal
      width="1000px"
      visible={!!id}
      onCancel={closeModal}
      centered
      maskClosable={false}
      footer={null}
    >
      <div className="flex">
        <Image
          src={data?.image || "/image/default.png"}
          alt="main"
          width="400"
          height="640"
        />
        <div className="relative flex-1 py-10 px-20 whitespace-pre-line">
          <h1 className="font-Nanum inline font-bold text-xl">
            {data?.name.toUpperCase()}
          </h1>
          <div className="my-5 mx-0 leading-6">{data?.description}</div>
          {data?.url && (
            <Link href={data.url} passHref>
              <a
                className="absolute left-10 top-[90%] text-black font-semibold"
                target="_blank "
                rel="noreferrer noopener"
              >
                <div>
                  {data.url}
                  <div>매장 위치 보기</div>
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default StoreModal;
