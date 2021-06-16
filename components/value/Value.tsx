import Image from "next/image";

interface Iprops {
  imgvalue: string;
  titlevalue: string;
  textvalue: string;
}

function Value({ titlevalue, imgvalue, textvalue }: Iprops): JSX.Element {
  return (
    <div className="flex flex-col items-center content-center p-6 m-4 rounded-xl bg-gray-200">
      <Image src={imgvalue} alt="value" width={50} height={50} />
      <h2 className="flex justify-center py-4 text-xl text-BlueCamp">
        {titlevalue}
      </h2>
      <p className="flex text-center text-gray-500">{textvalue}</p>
    </div>
  );
}

export default Value;
