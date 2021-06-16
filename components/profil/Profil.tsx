import Link from "next/link";
import Image from "next/dist/client/image";
import { useState } from "react";

export default function Profil() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col bg-white mt-2 w-2/5 ">
      <div className="flex flex-col">
        <div>
          <div className="flex items-start justify-center bg-gray-700 h-44">
            <p className="text-2xl  text-center text-white mt-4">Profil</p>
            <button id="close" onClick={() => setShow(!show)}>
              <Image
                className="focus:outline-none"
                src="/images/close-outline.svg"
                width={30}
                height={30}
                alt="close"
              />
            </button>
          </div>
          <div className="flex items-end justify-center -m-28">
            <img
              className="w-1/3 h-full rounded-full"
              src="https://via.placeholder.com/237x239"
            />
          </div>
          <div className="flex flex-col items-center justify-end mt-32">
            <p className="text-xl font-semibold">Francois le francais </p>
            <p className="text-base text-center">pasteque@ananas.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 ">
          <p className="text-l my-3">Editer mon profil</p>
          <p className="text-l my-3">Mes reservations</p>
          <p className="text-l my-3">Messages</p>
          <p className="text-l my-3">A propos de Surf Camp</p>
          <p className="text-l my-3">Information légales</p>
        </div>
      </div>

      <div className="flex text-center justify-center h-16 mt-5 bg-red-300">
        <p className="flex text-xl items-center">Deconnexion</p>
      </div>
    </div>
  );
}
