import Image from "next/image";
import Hossegor from "../../public/Hossegor.jpg";
export default function CardPattern(): JSX.Element {
  return (
    <div className="w-2/2 h-48 border m-2 border-black rounded-md">
      <div className="flex">
        <div className="w-2/3">
          <p className="text-sm">country</p>
          <div className="flex justify-between m-1">
            <p>Ville</p>
            <p>prix</p>
          </div>
          <p className="text-sm">sejour decouverte</p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis p
          </p>
          <p className="">footer</p>
        </div>
        <div className="w-1/3">
          <Image src={Hossegor} height={200} width={200} alt="hoss" />
        </div>
      </div>
    </div>
  );
}
