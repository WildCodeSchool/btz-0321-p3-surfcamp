import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { property } from "../../API/requests";
import { Property, PropertyInput } from "../../interfaces";

import { useQuery } from "react-query";
import { city, country } from "../../API/requests";

type HostInputs = {
  address: string;
  zipcode: string;
  city: string;
  country: string;
  name: string;
  priceByNight: string;
  type: "HOUSE" | "SURFSCHOOL" | "SURFCAMP";
  description: string;
};

export default function HostForm(): JSX.Element {
  const { id } = useSelector((state) => state.user);
  console.log(id);

  const { register, handleSubmit } = useForm<HostInputs>();
  const onSubmit: SubmitHandler<HostInputs> = (data) => console.log(data);

  const { data: dataCity, isLoading: isLoadingCity } = useQuery(
    "getCities",
    () => city.getAll()
  );

  const { data: dataCountry, isLoading: isLoadingCountry } = useQuery(
    "getCountries",
    () => country.getAll()
  );

  // const mutation = useMutation<Property, AxiosError, PropertyInput>((data) =>
  //   property.create({ ...data })
  // );

  // const onSubmit = (data: formData) => {
  //   console.log(data);
  //   const payload = { ...data, userId: id, phoneNumber: "0666121213" };

  //   mutation.mutate(payload);
  // };

  return (
    <div className="w-full h-full items-center align-middle justify-center flex">
      <div>
        <span className="lg:text-left text-center font-bold my-4 transform -translate-x-3 text-2xl w-full">
          Devenez hôte Surfcamp
        </span>
        <p className="w-full text-center lg:text-left">
          Prêt à entrer dans l’aventure ? Parlez-nous de votre logement
        </p>
        <form
          className="flex flex-col items-center w-full h-full align-middle"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="w-full text-center lg:text-left">
            Complétez votre adresse :
          </p>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Adresse :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("address", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Code postal :</span>
            <input
              className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("zipcode", {})}
            />
          </label>

          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Ville :</span>
            {!isLoadingCity && (
              <select
                className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4 py-0.5 text-xs"
                {...register("city", {})}
              >
                {dataCity?.map((city) => {
                  return (
                    <option
                      className="w-4/12"
                      placeholder="Select a country"
                      key={city.id}
                    >
                      {city.name}
                    </option>
                  );
                })}
              </select>
            )}
          </label>

          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Pays :</span>
            {!isLoadingCountry && (
              <select
                className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4 py-0.5 text-xs"
                {...register("country")}
              >
                {dataCountry?.map((country) => {
                  return (
                    <option
                      className="w-4/12"
                      placeholder="Select a country"
                      key={country.id}
                    >
                      {country.name}
                    </option>
                  );
                })}
              </select>
            )}
          </label>

          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Nom de la propriété:</span>
            <input
              className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="text"
              {...register("name", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Prix par nuit :</span>
            <input
              className="border w-4/12 border-gray-600 outline-none focus:outline-none rounded-sm px-4  text-xs"
              type="priceByNight"
              {...register("priceByNight", {})}
            />
          </label>
          <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
            <span className="w-4/12">Type :</span>
            <select
              className="border border-gray-600 w-4/12 outline-none focus:outline-none rounded-sm px-4 text-xs"
              {...register("type", {})}
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
            <input className="text-xs" type="file" multiple />
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
    </div>
  );
}
