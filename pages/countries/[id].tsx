import { useRouter } from "next/router";
import Image from "next/image";
import Citycard from "../../components/citycard/Citycard";

const Biarritz = { town: "/Biarritz.jpg" };
const Hossegor = { town: "/Hossegor.jpg" };

function Country() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <header></header>
      <section>
        <Image
          src="/surfbg.jpg"
          alt="background surf image"
          width={2050}
          height={990}
        />
        <div className="bg-gray-900 m-4">
          <h2 className="flex justify-center pb-4">
            Découvrez les surfcamp et spot en France
          </h2>
          <p className="flex text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet nisl vitae dolor elementum pulvinar vel et eros. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Aliquam nibh
            odio, mollis sed nisl ut, tincidunt lobortis eros. Suspendisse
            potenti. Suspendisse potenti. Phasellus quis justo non eros
            venenatis vehicula. Aenean in velit ornare, placerat ex nec,
            vestibulum erat. In convallis et erat in vulputate. Aliquam luctus
            malesuada sapien non condimentum. Morbi tempus, nulla eu varius
            laoreet, mi dui ornare nisi, a mattis neque nulla non odio. Ut
            tempus malesuada urna. Ut finibus placerat enim, ultricies elementum
            mauris pulvinar vel. Vivamus consectetur risus vitae mi lacinia
            consequat. Curabitur rhoncus ut dolor eget malesuada. Suspendisse
            dictum tristique leo ut mollis. Mauris et felis tempor, aliquam leo
            vitae, malesuada mauris.
          </p>
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
        <div>
          <Citycard {...Biarritz} />
          <Citycard {...Hossegor} />
        </div>
      </section>
      <footer></footer>
      <p>Country: {id}</p>;
    </div>
  );
}

export default Country;
