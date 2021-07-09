import Image from "next/image";
import map from "../../public/Images/map.png";

export default function GoogleMap(): JSX.Element {
  return (
    <div>
      <div>
        <Image src={map} layout="intrinsic" alt="google map image" />
      </div>
    </div>
  );
}
