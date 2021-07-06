import Image from "next/image";
import Hossegor from "../../public/Hossegor.jpg";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function Card(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <getProperties />
    </QueryClientProvider>
  );
}
function getProperties(): JSX.Element {
  // const { isLoading, error, data } = useQuery(
  //   "properties",
  //   async () =>
  //     await axios
  //       .get(`${process.env.NEXT_PUBLIC_GET_PROPERTIES}`)
  //       .then((res) => res.json())
  //);

  const { isLoading, error, data } = useQuery("properties", () =>
  fetch (`${process.env.NEXT_PUBLIC_GET_PROPERTIES}`).then((res)=> res.json()),

  if (isLoading) return "Loading...";
  if (error) return "Oooops il y a un error quelque part:" + error.message;

  return (
    <div className="CARD PLACEMENT m-2 w-2/2 border rounded-md border-black flex flex-col">
      <div className="CARD SIZE flex flex-col bg-white // lg:flex-row md:w-2/2 ">
        <div className="IMAGE flex bg-gray-500 md:w-full // md:h-full  lg:w-1/3 ">
          <Image src={Hossegor} layout="fixed" height={"250px"} alt="hoss" />
        </div>
        <div className="INFORMATION flex flex-col space-y-2 p-2  w-full  md:w-full lg:justify-around">
          <div className="mx-2 text-xs \ lg:text-base">
            <p>country</p>
          </div>
          <div className="flex justify-between mx-2 text-lg lg:text-xl">
            <h1>city</h1>
            <h2>50$ nuit</h2>
          </div>
          <div className="mx-2 text-xs \ lg:text-base">
            <p>{data.type}</p>
          </div>
          <div className="flex mx-2 \ md:mb-5 \ text-sm / lg:text-base">
            <p>{data.description}</p>
          </div>
          <footer className="flex justify-between align-baseline pt-5 text-xs lg:text-sm ">
            <div className="">npersonpersonnes</div>
            <div className="">ndays jours</div>
            <div className="">Commentaires(4/5)</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
