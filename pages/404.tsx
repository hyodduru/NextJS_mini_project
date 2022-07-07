import React from "react";
import { Empty } from "antd";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="mt-80 text-2xl ">
      <Empty
        image="/image/error.png"
        imageStyle={{
          height: 60,
          width: 60,
          marginLeft: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
        description={
          <>
            <div className="text-3xl font-bold h-12">
              404 Error - Page Not Found
            </div>
            <Link href="/">
              <a className="text-blue-900 font-bold text-base mx-10 my-0">
                메인 화면으로 이동하기
              </a>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Custom404;
