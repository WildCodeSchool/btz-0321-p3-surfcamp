import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosError } from "axios";
import { useQuery, useMutation } from "react-query";
import { property, address } from "../../API/requests";
import { Property, PropertyInput } from "../../interfaces";

interface IProfile {
  name?: string | null; //property
  address: string; // address
  zipcode: string; //address
  city: string; //address
  country: string; //address
  priceByNight: number; //property
  type: string; //property
  description: string; //property
}

type formData = {
  name: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  priceByNight: string;
  type: "HOUSE" | "SURFSCHOOL" | "SURFCAMP";
  description: string;
};

export default function HostForm(): JSX.Element {
  const id = useSelector((state) => state.user.id);
  const { register, handleSubmit } = useForm();

  const mutation = useMutation<Property, AxiosError, PropertyInput>((data) =>
    property.create({ property: data })
  );

  const onSubmit = (data: formData) => {
    console.log(data);

    const payload = { ...data, userId: id, phoneNumber: "0666121213" };

    mutation.mutate(payload);
  };

  return (
    <div className="w-full items-center justify-center h-full align-middle flex">
      (
      <div>
        <span className="lg:text-left text-center font-bold my-4 transform -translate-x-3 text-2xl w-full">
          Devenez hôte Surfcamp{" "}
        </span>
        <p className="w-full text-center lg:text-left">
          Prêt à entrer dans l’aventure ? Parlez-nous de votre logement
        </p>
        <form
          className="flex flex-col items-center w-full h-full align-middle"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Nom de la propriété:</span>
            <input
              className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("name")}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Adresse :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("address", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Code Postal :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("zipCode", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Ville :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("city", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Pays :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("country", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Prix part nuit :</span>

            <input
              className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="priceByNight"
              {...register("priceByNight", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
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

          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Description :</span>
            <textarea
              className="border w-6/12 border-gray-600 outline-none focus:outline-none rounded-sm p-2  text-xs"
              placeholder="Description de votre bien"
              {...register("description")}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Photos de votre bien :</span>
            <input type="file" multiple />
            <input
              className="border  border-gray-600 bg-BlueCamp  text-white outline-none focus:outline-none rounded-sm px-4  text-lg"
              type="submit"
            />
          </label>
          <div className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12"></span>
            <input
              className="border  border-gray-600 bg-BlueCamp  text-white outline-none focus:outline-none rounded-sm px-4  text-lg"
              type="submit"
            />
          </div>
        </form>
      </div>
      )
    </div>
  );
}
