import Image from "next/image";

interface Iprops {
  city: string;
  titlecity: string;
}

function Citycard({ titlecity, city }: Iprops): JSX.Element {
  return (
    <div className="flex items-center content-center">
      <h2 className="absolute z-10 pl-10 sm:pl-8 text-4xl text-white pt-44 sm:pt-16">
        {titlecity}
      </h2>
      <Image
        src={city}
        alt="city"
        width={250}
        height={250}
        className="rounded-xl px-2"
      />
    </div>
  );
}

export default Citycard;
