import { useRouter } from "next/router";
import Image from "next/image";
import Citycard from "../../components/citycard/Citycard";

const Biarritz = { town: "/Biarritz.jpg" };
const Hossegor = { town: "/Hossegor.jpg" };
const Nantes = { town: "/Nantes.jpeg" };
const Hendaye = { town: "/Hendaye.jpeg" };
const Lacanau = { town: "/Lacanau.jpeg" };
const LaTorche = { town: "/Latorche.jpg" };

function Country(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Country: {id}</p>;
    </div>
  );
}

export default Country;
