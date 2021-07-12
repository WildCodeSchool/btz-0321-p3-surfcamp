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

export default function HostForm(): JSX.Element {
  const { id } = useSelector((state: any) => state.user);
  const { register, handleSubmit } = useForm();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const mutation = useMutation<null, AxiosError, IProfile>((newUser) =>
    axios.post(`http://localhost:5000/users/${id}/property`, newUser)
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
    <div className="w-full items-center justify-center h-full align-middle flex">
      {id ? (
        <div>
          <span className="lg:text-left text-center font-bold my-4 transform -translate-x-3 text-2xl w-full">
            Devenez hôte Surfcamp{" "}
          </span>
          <p className="w-full text-center lg:text-left">
            Prêt à entrer dans l’aventure ?
          </p>
          <form
            className="flex flex-col items-center w-full h-full align-middle"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Adresse :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                placeholder={data?.firstname}
                {...register("firstName", {})}
              />
            </label>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Ville :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                placeholder={data?.firstname}
                {...register("firstName", {})}
              />
            </label>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Pays :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                placeholder={data?.firstname}
                {...register("firstName", {})}
              />
            </label>
            <label className="text-BlueCamp text-sm w-full flex my-4 justify-start font-bold">
              <span className="w-4/12">Nom de la propriété:</span>
              <input
                className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                placeholder={data?.lastname}
                {...register("lastName", {})}
              />
            </label>

            <label className="text-BlueCamp text-sm h-6 my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Prix part nuit :</span>
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
              <span className="w-4/12">Type :</span>
              <select
                className="borde w-2/12 border-gray-600 border outline-none focus:outline-none rounded-sm px-2  text-xs"
                {...register}
              >
                <option className="w-4/12" value="SurfCamp">
                  SurfCamp
                </option>
                <option className="w-4/12" value="House">
                  House
                </option>
                <option className="w-4/12" value="SurfSchool">
                  SurfSchool
                </option>
              </select>
            </label>

            <label className="text-BlueCamp  my-4 w-full flex justify-start font-bold">
              <span className="w-4/12 text-sm">A Propos :</span>
              <textarea
                className="border w-6/12 border-gray-600 outline-none focus:outline-none rounded-sm p-2  text-xs"
                placeholder="A Propos"
                {...register("text area")}
              />
            </label>
            <label className="text-BlueCamp  my-4 w-full flex justify-start font-bold">
              <span className="w-4/12 text-sm">Photos de votre bien :</span>
              <input type="file" multiple />
              <input type="submit" />
            </label>
            <div className="w-full flex justify-start items-end align-middle">
              <span className="w-4/12"></span>
              <input
                className="border  border-gray-600 bg-BlueCamp  text-white outline-none focus:outline-none rounded-sm px-4  text-lg"
                type="submit"
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center align-middle h-full">
          Pas encore de compte ? Par ici !
        </div>
      )}
      {/* <div className="w-4/12 hidden  lg:flex flex-col align-middle justify-start items-center h-full">
        {data?.picture && (
          <Image
            src={data?.picture}
            width={200}
            height={200}
            quality={100}
            className="rounded-full"
          />
        )}
      </div> */}
    </div>
  );
}
