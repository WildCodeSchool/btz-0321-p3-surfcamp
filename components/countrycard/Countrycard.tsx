import Image from "next/image";

interface Iprops {
  country: string;
  titlecountry: string;
}

function Countrycard({ country, titlecountry }: Iprops): JSX.Element {
  return (
    <div className="flex items-center content-center">
      <h2 className="absolute z-10 pl-16 text-4xl text-white pt-64">
        {titlecountry}
      </h2>
      <img
        src={country}
        alt="mec en short"
        className="bg-cover bg-no-repeat w-full"
      />{" "}
    </div>
  );
}

export default Countrycard;
