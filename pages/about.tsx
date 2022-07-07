import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto mt-28 mb-0 py-0 px-4 max-w-5xl">
      <h1 className="inline font-Arima text-3xl text-blue-900">ABOUT</h1>
      <div className="my-2 mx-0  h-1 bg-blue-900"></div>
      <div className="absolute left-1/2 -translate-x-1/2 my-5 mx-0 p-8 font-Nanum text-base text-center leading-8">
        <h3 className="inline font-bold text-center leading-10">
          식사를 보다 새롭게, 퀄리티 있게 <br />
        </h3>
        Awesome Food Store에서는, 여러분들의 퀄리티 있는 식사를 약속드립니다.
        <br />
        이왕이면 소중한 한 끼를 스스로에게 선물해보아요.
        <div className="mt-5 h-72">
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
