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
import router from "next/router";

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
