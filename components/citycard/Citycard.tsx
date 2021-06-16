import Image from "next/image";

interface Iprops {
  city: string;
  titlecity: string;
}

function Citycard({ titlecity, city }: Iprops): JSX.Element {
  return (
    <div className="flex items-center content-center">
      <h2 className="absolute z-10 pl-16 text-4xl text-white pt-64">
        {titlecity}
      </h2>
      <Image src={city} alt="city" width={375} height={375} />
    </div>
  );
}

export default Citycard;
