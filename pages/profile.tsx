import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../components/Modal/Modal";
interface IProfile {
  firstName?: string;
  lastName?: string;
  Email?: string;
  phoneNumber?: string;
  birthDate?: string;
  about?: string;
}

export default function Profile(): JSX.Element {
  const { id } = useSelector((state: any) => state.user);
  const { data } = useQuery("user", () =>
    axios({ method: "GET", url: `http://localhost:5000/users/${id}` })
  );
  const { register, handleSubmit } = useForm();
  const [birthDate, setBirthDate] = useState<Date | [Date, Date] | null>(
    new Date()
  );
  console.log(data);
  const [error, setError] = useState("");
  const [isModal, setIsModal] = useState(false);
  const onSubmit = async (data: IProfile) => {
    await axios({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_DATAAPI_URL}/users/${id}`,
      data: {
        email: data.Email,
        firstname: data.firstName && data.firstName,
        lastname: data.lastName && data.lastName,
        birthDate: birthDate && birthDate,
        phoneNumber: data.phoneNumber && data.phoneNumber,
      },
    })
      .then((res) => setIsModal(true))
      .catch((err) => setError("Echec de la mise à jour du profil"));
  };
  if (error)
    return (
      <Modal setError={setError} setIsModal={setIsModal} message={error} />
    );

  return (
    <div className="w-full flex px-40 text-BlueCamp h-full">
      {isModal && (
        <Modal
          setError={setError}
          setIsModal={setIsModal}
          message="Profil mis à jour avec succes"
        />
      )}
      <div className="h-full min-h-screen pt-48 flex-col items-center align-middle  flex w-3/12">
        <span className="text-left font-bold my-4 transform -translate-x-3 text-2xl w-1/2">
          Profil
        </span>
        <ul className=" flex w-full flex-col items-center justify-center align-middle">
          <li className="w-1/2 text-xl text-left">Profil</li>
          <li className="w-1/2 text-xl text-left">Réglages</li>
          <li className="w-1/2 text-xl text-left">Réservations</li>
          <li className="w-1/2 text-xl text-left">Gestion</li>
          <li className="w-1/2 text-xl text-left">Déconnexion</li>
        </ul>
      </div>
      <div className="h-full min-h-screen pt-48 flex-col items-center align-middle  flex w-9/12">
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

        <div className="w-full flex">
          <form
            className="flex flex-col items-center w-full h-full  align-middle"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              <span className="w-full">Prénom :</span>
              <input
                className="border border-gray-600 w-full  outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="text"
                placeholder={data?.data.firstname}
                {...register("firstName", {})}
              />
            </label>
            <label className="text-BlueCamp w-full flex my-4 justify-between font-bold">
              <span className="w-full">Nom :</span>
              <input
                className="border border-gray-600 w-full outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="text"
                placeholder="Abbadie"
                {...register("lastName", {})}
              />
            </label>
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              <span className="w-full">Email :</span>
              <input
                className="border w-full border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="text"
                placeholder={data?.data.email ? data?.data.email : "Email ..."}
                {...register("email", {})}
              />
            </label>
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              <span className="w-full">Tel. :</span>
              <input
                className="border w-full border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="phoneNumber"
                placeholder="Mobile number"
                {...register("phoneNumber", {})}
              />
            </label>
            <div className="w-full items-end flex justify-end">
              <select
                className="border border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                {...register}
              >
                <option value="Mr.">Mme.</option>
                <option value="Mr.">Mr.</option>
              </select>
            </div>
            <div className="w-full flex items-end justify-between align-middle text-black h-20">
              <span className="w-full font-bold">Date de naissance :</span>
              <DatePicker
                className="border text-center w-full border-black rounded-md"
                placeholderText="JJ/MM/AAAA"
                onChange={(date) => setBirthDate(date)}
              />
            </div>
            <label className="text-BlueCamp  my-4 w-full flex justify-between font-bold">
              <span className="w-full">A Propos :</span>
              <textarea
                className="border w-full border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                placeholder="A Propos"
                {...register("text area")}
              />
            </label>

            <div className="w-full flex justify-end items-end align-middle">
              <input
                className="border border-gray-600 bg-BlueCamp text-white outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="submit"
              />
            </div>
          </form>

          <div className="w-4/12 flex flex-col align-middle justify-start items-center h-full">
            {data?.data.picture && (
              <Image
                src={data?.data.picture}
                width={200}
                height={200}
                quality={100}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
