import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import Modal from "../components/Modal/Modal";
import HostForm from "../components/HostForm/HostForm";
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
    <div className="w-full flex lg:flex-row flex-col px-10 lg:px-40 text-BlueCamp h-full">
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
      <div className="h-24  lg:h-full lg:min-h-screen pt-32 lg:flex-col items-center align-middle  flex lg:w-3/12">
        <ul className=" flex w-full flex-row lg:flex-col items-center justify-center align-middle">
          <li className="w-1/3 cursor-pointer my-2 hover:underline text-xl text-left">
            <button onClick={handleSetting}>Réglages</button>
          </li>
          <li className="w-1/3 cursor-pointer my-2 hover:underline text-xl text-left">
            <button onClick={handlePropertyHandle}>Gestion</button>
          </li>{" "}
          <li className="w-1/3 hover:text-red-600 my-2 text-xl text-left">
            <button onClick={handleLogout}>Déconnexion</button>
          </li>
        </ul>
      </div>
      <div className="h-full min-h-screen pt-10 lg:pt-20 flex-col items-center align-middle  flex lg:w-9/12">
        <div className="w-full h-full items-center align-middle justify-center flex">
          {settings && <ProfileForm />}
          {propertyHandle && <HostForm />}
        </div>
      </div>
    </div>
  );
}
