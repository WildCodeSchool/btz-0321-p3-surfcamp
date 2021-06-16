import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 h-20 w-full bg-BlueCamp text-white">
      <Image
        src="/images/surfCampLogo.png"
        width={150}
        height={55}
        alt="logo"
      />

      <div></div>
      <div className="flex items-center text-lg ">
        <button
          id="nav-toggle"
          onClick={() => setShow(!show)}
          className="flex items-center focus:outline-none  rounded text-teal-lighter hover:text-white hover:border-white "
        >
          <svg
            className="fill-current h-8 w-8 bg-teal-light"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <a className="px-2">login</a>
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
