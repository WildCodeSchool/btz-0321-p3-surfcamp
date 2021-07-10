import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProfileForm from "../components/ProfileForm/ProfileForm";
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
    <div className="w-full flex px-40 text-BlueCamp h-full">
      {isModal && (
        <Modal
          setIsError={setIsError}
          setIsModal={setIsModal}
          message="Profil mis à jour avec succes"
        />
      )}
      {error && (
        <Modal setError={setError} setIsModal={setIsModal} message={error} />
      )}
      <div className="h-full min-h-screen pt-20 flex-col items-center align-middle  flex w-3/12">
        <span className="text-left font-bold my-4 transform -translate-x-3 text-2xl w-1/2">
          Profil
        </span>
        <ul className=" flex w-full flex-col items-center justify-center align-middle">
          <li className="w-1/2 text-xl text-left">Profil</li>
          <li className="w-1/2 text-xl text-left">Réglages</li>
          <li className="w-1/2 text-xl text-left">Réservations</li>
          <li className="w-1/2 text-xl text-left">Gestion</li>{" "}
          <li className="w-1/2 text-xl text-left">
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
        </ul>
      </div>
      <div className="h-full min-h-screen pt-20 flex-col items-center align-middle  flex w-9/12">
        <span className="text-left  font-bold my-4 transform -translate-x-3 text-2xl w-full">
          Informations Personnelles
        </span>
        <p className="w-full">
          Notre mission est de vous fournir la meilleure epérience qui soit.
          Pour ce, nous avons besoin d’en savoir un peu plus sur vous et ce que
          vous aimez.
          <br />
          Dites-en nous un peu plus sur vous.
        </p>

        <div className="w-full h-full items-center align-middle justify-center flex">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
