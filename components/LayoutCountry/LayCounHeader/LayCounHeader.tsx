import Image from "next/image";
import Biarritz from "../../../public/images/Biarritz.jpg";

export default function LayCounHeader(): JSX.Element {
  return (
    <div className="w-full h-72 flex flex-col">
      <div className="h-64 w-full relative mt-10">
        <Image src={Biarritz} alt="biarritz" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
