import Link from "next/link";

export default function Profil() {
  return (
    <div className="flex flex-col bg-white mt-2 ">
      <div className="">
        <div>
          <div className="flex items-start justify-center bg-gray-700">
            <p className="text-2xl text-center text-white">Profile</p>
          </div>
          <div className="flex items-end justify-center w-25 h-25 mt-10">
            <img
              className="w-20 h-full rounded-full"
              src="https://via.placeholder.com/237x239"
            />
          </div>

          <div className="flex-col items-center ">
            <div className="flex flex-col items-center justify-end w-full">
              <p className="text-xl font-semibold">Jean louis Montdor</p>
              <p className="text-base text-center">bananas@ananas.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 ">
          <p className="text-2xl">Editer mon profil</p>
          <p className="text-2xl">Mes reservations</p>
          <p className="text-2xl">Messages</p>
          <p className="text-2xl">A propos de Surf Camp</p>
          <p className="text-2xl">Information légales</p>
        </div>
      </div>
      <div className="flex text-center justify-center ">
        <p className="text-2xl ">Deconnexion</p>
      </div>
    </div>
  );
}
