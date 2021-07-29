import { useState } from "react";
import CardSlider from "./cardSlider";
import Next from "./next";
import Previous from "./previous";
import Hossegor from "../../public/images/Hossegor.jpg";
import Lacanau from "../../public/images/Lacanau.jpeg";

function SliderDesktop(): JSX.Element {
  const imgTest: { img: StaticImageData; title: string }[] = [
    { img: Hossegor, title: "France" },
    { img: Hossegor, title: "Costa Rica" },
    { img: Hossegor, title: "Maroc" },
    { img: Hossegor, title: "Portugal" },
    { img: Lacanau, title: "Australie" },
    { img: Lacanau, title: "Indonésie" },
    { img: Lacanau, title: "Seignosse" },
    { img: Lacanau, title: "Lacanau" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden">
      <Previous imgTest={imgTest} count={index} setCount={setIndex} />
      <div
        className="w-max "
        style={{
          transform: `translateX(${-320 * index}px)`,
        }}
      >
        <CardSlider imgTest={imgTest} />
      </div>
      <Next imgTest={imgTest} count={index} setCount={setIndex} />
    </div>
  );
}

export default SliderDesktop;
