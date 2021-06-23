import Image from "next/image";

interface Iprop {
  imgTest: { img: StaticImageData; title: string }[];
}

function CardSlider({ imgTest }: Iprop) {
  return (
    <div className="flex flex-row w-5/12 h-full">
      {imgTest.map((test, index) => {
        return (
          <div key={index} className="p-14">
            <div className="absolute w-1/4 z-10 pl-10 text-3xl text-white pt-36">
              <p>{test.title}</p>
            </div>
            <Image src={test.img} alt="" className="rounded-xl" />
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
