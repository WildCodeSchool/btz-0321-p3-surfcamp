import Image from "next/image";

interface Iprops {
  town: string;
}

function Citycard({ town }: Iprops): JSX.Element {
  return (
    <div className="">
      <Image src={town} alt="city" width={750} height={500} />
    </div>
  );
}

export default Citycard;
