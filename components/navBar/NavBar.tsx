// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import Logo from "../../public/Images/surfCampLogo.png";

export default function NavBar(): JSX.Element {
  const user = useSelector((state: any) => state.user);

  return (
    <div className="flex justify-between  items-center align-middle px-4 h-10 w-full bg-BlueCamp text-white fixed z-50 bg-opacity-100 ">
      <Link href="/">
        <button className="h-full flex items-center align-middle justify-center">
          <Image
            className="cursor-pointer"
            src={Logo}
            width={90}
            height={33}
            alt="logo"
          />
        </button>
      </Link>
      <div></div>
      <div className="flex items-center text-sm ">
        <a href="/login" className="px-2 hover:border-b">
          login
        </a>
        <p>/</p>
        <a href="/signin" className="px-2 hover:border-b">
          Sign In
        </a>
        {user.picture && (
          <Image
            src={user.picture}
            width={30}
            height={30}
            alt="francais"
            className="rounded-full"
          />
        )}
        <Link href="/profile">
          {user.firstname ? (
            <button>{user.firstname}</button>
          ) : (
            <button>Profile</button>
          )}
        </Link>
      </div>
    </div>
  );
}
