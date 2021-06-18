import surfeurIcon from "../../public/surfeur.svg";
import yangIcon from "../../public/yang.svg";
import peaceIcon from "../../public/peace.svg";
import Image from "next/image";

interface Iprops {
  titleteam: string;
  textteam: string;
  titlevalue: string;
  textvalue: string;
  titlecontact: string;
  textcontact: string;
}

function Value({
  titleteam,
  textteam,
  titlevalue,
  textvalue,
  titlecontact,
  textcontact,
}: Iprops): JSX.Element {
  return (
    <div className="flex flex-col p-10 bg-gray-200 sm:flex-row">
      <div className="sm:w-1/3 sm:mx-4">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={surfeurIcon}
            alt="surfeur logo"
            className="sm:flex sm:flex-col sm:justify-center"
          />
        </div>
        <h2 className="flex justify-start py-4 text-xl text-BlueCamp sm:justify-center ">
          {titleteam}
        </h2>
        <p className="flex text-left text-gray-500  sm:text-center">
          {textteam}
        </p>
      </div>
      <div className="sm:w-1/3 sm:mx-4">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={yangIcon}
            alt="surfeur logo"
            className="sm:flex sm:flex-col sm:justify-center "
          />
        </div>
        <h2 className="flex justify-start py-4 text-xl text-BlueCamp sm:justify-center">
          {titlevalue}
        </h2>
        <p className="flex text-left text-gray-500 sm:text-center">
          {textvalue}
        </p>
      </div>
      <div className="sm:w-1/3 sm:mx-4">
        <div className="hidden sm:flex sm:justify-center">
          <Image
            src={peaceIcon}
            alt="surfeur logo"
            className="sm:flex sm:flex-col sm:justify-center"
          />
        </div>
        <h2 className="flex justify-start py-4 text-xl text-BlueCamp sm:justify-center">
          {titlecontact}
        </h2>
        <p className="flex text-left text-gray-500 ">{textcontact}</p>
      </div>
    </div>
  );
}

export default Value;
