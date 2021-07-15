// import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Nantes from "../../public/Images/Nantes.jpeg";
import Hossegor from "../../public/Images/Hossegor.jpg";
import Biarritz from "../../public/Images/Biarritz.jpg";
import lacanau from "../../public/Images/Lacanau.jpeg";
import Imgcontact from "../../public/Images/imgcontact.jpg";
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

export default function CarouselSlickPhone(): JSX.Element {
  //   const { error, data, isLoading } = useQuery<City>("citypictures", () =>
  //     city.getCityPictures()
  //   );
  //   if (isLoading) return <div>Loading... </div>;
  //   if (error) return <div>Something went wrong</div>;

  const setting = {
    infinite: true,
    lazyload: true,
    slidesToShow: 1,
  };

  return (
    <div className="flex  h-56 justify-center items-center relative ml-10">
      <Slider
        {...setting}
        className="max-w-full w-full flex justify-center items-center"
      >
        {fakePic.map((pic, idx) => {
          return (
            <div
              key={idx}
              className="flex justify-center items-center relative pl-4 "
            >
              <Image
                src={pic.url}
                alt={pic.name}
                width="250px"
                height="200px"
                className="flex justify-center items-center rounded-lg"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
