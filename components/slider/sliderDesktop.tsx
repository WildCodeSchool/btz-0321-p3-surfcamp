import { useState } from "react";
import Image from "next/image";
import CardSlider from "./cardSlider";
import arrowLeft from "../../public/arrowleft.svg";
import arrowRight from "../../public/arrowright.svg";

function SliderDesktop() {
  const imgTest: { img: string; title: string }[] = [
    { img: "/Hossegor.jpg", title: "Hossegor" },
    { img: "/Hossegor.jpg", title: "Bayonne" },
    { img: "/Hossegor.jpg", title: "Anglet" },
    { img: "/Hossegor.jpg", title: "Boucau" },
    { img: "/Lacanau.jpeg", title: "Hendaye" },
    { img: "/Lacanau.jpeg", title: "Capbreton" },
    { img: "/Lacanau.jpeg", title: "Seignosse" },
    { img: "/Lacanau.jpeg", title: "Lacanau" },
  ];

  const [index, setIndex] = useState(0);

  const handleClickRight = () => {
    setIndex(index === imgTest.length - 1 ? 0 : index + 1);
  };
  const handleClickLeft = () => {
    setIndex(index === 0 ? imgTest.length - 1 : index - 1);
  };
  return (
    <div className="relative w-screen">
      <div>
        <button
          className="absolute transform translate-y-24 translate-x-1 cursor-pointer z-30 justify-start"
          onClick={handleClickLeft}
        >
          <Image src={arrowLeft} alt="left" />
        </button>
        <button
          className="absolute transform translate-y-24 translate-x-full cursor-pointer z-30 justify-end"
          onClick={handleClickRight}
        >
          <Image src={arrowRight} alt="right" />
        </button>
      </div>
      <div
        className="w-max overflow-hidden"
        style={{
          transform: `translateX(${-320 * index}px)`,
        }}
      >
        <CardSlider imgTest={imgTest} count={index} />
      </div>
    </div>
  );
}

export default SliderDesktop;
