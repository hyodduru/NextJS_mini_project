import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Empty } from "antd";

import error from "../styles/error.module.css";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 5000);
  }, [router]);

  return (
    <div className={error.error}>
      <Empty
        image="/image/error.png"
        imageStyle={{
          height: 60,
        }}
        description={<h1>404 Error - Page Not Found</h1>}
      />
    </div>
  );
};

export default Custom404;
