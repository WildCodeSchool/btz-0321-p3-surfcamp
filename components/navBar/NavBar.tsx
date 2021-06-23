// import Link from "next/link";
import Image from "next/image";

export default function NavBar(): JSX.Element {
  return (
    <div className="flex justify-between items-center px-4 h-20 w-full bg-BlueCamp text-white fixed z-50 bg-opacity-0 ">
      <Image
        src="/images/surfCampLogo.png"
        width={150}
        height={55}
        alt="logo"
      />
      <div></div>
      <div className="flex items-center text-lg ">
        <Image
          src="/images/menu-outline.svg"
          width={50}
          height={50}
          alt="logo"
        />
        <a href="/login" className="px-2">
          login
        </a>
        <Image
          src="/images/francais.png"
          width={30}
          height={30}
          alt="francais"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
