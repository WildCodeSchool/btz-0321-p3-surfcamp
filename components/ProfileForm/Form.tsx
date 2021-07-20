import DatePicker from "react-datepicker";
import { Dispatch } from "react";
import React from "react";
import { IProfile } from "./ProfileForm";
import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
interface IProps {
  isUpdated: boolean;
  setIsUpdated: Dispatch<boolean>;
  refetch: any;
  register: any;
  handleSubmit: any;
  url?: string;
  onSubmit: any;
  data?: IProfile;
  birthDate?: Date | null;
  setBirthDate: Dispatch<Date>;
  id: string;
  isEdit: boolean;
  setIsEdit: Dispatch<boolean>;
}
type FormData = {
  id: string;
  firstname: string;
  lastname: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: Date;
  about?: string;
  picture?: string;
};
export default function Form({
  setIsUpdated,
  isUpdated,
  refetch,
  register,
  birthDate,
  setBirthDate,
  handleSubmit,
  id,
  url,
  isEdit,
  data,
}: IProps) {
  const mutation = useMutation<null, AxiosError, IProfile>(
    (newUser) =>
      axios.put(`http://localhost:5000/users/${id}`, newUser, {
        withCredentials: true,
      }),
    {
      onSuccess: () => {
        setIsUpdated(true);
        refetch();
      },
    }
  );

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
    <form
      className="flex flex-col items-center mt-20 w-full h-full  align-middle"
      onSubmit={handleSubmit(onSubmit)}
    >
      {
        <div className="text-red w-full absolute z-50 text-center">
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
      }
      <label className="text-BlueCamp lg:text-xs my-4 w-full flex justify-start font-bold">
        <span className="w-4/12">Prénom :</span>
        {isEdit ? (
          <input
            className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
            type="text"
            placeholder={data?.firstname}
            {...register("firstname", {})}
          />
        ) : (
          <div className="outline-none w-4/12   focus:outline-none rounded-sm px-4  text-xs font-light">
            {data?.firstname}
          </div>
        )}
      </label>
      <label className="text-BlueCamp text-xs w-full flex my-4 justify-start font-bold">
        <span className="w-4/12">Nom :</span>
        {isEdit ? (
          <input
            className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
            type="text"
            placeholder={data?.lastname}
            {...register("lastname", {})}
          />
        ) : (
          <div className="outline-none w-4/12 focus:outline-none rounded-sm px-4 py-2 text-xs font-light">
            {data?.lastname}
          </div>
        )}
      </label>
      <label className="text-BlueCamp text-xs my-4 w-full h-8 flex align-middle items-center justify-start font-bold">
        <span className="w-4/12">Email :</span>
        {isEdit ? (
          <input
            className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-sm px-4  text-xs"
            type="text"
            placeholder={data?.email}
            {...register("email", {})}
          />
        ) : (
          <div className="outline-none w-4/12 focus:outline-none rounded-sm px-4 py-2 text-xs font-light">
            {data?.email}
          </div>
        )}
      </label>
      <label className="text-BlueCamp text-xs h-6 my-4 w-full flex justify-start font-bold">
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
      <label className="text-BlueCamp text-xs my-4 w-full flex justify-start font-bold">
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
        <span className="w-4/12 text-xs font-bold">Date de naissance :</span>
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
        <span className="w-4/12 text-xs">A Propos :</span>
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
  );
}
