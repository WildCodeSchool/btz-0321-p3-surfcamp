// import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Nantes from "../../public/Images/Nantes.jpeg";
import Hossegor from "../../public/Images/Hossegor.jpg";
import Biarritz from "../../public/Images/Biarritz.jpg";
import lacanau from "../../public/Images/Lacanau.jpeg";
import Imgcontact from "../../public/Images/imgcontact.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { useQuery } from "react-query";
// import { City } from "../../interfaces";
// import { city } from "../../API/requests";

const fakePic = [
  {
    name: "Nantes",
    url: Nantes,
  },
  {
    name: "Hossegor",
    url: Hossegor,
  },
  {
    name: "Biarritz",
    url: Biarritz,
  },
  {
    name: "Lacanau",
    url: lacanau,
  },
  {
    name: "Cap Breton",
    url: Imgcontact,
  },
];

export default function CarouselSR(): JSX.Element {
  //   const { error, data, isLoading } = useQuery<City>("citypictures", () =>
  //     city.getCityPictures()
  //   );
  //   if (isLoading) return <div>Loading... </div>;
  //   if (error) return <div>Something went wrong</div>;

  function NextArrow({ onClick }: any): JSX.Element {
    return (
      <div className=" absolute -right-10 top-1/2 z-10">
        <button onClick={onClick}>
          <FaArrowRight />
        </button>
      </div>
    );
  }

  function PrevArrow({ onClick }: any): JSX.Element {
    return (
      <div className="absolute -left-10 top-1/2 z-10">
        <button onClick={onClick}>
          <FaArrowLeft />
        </button>
      </div>
    );
  }

  const setting = {
    infinite: true,
    lazyload: true,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex w-11/12 h-24 justify-center items-center relative ">
      <Slider
        {...setting}
        className="max-w-full w-full flex justify-center items-center"
      >
        {fakePic.map((pic, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center relative"
            >
              <Image
                src={pic.url}
                alt={pic.name}
                width="150px"
                height="100px"
                className="flex justify-center items-center rounded-lg"
              />
              <div className="absolute bg-black bg-opacity-10 w-[150px] h-[100px] z-1 top-0 left-2 flex justify-center items-center rounded-lg">
                <p className="w-full h-full mx-auto my-auto text-center text-white text-xl font-bold flex justify-center items-center">
                  {pic.name}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
