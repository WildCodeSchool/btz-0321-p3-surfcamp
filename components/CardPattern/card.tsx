import Image from "next/image";
import Hossegor from "../../public/Hossegor.jpg";
import { useQuery } from "react-query";
import { Property } from "../../interfaces";
import { AddressProperty } from "../../interfaces";

export default function Card({
  addressId,
  type,
  priceByNight,
  description,
}: Property): JSX.Element {
  const { data, error, isLoading } = useQuery<AddressProperty[]>(
    ["address", addressId],
    () =>
      fetch(
        `${process.env.NEXT_PUBLIC_DATAAPI_URL}/addresses/${addressId}`
      ).then((res) => res.json())
  );
  if (isLoading) return <div>Loading... </div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  return (
    <div>
      <div className="CARD PLACEMENT m-2 w-2/2 border rounded-md border-gray-400 font-bold text-gray-500 flex flex-col">
        <div className="CARD SIZE flex flex-col bg-white rounded-md // lg:flex-row md:w-2/2 ">
          <div className="IMAGE flex rounded-l-md md:w-full // md:h-full  lg:w-1/3 ">
            <Image
              src={Hossegor}
              layout="fixed"
              height={"250px"}
              alt="hoss"
              className="md:rounded-l-md // rounded-t-md"
            />
          </div>
          <div className="INFORMATION flex flex-col space-y-2 p-2  w-full  md:w-full lg:justify-around">
            <div className="mx-2  \ lg:text-base">
              <p>{data.countryCode}</p>
            </div>
            <div className="flex justify-between mx-2 text-lg lg:text-xl">
              <h1 className=" font-bold">{data.city}</h1>
              <h2 className="lg:text-3xl text-xl">{priceByNight}$/n </h2>
            </div>
            <div className="mx-2 text-xs \ lg:text-base">
              <p>{type}</p>
            </div>
            <div className="flex mx-2 \ md:mb-5 \ text-sm / lg:text-base">
              <p>{description}</p>
            </div>
            <div className="border border-gray-400 w-72 mx-auto"></div>
            <footer className="flex justify-between align-baseline  text-xs lg:text-sm  ">
              <div className="">npersonpersonnes</div>
              <div className="">ndays jours</div>
              <div className="">Commentaires(4/5)</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
