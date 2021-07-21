import React, { useState } from "react";
import { useRouter } from "next/router";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import Modal from "../components/Modal/Modal";
import AddressHostForm from "../components/HostForm/AddressHostForm";
import { useDispatch } from "react-redux";
import { isLogin } from "../redux/actions";
import "react-datepicker/dist/react-datepicker.css";

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

  const [settings, setSettings] = useState(false);
  const [propertyHandle, setPropertyHandle] = useState(false);

  const handleSetting = () => {
    setSettings(true);
    setPropertyHandle(false);
  };
  const handlePropertyHandle = () => {
    setPropertyHandle(true);
    setSettings(false);
  };

  return (
    <div className="w-full flex lg:flex-row lg:justify-between align-middle flex-col px-10 lg:pr-40 text-BlueCamp h-full">
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
      <div>
        <ul className="h-64 flex w-full flex-row lg:flex-col text-center items-center justify-center align-middle">
          <li className="cursor-pointer my-2 hover:underline text-xl w-full lg:text-left">
            <button onClick={handleSetting}>Réglages</button>
          </li>
          <li className="cursor-pointer my-2 hover:underline text-xl w-full lg:text-left">
            <button onClick={handlePropertyHandle}>Gestion</button>
          </li>
          <li className="w-full hover:text-red-600 my-2 text-xl hover:underline lg:text-left">
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
        </ul>
      </div>
      <div className="h-full min-h-screen pt-10 lg:pt-20 flex-col items-center align-middle flex lg:w-9/12">
        <div className="w-full h-full items-center align-middle justify-center flex">
          {settings && <ProfileForm />}
          {propertyHandle && <AddressHostForm />}
        </div>
      </div>
    </div>
  );
}
