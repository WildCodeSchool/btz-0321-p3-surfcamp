import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import EditButton from "../Buttons/EditButton";
import { user } from "../../API/requests";
interface IProfile {
  firstname?: string | null;
  lastname?: string | null;
  email?: string;
  phoneNumber?: string;
  birthDate?: string | null;
  about?: string;
}

type formData = {
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  birthDate?: string;
  about?: string;
};

export default function ProfileForm() {
  const { id } = useSelector((state: any) => state.user);
  const { register, handleSubmit } = useForm();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const mutation = useMutation<null, AxiosError, IProfile>((newUser) =>
    axios.put(`http://localhost:5000/users/${id}`, newUser)
  );
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const { data } = useQuery("user", () => user.getOne(id));

  const onSubmit = async (data: formData) => {
    mutation.mutate({
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      birthDate: birthDate !== null ? birthDate?.toISOString() : null,
    });
  };

  return (
    <div className="w-full my-20 items-center justify-center h-full align-middle flex">
      {id ? (
        <form
          className="flex flex-col items-center w-full h-full  align-middle"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Prénom :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              placeholder={data?.firstname}
              {...register("firstName", {})}
            />
          </label>
          <label className="text-BlueCamp text-sm w-full flex my-4 justify-start font-bold">
            <span className="w-4/12">Nom :</span>
            <input
              className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              placeholder={data?.lastname}
              {...register("lastName", {})}
            />
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
              <div className="  outline-none focus:outline-none rounded-sm px-4 py-2 text-sm font-light">
                {data?.email}
              </div>
            )}
            <EditButton setIsEdit={setIsEdit} />
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
            <select
              className="borde w-2/12 border-gray-600 border outline-none focus:outline-none rounded-sm px-2  text-xs"
              {...register}
            >
              <option className="w-4/12" value="Mr.">
                Mme.
              </option>
              <option className="w-4/12" value="Mr.">
                Mr.
              </option>
            </select>
          </label>
          <div className="w-full  flex items-end justify-start align-middle text-black h-6">
            <span className="w-4/12 text-sm font-bold">
              Date de naissance :
            </span>
            <DatePicker
              className="border focus:outline-none outline-none text-xs text-center w-full border-black rounded-sm"
              {...register("birthdate", {})}
              placeholderText={data?.birthDate.toLocaleString()}
              isClearable
              selected={birthDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date: Date) => setBirthDate(date)}
            />
          </div>
          <label className="text-BlueCamp  my-4 w-full flex justify-start font-bold">
            <span className="w-4/12 text-sm">A Propos :</span>
            <textarea
              className="border w-6/12 border-gray-600 outline-none focus:outline-none rounded-sm p-2  text-xs"
              placeholder="A Propos"
              {...register("text area")}
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
          Pas encore de compte ? Par ici !
        </div>
      )}
      <div className="w-4/12 hidden  lg:flex flex-col align-middle justify-start items-center h-full">
        {data?.picture && (
          <Image
            src={data?.picture}
            width={200}
            height={200}
            quality={100}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}
