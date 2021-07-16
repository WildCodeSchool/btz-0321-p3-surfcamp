// import { useRouter } from "next/router";
import Image from "next/image";
import CarouselSlick from "../../components/CarouselSlick/CarouselSlick";
import Biarritz from "../../public/Images/Biarritz.jpg";
import Footer from "../../components/Footer/Footer";
import lacanau from "../../public/Images/Lacanau.jpeg";

function Country(): JSX.Element {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div className="w-full h-screen">
      <div className="bg-BlueCamp w-full h-2/4 relative">
        <Image src={Biarritz} layout="fill" objectFit="cover" />
      </div>
      <div className="text-center flex w-full h-3/5 bg-BlueCamp">
        <div className="w-1/2 px-32 text-white flex flex-col justify-evenly items-center">
          <div>
            <h2 className="text-center text-3xl">France</h2>
          </div>
          <div>
            <p className="h-full ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis laboriosam illum magnam aliquid incidunt necessitatibus
              odio non animi, eius expedita quibusdam explicabo id architecto
              consequuntur labore repellat exercitationem quos. Hic? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam
              illum magnam aliquid incidunt necessitatibus odio non animi, eius
              expedita quibusdam explicabo id architecto consequuntur labore
              repellat exercitationem quos. Hic? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Reiciendis laboriosam illum magnam
              aliquid incidunt necessitatibus odio non animi, eius expedita
              quibusdam explicabo id architecto consequuntur labore repellat
              exercitationem quos. Hic? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis laboriosam illum magnam aliquid
              incidunt necessitatibus odio non animi, eius expedita quibusdam
              explicabo id architecto consequuntur labore repellat
              exercitationem quos. Hic? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Reiciendis laboriosam illum magnam aliquid
              incidunt necessitatibus odio non animi, eius expedita quibusdam
              explicabo id architecto consequuntur labore repellat
              exercitationem quos. Hic?
            </p>
          </div>
        </div>
        <div className="border h-3/4 my-auto"></div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-3/4 h-3/4 relative">
            <Image src={lacanau} layout="fill" objectFit="fill" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-10">
        <h2 className="font-bold text-2xl text-BlueCamp pb-10">
          Choisis ton Surf Camp par ville
        </h2>
        <CarouselSlick />
      </div>
      <Footer />
    </div>
  );
}

export default Country;
