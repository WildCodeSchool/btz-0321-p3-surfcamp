import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import axios, { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { date } from "joi";

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
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const mutation = useMutation<null, AxiosError, IProfile>((newUser) =>
    axios.put(`http://localhost:5000/users/${id}`, newUser)
  );
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const { data } = useQuery("user", () =>
    axios({ method: "GET", url: `http://localhost:5000/users/${id}` })
  );

  const onSubmit = async (data: formData) => {
    console.log(birthDate);
    mutation.mutate({
      firstname: data.firstName ? data.firstName : null,
      lastname: data.lastName ? data.lastName : null,
      email: data.email,
      phoneNumber: data.phoneNumber,
      birthDate: birthDate !== null ? birthDate?.toISOString() : null,
    });
  };

  return (
    <div className="w-full items-center justify-center h-full align-middle flex">
      {id ? (
        <form
          className="flex flex-col items-center w-full h-full  align-middle"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-BlueCamp my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Prénom :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-md px-4 py-1 text-base"
              type="text"
              placeholder={data?.data.firstname}
              {...register("firstName", {})}
            />
          </label>
          <label className="text-BlueCamp w-full flex my-4 justify-start font-bold">
            <span className="w-4/12">Nom :</span>
            <input
              className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-md px-4 py-1 text-base"
              type="text"
              placeholder={data?.data.lastname}
              {...register("lastName", {})}
            />
          </label>
          <label className="text-BlueCamp my-4 w-full flex align-middle items-center justify-start font-bold">
            <span className="w-4/12">Email :</span>
            {isEdit ? (
              <input
                className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-md px-4 py-1 text-base"
                type="text"
                placeholder={data?.data.email ? data?.data.email : "Email ..."}
                {...register("email", {})}
              />
            ) : (
              <div className=" w-4/12 outline-none focus:outline-none rounded-md px-4 py-2 text-base font-light">
                {data?.data.email}
              </div>
            )}
            <button onClick={() => setIsEdit((s) => !s)}>
              {" "}
              <img
                className="border-2 cursor-pointer border-gray-600 rounded-sm p-1 h-full bg-gray-500 w-7"
                src="/edit.png"
                alt=""
              />
            </button>
          </label>
          <label className="text-BlueCamp my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Tel. :</span>
            {isEdit ? (
              <input
                className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-md px-4 py-1 text-base"
                type="phoneNumber"
                placeholder={data?.data.phoneNumber}
                {...register("phoneNumber", {})}
              />
            ) : (
              <div className=" w-4/12 outline-none focus:outline-none rounded-md px-4 py-2 text-base font-light">
                {data?.data.phoneNumber}
              </div>
            )}
          </label>
          <label className="text-BlueCamp my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Genre :</span>
            <select
              className="borde w-4/12 border-gray-600 outline-none focus:outline-none rounded-md px-4 py-1 text-base"
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
          <div className="w-full flex items-end justify-start align-middle text-black h-20">
            <span className="w-4/12 font-bold">Date de naissance :</span>
            <DatePicker
              className="border text-center w-full border-black rounded-md"
              {...register("birthdate", {})}
              placeholderText={new Date(data?.data.birthDate).toLocaleString()}
              isClearable
              dateFormat="dd/MM/yyyy"
              withPortal
              onChange={(date: Date) => setBirthDate(date)}
            />
          </div>
          <label className="text-BlueCamp  my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">A Propos :</span>
            <textarea
              className="border w-6/12 border-gray-600 outline-none focus:outline-none rounded-md px-4 py-1 text-base"
              placeholder="A Propos"
              {...register("text area")}
            />
          </label>

          <div className="w-full flex justify-start items-end align-middle">
            <span className="w-4/12"></span>
            <input
              className="border py-1 border-gray-600 bg-BlueCamp text-white outline-none focus:outline-none rounded-md px-4  text-base"
              type="submit"
            />
          </div>
        </form>
      ) : (
        <div className="w-full flex items-center justify-center align-middle h-full">
          Pas encore de compte ? Par ici !
        </div>
      )}
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
  );
}
