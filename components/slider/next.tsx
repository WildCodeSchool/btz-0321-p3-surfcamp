import Image from "next/image";
import arrowNext from "../../public/arrowright.svg";

interface Iprops {
  imgTest: { img: StaticImageData; title: string }[];
  setCount: Function;
  count: number;
}

function Next({ count, setCount, imgTest }: Iprops): JSX.Element {
  const handleClickNext = () => {
    setCount(count === imgTest.length - 1 ? 0 : count + 1);
  };
  return (
    <button
      className="absolute transform translate-y-24 translate-x-full cursor-pointer z-30 justify-end border-gray-500"
      onClick={handleClickNext}
    >
      <Image src={arrowNext} alt="right" />
    </button>
  );
}

export default Next;
