import { useState } from "react";
import CardSlider from "./cardSlider";
import Next from "./next";
import Previous from "./previous";

function SliderDesktop() {
  const imgTest: { img: string; title: string }[] = [
    { img: "/Hossegor.jpg", title: "France" },
    { img: "/Hossegor.jpg", title: "Costa Rica" },
    { img: "/Hossegor.jpg", title: "Maroc" },
    { img: "/Hossegor.jpg", title: "Portugal" },
    { img: "/Lacanau.jpeg", title: "Australie" },
    { img: "/Lacanau.jpeg", title: "Indonésie" },
    { img: "/Lacanau.jpeg", title: "Seignosse" },
    { img: "/Lacanau.jpeg", title: "Lacanau" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-screen overflow-hidden">
      <Previous imgTest={imgTest} count={index} setCount={setIndex} />
      <div
        className="w-max "
        style={{
          transform: `translateX(${-320 * index}px)`,
        }}
      >
        <CardSlider imgTest={imgTest} count={index} />
      </div>
      <Next imgTest={imgTest} count={index} setCount={setIndex} />
    </div>
  );
}

export default SliderDesktop;
