import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import AvatarPicture from "./avatarPicture/AvatarPicture";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import EditButton from "../Buttons/EditButton";
import { user } from "../../API/requests";
import router from "next/router";
interface IProfile {
  firstname?: string;
  lastname?: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: Date | null;
  about?: string;
  picture?: string;
}

type FormData = {
  firstname: string;
  lastname: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: Date;
  about?: string;
  picture?: string;
};

export default function ProfileForm() {
  const { id } = useSelector((state: any) => state.user);
  const [birthDate, setBirthDate] = useState<Date | null | undefined>(null);
  const { data, refetch } = useQuery<IProfile, AxiosError, IProfile>(
    "user",
    () => user.getOne(id)
  );
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [url, setUrl] = useState(null || data?.picture);
  const mutation = useMutation<null, AxiosError, IProfile>(
    (newUser) => axios.put(`http://localhost:5000/users/${id}`, newUser),
    {
      onSuccess: () => {
        setIsUpdated(true);
      },
    }
  );

  useEffect(() => {
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        setValue(key as keyof FormData, value);
      });
      setBirthDate(new Date(data!.birthDate!));
    }
  }, [data]);

  const onSubmit = async (data: FormData) => {
    mutation.mutate({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      birthDate: birthDate,
      picture: url,
    });
  };

  return (
    <div className="w-full flex flex-col  items-center justify-center h-full align-middle ">
      <div className="w-full flex flex-col">
        <span className=" text-center  font-bold my-4 transform -translate-x-3 text-2xl w-full">
          Informations Personnelles
        </span>
        <p className="w-full my-10 text-center lg:text-left">
          Notre mission est de vous fournir la meilleure epérience qui soit.
          Pour ce, nous avons besoin d’en savoir un peu plus sur vous et ce que
          vous aimez.
          <br />
          Dites-en nous un peu plus sur vous.
        </p>
      </div>
      <div className="w-full flex">
        <div>Mettre à jour mes Informations :</div>
        <EditButton setIsEdit={setIsEdit} />
      </div>
      <div className="flex w-full">
        {id ? (
          <form
            className="flex flex-col items-center mt-20 w-full h-full  align-middle"
            onSubmit={handleSubmit(onSubmit)}
          >
            {isUpdated && data?.birthDate && (
              <div className="text-red w-full text-center">
                Profil mis à jour avec succes
                <button
                  onClick={() => {
                    setIsUpdated(false);
                    refetch();
                  }}
                  className="bg-BlueCamp text-white p-1 rounded-sm mx-2"
                >
                  OK
                </button>
              </div>
            )}
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Prénom :</span>
              {isEdit ? (
                <input
                  className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                  type="text"
                  placeholder={data?.firstname}
                  {...register("firstname", {})}
                />
              ) : (
                <div className="outline-none w-4/12 focus:outline-none rounded-sm px-4 py-2 text-sm font-light">
                  {data?.firstname}
                </div>
              )}
            </label>
            <label className="text-BlueCamp text-sm w-full flex my-4 justify-start font-bold">
              <span className="w-4/12">Nom :</span>
              {isEdit ? (
                <input
                  className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
                  type="text"
                  placeholder={data?.lastname}
                  {...register("lastname", {})}
                />
              ) : (
                <div className="outline-none w-4/12 focus:outline-none rounded-sm px-4 py-2 text-sm font-light">
                  {data?.lastname}
                </div>
              )}
            </label>
            <label className="text-BlueCamp text-sm my-4 w-full h-8 flex align-middle items-center justify-start font-bold">
              <span className="w-4/12">Email :</span>
              {isEdit ? (
                <input
                  className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-sm px-4  text-xs"
                  type="text"
                  placeholder={data?.email}
                  {...register("email", {})}
                />
              ) : (
                <div className="outline-none w-4/12 focus:outline-none rounded-sm px-4 py-2 text-sm font-light">
                  {data?.email}
                </div>
              )}
            </label>
            <label className="text-BlueCamp text-sm h-6 my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Tel. :</span>
              {isEdit ? (
                <input
                  className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-sm px-4  text-xs"
                  type="phoneNumber"
                  placeholder={data?.phoneNumber}
                  {...register("phoneNumber", {})}
                />
              ) : (
                <div className=" w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs font-light">
                  {data?.phoneNumber}
                </div>
              )}
            </label>
            <label className="text-BlueCamp text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Genre :</span>

              {isEdit ? (
                <select className="borde w-2/12 border-gray-600 border outline-none focus:outline-none rounded-sm px-2  text-xs">
                  <option className="w-4/12" value="Mr.">
                    Mme.
                  </option>
                  <option className="w-4/12" value="Mr.">
                    Mr.
                  </option>
                </select>
              ) : (
                <div className=" w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs font-light">
                  {"Mme"}
                </div>
              )}
            </label>
            <div className="w-full  flex items-end justify-start align-middle text-black h-6">
              <span className="w-4/12 text-sm font-bold">
                Date de naissance :
              </span>
              {isEdit ? (
                <DatePicker
                  className="border p-1 focus:outline-none outline-none text-xs text-center w-full border-black rounded-sm"
                  isClearable
                  placeholderText={birthDate?.toISOString()}
                  selected={birthDate}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date: Date) => setBirthDate(date)}
                />
              ) : (
                <div className=" w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs font-light">
                  <div>{birthDate?.toISOString()}</div>
                </div>
              )}
            </div>
            <label className="text-BlueCamp  my-4 w-full flex justify-start font-bold">
              <span className="w-4/12 text-sm">A Propos :</span>
              <textarea
                className="border w-6/12 border-gray-600 outline-none focus:outline-none rounded-sm p-2  text-xs"
                placeholder="A Propos"
              />
            </label>

            <div className="w-full flex justify-start items-end align-middle">
              <span className="w-4/12"></span>
              <input
                className="border  border-gray-600 bg-BlueCamp  text-white outline-none focus:outline-none rounded-sm px-4  text-lg"
                type="submit"
              />
            </div>
          </form>
        ) : (
          <div className="w-full flex items-center justify-center align-middle h-full">
            Pas encore de compte ? Par{" "}
            <button className="px-1" onClick={() => router.push("/login")}>
              ici
            </button>{" "}
            !
          </div>
        )}
        {id && <AvatarPicture setUrl={setUrl} picture={data?.picture} />}
      </div>
    </div>
  );
}
