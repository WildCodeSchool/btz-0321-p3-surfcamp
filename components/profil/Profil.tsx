import Link from "next/link";
import Image from "next/dist/client/image";
import { useState } from "react";

export default function Profil() {
  const [show, setShow] = useState(false);

  return (
    <div className="absolute right-2  flex flex-col border border-white rounded-lg bg-white mt-2 w-[300px] ">
      <div className="flex flex-col">
        <div className="flex flex-col w-full">
          <div className="flex bg-BlueCamp rounded-t-lg w-full h-32">
            <div className="w-2/5"></div>
            <p className="w-full text-2xl  text-white flex justify-center mt-4">
              Profil
            </p>
            <button
              className="w-2/5 focus:outline-none flex justify-end items-start  "
              id="close"
              onClick={() => setShow(!show)}
            >
              <Image
                src="/images/close-outline.svg"
                width={30}
                height={30}
                alt="close"
              />
            </button>
          </div>
          <div className="flex items-end justify-center -m-16">
            <img
              className=" rounded-full "
              src="https://via.placeholder.com/237x239"
              width="150px"
              height="150px"
            />
          </div>
          <div className="flex flex-col items-center justify-end mt-20">
            <p className="text-xl font-semibold">Francois le francais </p>
            <p className="text-base text-center">pasteque@ananas.com</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-3 ">
          <div className="flex border-t flex-row justify-between w-full">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">
              Editer mon profil
            </p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/chevron-forward-outline.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>
          <div className="flex border-t flex-row justify-between w-full">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">Mes reservations</p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/chevron-forward-outline.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>
          <div className="flex border-t flex-row justify-between w-full">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">Messages</p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/chevron-forward-outline.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>
          <div className="flex border-t flex-row justify-between w-full">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">
              A propos de Surf Camp
            </p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/chevron-forward-outline.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>
          <div className="flex border-t flex-row justify-between w-full">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">
              Informations legales
            </p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/chevron-forward-outline.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>
          <div className="flex border-t flex-row justify-between w-full">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">Mes reservations</p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/chevron-forward-outline.svg"
                width={20}
                height={20}
                alt="close"
              />
            </div>
          </div>
          <div className="flex border-t flex-row justify-between w-full h-14  rounded-b-lg bg-red-300">
            <div className="w-1/5"></div>
            <p className="text-l   w-full text-center py-4">Deconnexion</p>
            <div className="w-1/5  flex items-center">
              <Image
                src="/images/exit-outline.svg"
                width={25}
                height={25}
                alt="close"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
