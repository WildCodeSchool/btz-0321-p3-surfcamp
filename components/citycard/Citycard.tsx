import Image from "next/image";

interface Iprops {
  town: string;
}

function Citycard({ town }: Iprops): JSX.Element {
  return (
    <div>
      <Image src={town} alt="city" width={50} height={50} />
    </div>
  );
}

export default Citycard;
