import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../components/Modal/Modal";
import { isLogin } from "../redux/actions";
import Sidebar from "../components/ProfileForm/Sidebar";
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
      <Sidebar handleLogout={handleLogout} />
      <div className="h-full min-h-screen pt-10 lg:pt-20 flex-col items-center align-middle  flex lg:w-9/12">
        <div className="w-full h-full items-center align-middle justify-center flex">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
