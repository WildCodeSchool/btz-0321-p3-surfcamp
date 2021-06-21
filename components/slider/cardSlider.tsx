import Image from "next/image";

interface Iprop {
  imgTest: { img: string; title: string }[];
  count: number;
}

function CardSlider({ imgTest, count }: Iprop) {
  return (
    <div className="flex flex-row">
      {imgTest.map((test, index) => {
        return (
          <div key={index} className="w-1/4 p-5">
            <div className="absolute z-10 pl-10 sm:pl-8 text-4xl text-white pt-44 sm:pt-16">
              <p>{test.title}</p>
            </div>
            <Image src={test.img} alt="" width={200} height={200} />
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
