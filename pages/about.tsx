import React from "react";
import Image from "next/image";

import about from "../styles/about.module.css";

const About = () => {
  return (
    <div className={about.about}>
      <h1 className={about.subtitle}>ABOUT</h1>
      <div className={about.line}></div>
      <div className={about.description}>
        <h3>
          식사를 보다 새롭게, 퀄리티 있게 <br />
        </h3>
        Awesome Food Store에서는, 여러분들의 퀄리티 있는 식사를 약속드립니다.
        <br />
        이왕이면 소중한 한 끼를 스스로에게 선물해보아요.
        <div className={about["image-wrapper"]}>
          <Image
            src="/image/restaurant.jpg"
            width="600"
            height="400"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
