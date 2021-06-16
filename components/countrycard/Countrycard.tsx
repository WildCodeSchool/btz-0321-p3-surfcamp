import Image from "next/image";

interface Iprops {
  country: string;
  title: string;
}

function Countrycard({ country, title }: Iprops): JSX.Element {
  return (
    <div className="">
      <h2>{title}</h2>
      <Image src={country} alt="city" width={375} height={375} />
    </div>
  );
}

export default Countrycard;
