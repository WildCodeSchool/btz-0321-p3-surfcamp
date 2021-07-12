// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../../redux/actions";
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
    <div className="flex justify-between  items-center align-middle pl-4 h-10 w-full bg-BlueCamp text-white fixed z-50 bg-opacity-100 ">
      <Link href="/">
        <button className="h-full hover:opacity-40 active:scale-95 focus:outline-none outline-none flex items-center align-middle justify-center">
          <Image
            className="cursor-pointer"
            src="/images/surfCampLogo.png"
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
            <a href="/login" className="px-2 active:scale-95 hover:border-b">
              login
            </a>
            <p>-</p>
            <a href="/signin" className="px-2 active:scale-95 hover:border-b">
              Sign In
            </a>
          </div>
        ) : (
          <button onClick={handleClick}>Logout</button>
        )}
        <Link href="/profile">
          {user.firstname ? (
            <button className="mx-2">{user.firstname}</button>
          ) : (
            <button className="mx-2 active:scale-95 outline-none focus:outline-none">
              Profile
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
