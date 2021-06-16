import { useRouter } from "next/router";
import Image from "next/image";
import Citycard from "../../components/citycard/Citycard";

const Biarritz = { town: "/Biarritz.jpg" };
const Hossegor = { town: "/Hossegor.jpg" };
const Nantes = { town: "/Nantes.jpeg" };
const Hendaye = { town: "/Hendaye.jpeg" };
const Lacanau = { town: "/Lacanau.jpeg" };
const LaTorche = { town: "/Latorche.jpg" };

function Country() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <header></header>
      <section className="">
        <div className=" bg-opacity-40">
          <Image
            src="/surfbg.jpg"
            alt="background surf image"
            width={2050}
            height={990}
          />
          <div className="absolute top-1/3 bg-BlueCamp bg-opacity-40 text-white ml-14 mr-14 p-10 rounded-xl flex-col items-center ">
            <h2 className="flex justify-center pb-4 font-extrabold text-2xl">
              Découvrez les surfcamp et spot en France
            </h2>
            <p className="flex text-center text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sit amet nisl vitae dolor elementum pulvinar vel et
              eros. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Aliquam nibh odio, mollis sed nisl ut, tincidunt
              lobortis eros. Suspendisse potenti. Suspendisse potenti. Phasellus
              quis justo non eros venenatis vehicula. Aenean in velit ornare,
              placerat ex nec, vestibulum erat. In convallis et erat in
              vulputate. Aliquam luctus malesuada sapien non condimentum. Morbi
              tempus, nulla eu varius laoreet, mi dui ornare nisi, a mattis
              neque nulla non odio. Ut tempus malesuada urna. Ut finibus
              placerat enim, ultricies elementum mauris pulvinar vel. Vivamus
              consectetur risus vitae mi lacinia consequat. Curabitur rhoncus ut
              dolor eget malesuada. Suspendisse dictum tristique leo ut mollis.
              Mauris et felis tempor, aliquam leo vitae, malesuada mauris.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Surfer en France</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet nisl vitae dolor elementum pulvinar vel et eros. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Aliquam nibh
            odio, mollis sed nisl ut, tincidunt lobortis eros. Suspendisse
            potenti. Suspendisse potenti. Phasellus quis justo non eros
            venenatis vehicula. Aenean in velit ornare, placerat ex nec,
            vestibulum erat.
          </p>
        </div>
      </section>
      <section>
        <div className="flex flex-wrap">
          <Citycard {...Biarritz} />
          <Citycard {...Hossegor} />
          <Citycard {...Hendaye} />
          <Citycard {...Lacanau} />
          <Citycard {...LaTorche} />
          <Citycard {...Nantes} />
        </div>
      </section>
      <footer></footer>
      <p>Country: {id}</p>;
    </div>
  );
}

export default Country;
