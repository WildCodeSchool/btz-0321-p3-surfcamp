import Image from "next/image";

interface Iprops {
  country: string;
  titlecountry: string;
}

function Countrycard({ country, titlecountry }: Iprops): JSX.Element {
  return (
    <div className="flex items-center content-center">
      <h2 className="absolute z-10 pl-10 text-4xl text-white pt-44">
        {titlecountry}
      </h2>
      <Image
        src={country}
        alt="city"
        width={250}
        height={250}
        className="rounded-xl px-2"
      />
    </div>
  );
}

export default Countrycard;
