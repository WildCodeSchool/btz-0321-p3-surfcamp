import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import PropertyForm from "../components/PropertyForm/PropertyForm";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../components/Modal/Modal";
import { isLogin } from "../redux/actions";

export default function Profile(): JSX.Element {
  const dispatch = useDispatch();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleLogout = () => {
    dispatch(
      isLogin({ id: "", email: "", role: "", picture: "", firstname: "" })
    );
    router.reload();
  };

  return (
    <div className="w-full flex lg:flex-row lg:justify-between items-center align-middle flex-col px-10 lg:pr-40 text-BlueCamp h-full">
      {isModal && (
        <Modal
          setError={setError}
          setIsModal={setIsModal}
          message="Profil mis à jour avec succes"
        />
      )}
      {error && (
        <Modal setError={setError} setIsModal={setIsModal} message={error} />
      )}
      <div className="h-24  lg:h-full lg:min-h-screen pt-32  lg:flex-col items-center align-middle w-full justify-between  flex lg:w-3/12">
        <ul className=" flex w-full flex-row lg:flex-col text-center  items-center justify-center align-middle">
          <li className=" cursor-pointer my-2 hover:underline text-xl w-full lg:text-left">
            Réglages
          </li>
          <li className="w-full cursor-pointer my-2 hover:underline text-xl lg:text-left">
            Gestion
          </li>{" "}
          <li className="w-full hover:text-red-600 my-2 text-xl  lg:text-left">
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
        </ul>
      </div>
      <div className="h-full min-h-screen pt-10 lg:pt-20 flex-col items-center align-middle  flex lg:w-9/12">
        <div className="w-full h-full items-center align-middle justify-center flex">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
