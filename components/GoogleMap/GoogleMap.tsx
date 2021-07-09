import Image from "next/image";
import map from "../../public/Images/map.png";

export default function GoogleMap(): JSX.Element {
  return (
    <div>
      <div className="w-full h-full">
        <Image src={map} height={500} width={800} alt="google map image" />
      </div>
    </div>
  );
}
