import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  const onSubmit = async (data: IProfile) => {
    await axios({
      method: "PUT",
      url: `http://localhost:5000/users/${id}`,
      data: {
        email: data.Email,
        firstname: data.firstName && data.firstName,
        lastname: data.lastName && data.lastName,
        birthDate: birthDate && birthDate,
        phoneNumber: data.phoneNumber && data.phoneNumber,
      },
    });
  };

  return (
    <div className="w-full flex px-40 text-BlueCamp h-full">
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

        <div className="w-full flex flex-col items-center justify-center align-middle">
          <form
            className="flex flex-col items-center w-full  align-middle"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              Prénom :
              <input
                className="border border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="text"
                placeholder="Prénom"
                {...register("firstName", {})}
              />
            </label>
            <label className="text-BlueCamp w-full flex my-4 justify-between font-bold">
              Nom :
              <input
                className="border border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="text"
                placeholder="Abbadie"
                {...register("lastName", {})}
              />
            </label>
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              Email :
              <input
                className="border border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
                type="text"
                placeholder={data?.data.email ? data?.data.email : "Email ..."}
                {...register("email", {})}
              />
            </label>
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              Tel. :
              <input
                className="border border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
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
            <div className="w-full flex items-end justify-end align-middle text-black h-20">
              <DatePicker
                className="border text-center border-black rounded-md"
                placeholderText="JJ/MM/AAAA"
                onChange={(date) => setBirthDate(date)}
              />
            </div>
            <label className="text-BlueCamp my-4 w-full flex justify-between font-bold">
              A Propos :
              <textarea
                className="border border-gray-600 outline-none focus:outline-none rounded-md px-4 py-2 text-xl"
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
        </div>
      </div>
    </div>
  );
}
