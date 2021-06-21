import { useState } from "react";
import Image from "next/image";
import arrowLeft from "../../public/arrowleft.svg";
import arrowRight from "../../public/arrowright.svg";

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

  const handleClickRight = () => {
    setIndex(index === imgTest.length - 1 ? 0 : index + 1);
  };
  const handleClickLeft = () => {
    setIndex(index === 0 ? imgTest.length - 1 : index - 1);
  };
  return (
    <div className="relative">
      <button
        className="absolute transform translate-y-52 translate-x-3 cursor-pointer z-20"
        onClick={handleClickLeft}
      >
        <Image src={arrowLeft} alt="left" className="text-black" />
      </button>
      <button
        className="absolute transform translate-y-52 translate-x-80 cursor-pointer z-20"
        onClick={handleClickRight}
      >
        <Image src={arrowRight} alt="right" className="text-black" />
      </button>
      <div
        className="flex w-max overflow-hidden"
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
