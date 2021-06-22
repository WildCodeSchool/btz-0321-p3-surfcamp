import { useState } from "react";
import Image from "next/image";
import Next from "./next";
import Previous from "./previous";

function SliderMobile() {
  const imgTest: [
    { img: string; title: string },
    { img: string; title: string },
    { img: string; title: string }
  ] = [
    { img: "/Hossegor.jpg", title: "Hossegor" },
    { img: "/Lacanau.jpeg", title: "Lacanau" },
    { img: "/Nantes.jpeg", title: "Nantes" },
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="relative overflow-hidden">
      <div>
        <Next imgTest={imgTest} count={index} setCount={setIndex} />
        <Previous imgTest={imgTest} count={index} setCount={setIndex} />
      </div>
      <div
        className="flex w-max"
        style={{
          transform: `translateX(${-375 * index}px)`,
        }}
      >
        {imgTest.map((test, index) => (
          <div key={index} className="flex items-center content-center">
            <div className="absolute z-10 pl-10 sm:pl-8 text-4xl text-white pt-44 sm:pt-16">
              <p>{test.title}</p>
            </div>
            <Image
              src={test.img}
              alt=""
              width={375}
              height={375}
              className="bg-center bg-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderMobile;
