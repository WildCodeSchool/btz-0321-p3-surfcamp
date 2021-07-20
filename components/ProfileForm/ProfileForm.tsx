import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import AvatarPicture from "./avatarPicture/AvatarPicture";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import EditButton from "../Buttons/EditButton";
import { user } from "../../API/requests";
import Form from "./Form";
import DatePicker from "react-datepicker";
import { useRouter } from "next/router";

export interface IProfile {
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

export default function ProfileForm(): JSX.Element {
  const router = useRouter();
  const { id } = useSelector((state: any) => state.user);
  const [birthDate, setBirthDate] = useState<Date | null | undefined>(
    new Date()
  );
  const { data, refetch } = useQuery<IProfile, AxiosError, IProfile>(
    "user",
    () => user.getOne(id)
  );
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [url, setUrl] = useState(null || data?.picture);
  const mutation = useMutation<null, AxiosError, IProfile>(
    (newUser) =>
      axios.put(`http://localhost:5000/users/${id}`, newUser, {
        withCredentials: true,
      }),
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
    <div className="w-full items-center justify-center h-full align-middle flex">
      {id ? (
        <div>
          <span className="lg:text-left text-center  font-bold my-4 transform -translate-x-3 text-2xl w-full">
            Informations Personnelles
          </span>
          <p className="w-full text-center lg:text-left">
            Notre mission est de vous fournir la meilleure epérience qui soit.
            <br />
            Pour ce, nous avons besoin d’en savoir un peu plus sur vous et ce
            que vous aimez.
            <br />
            Dites-en nous un peu plus sur vous.
          </p>
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
                {...register("firstname", {})}
              />
            </label>
            <label className="text-BlueCamp text-sm w-full flex my-4 justify-start font-bold">
              <span className="w-4/12">Nom :</span>
              <input
                className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                placeholder={data?.lastname}
                {...register("lastname", {})}
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
                {...register("birthDate", {})}
                placeholderText="dd/MM/yyyy"
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
                {...register("about")}
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
        </div>
      ) : (
        <div className="w-full flex items-center justify-center align-middle h-full">
          <div className="w-full flex flex-col  items-center justify-center h-full align-middle ">
            <div className="w-full flex flex-col">
              <span className=" text-center  font-bold my-4 transform -translate-x-3 text-2xl w-full">
                Informations Personnelles
              </span>
              <p className="w-full my-10 text-center">
                Notre mission est de vous fournir la meilleure expérience qui
                soit. <br />
                Pour ce, nous avons besoin d’en savoir un peu plus sur vous et
                ce que vous aimez.
                <br />
                Dites-en nous un peu plus sur vous.
              </p>
            </div>
            {id && (
              <div className="w-full flex">
                <div>Mettre à jour mes Informations :</div>
                <EditButton setIsEdit={setIsEdit} />
              </div>
            )}
            <div className="flex w-full">
              {id ? (
                <Form
                  id={id}
                  url={url}
                  isUpdated={isUpdated}
                  setIsUpdated={setIsUpdated}
                  data={data}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  isEdit={isEdit}
                  setIsEdit={setIsEdit}
                  register={register}
                  refetch={refetch}
                  birthDate={birthDate}
                  setBirthDate={setBirthDate}
                />
              ) : (
                <div className="w-full flex items-center justify-center align-middle h-full">
                  <p>Vous n&apos;êtes pas connecté ? Par</p>
                  <button
                    className="px-1 font-bold"
                    onClick={() => router.push("/login")}
                  >
                    <p>ici !</p>
                  </button>
                </div>
              )}
              {id && <AvatarPicture setUrl={setUrl} picture={data?.picture} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
