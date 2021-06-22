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
          <div key={index} className="w-1/4 h-1/4 p-5">
            <div className="absolute z-10 pl-10 text-3xl text-white pt-36">
              <p>{test.title}</p>
            </div>
            <Image
              src={test.img}
              alt=""
              width={280}
              height={280}
              className="rounded-xl"
            />
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
