import Image from "next/image";
import arrowPrevious from "../../public/images/arrowleft.svg";

interface Iprops {
  imgTest: { img: StaticImageData; title: string }[];
  setCount: (count: number) => void;
  count: number;
}

function Previous({ count, setCount, imgTest }: Iprops): JSX.Element {
  const handleClickPrevious = () => {
    setCount(count === 0 ? imgTest.length - 1 : count - 1);
  };
  return (
    <button
      className="absolute transform translate-y-24 translate-x-full cursor-pointer z-30 justify-end"
      onClick={handleClickPrevious}
    >
      <Image src={arrowPrevious} alt="right" />
    </button>
  );
}

export default Previous;
