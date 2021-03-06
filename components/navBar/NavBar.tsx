// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../../redux/actions";
import Logo from "../../public/images/surfCampLogo.png";
import { BiUser } from "react-icons/bi";

export default function NavBar(): JSX.Element {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      isLogin({
        email: "",
        firstname: "",
        id: "",
        picture: "",
        role: "",
        startSession: new Date(),
      })
    );
  };

  return (
    <div className="flex justify-between  items-center align-middle pl-4 h-12 w-full bg-BlueCamp text-white fixed z-50 bg-opacity-100 ">
      <Link href="/">
        <button className="h-full hover:opacity-40 active:scale-95 focus:outline-none outline-none flex items-center align-middle justify-center">
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
      <div className="flex relative h-10 items-center text-sm ">
        {!user.firstname ? (
          <div className="flex">
            <a href="/login" className="px-2 active:scale-95 ">
              <button className="border py-1 px-3 rounded-lg font-bold  hover:bg-white hover:text-BlueCamp">
                Login
              </button>
            </a>

            <a href="/signin" className="px-2 active:scale-95">
              <button className="border py-1 px-3 rounded-lg font-bold  hover:bg-white hover:text-BlueCamp">
                Sign In
              </button>
            </a>
          </div>
        ) : (
          <button onClick={handleClick}>Logout</button>
        )}
        <Link href="/profile">
          {user.firstname ? (
            <button className="mx-2">{user.firstname}</button>
          ) : (
            <button className="mx-2 active:scale-95 outline-none focus:outline-none border rounded-full p-0.5 mr-3 hover:bg-white hover:text-BlueCamp">
              <BiUser className="w-5 h-5" />
            </button>
          )}
        </Link>
        {user.picture && (
          <Link href="/profile">
            {/* <Image
              className="cursor-pointer"
              src={user.picture}
              width={40}
              height={40}
              alt="francais"
            /> */}
            <div className="h-10">
              <img className="w-10" src={user.picture} alt="" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
