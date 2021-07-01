// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
export default function NavBar(): JSX.Element {
  return (
    <div className="flex justify-between items-center px-4 h-20 w-full bg-BlueCamp text-white fixed z-50 bg-opacity-100 ">
      <Image
        src="/images/surfCampLogo.png"
        width={150}
        height={55}
        alt="logo"
      />
      <div></div>
      <div className="flex items-center text-lg ">
        <a href="/login" className="px-2 hover:border-b">
          login
        </a>
        <p>/</p>
        <a href="/signin" className="px-2 hover:border-b">
          Sign In
        </a>
        <Image
          src="/images/francais.png"
          width={30}
          height={30}
          alt="francais"
          className="rounded-full"
        />
        <Link href="/profile">
          <button>Profile</button>
        </Link>
      </div>
    </div>
  );
}
