// import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Nantes from "../../public/images/Nantes.jpeg";
import Hossegor from "../../public/images/Hossegor.jpg";
import Biarritz from "../../public/images/Biarritz.jpg";
import lacanau from "../../public/images/Lacanau.jpeg";
import Imgcontact from "../../public/images/imgcontact.jpg";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
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
        <button onClick={onClick} className="focus:outline-none">
          <BsChevronCompactRight />
        </button>
      </div>
    );
  }

  function PrevArrow({ onClick }: any): JSX.Element {
    return (
      <div className="absolute -left-10 top-1/2 z-10">
        <button onClick={onClick} className="focus:outline-none">
          <BsChevronCompactLeft />
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
    <div className="flex w-11/12 h-24 justify-center items-center align-middle relative ">
      <Slider
        {...setting}
        className="max-w-full w-full flex justify-center items-center align-middle"
      >
        {fakePic.map((pic, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center relative align-middle"
            >
              <Image
                src={pic.url}
                alt={pic.name}
                width="150px"
                height="100px"
                className="flex justify-center items-center rounded-lg"
              />
              <div className="absolute bg-black bg-opacity-10 w-[150px] h-[100px] z-1 top-0 right-2 flex justify-center items-center rounded-lg">
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
