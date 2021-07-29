import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import "react-datepicker/dist/react-datepicker.css";
import axios, { AxiosError } from "axios";
import { useMutation, useQuery } from "react-query";
import { city, country } from "../../API/requests";
import { Address, Property } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/types";

type AddressHostInput = {
  streetNumber: string;
  street: string;
  zipcode: string;
  cityId: string;
  countryId: string;
};

type PropertyHostInput = {
  name: string;
  phoneNumber: string;
  priceByNight: string;
  type: "SURFCAMP" | "SURFSCHOOL" | "HOUSE";
  description: string;
  addressId: string;
  userId: string;
};

interface Form extends PropertyHostInput, AddressHostInput {}

export default function AddressHostForm(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<Form>();
  const id = useSelector((state: RootState) => state.user.id);

  const mutationAddress = useMutation<Address, AxiosError, AddressHostInput>(
    (newAddress) =>
      axios
        .post(`http://localhost:5000/addresses`, newAddress, {
          withCredentials: true,
        })
        .then((res) => res.data)
  );
  const mutationProperty = useMutation<Property, AxiosError, PropertyHostInput>(
    (newProperty) =>
      axios
        .post(`http://localhost:5000/properties`, newProperty, {
          withCredentials: true,
        })
        .then((res) => res.data),
    {
      onSuccess: () => {
        reset();
      },
    }
  );

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const addressPayload: AddressHostInput = {
      cityId: data.cityId,
      countryId: data.countryId,
      street: data.street,
      streetNumber: data.streetNumber,
      zipcode: data.zipcode,
    };

    const { id: addressId } = await mutationAddress.mutateAsync(addressPayload);

    const propertyPayload: PropertyHostInput = {
      addressId: addressId,
      description: data.description,
      name: data.name,
      type: data.type,
      priceByNight: data.priceByNight,
      phoneNumber: data.phoneNumber,
      userId: id,
    };

    await mutationProperty.mutateAsync(propertyPayload);
  };

  const { data: dataCity, isLoading: isLoadingCity } = useQuery(
    "getCities",
    () => city.getAll()
  );

  const { data: dataCountry, isLoading: isLoadingCountry } = useQuery(
    "getCountries",
    () => country.getAll()
  );
  return (
    <div className="w-full items-center justify-center h-full flex">
      {id ? (
        <div>
          <span className="lg:text-left text-center font-bold my-4 transform -translate-x-3 text-2xl w-full">
            Créez votre annonce
          </span>
          <p className="w-full text-center lg:text-left">
            Notre mission est de vous fournir la meilleure epérience qui soit.
            <br />
            Pour ce, nous avons besoin d’en savoir un peu plus sur ce que vous
            proposez.
            <br />
            Dites-en nous un peu plus sur votre logement.
          </p>
          <form
            className="flex flex-col items-center w-full h-full align-middle"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="w-full text-center lg:text-left">
              Complétez votre adresse :
            </p>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Numéro :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                {...register("streetNumber", {})}
              />
            </label>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Nom de rue :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                {...register("street", {})}
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
                  {...register("cityId", {})}
                >
                  {dataCity?.map((city) => {
                    return (
                      <option
                        className="w-4/12"
                        placeholder="Select a city"
                        key={city.id}
                        value={city.id}
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
                  {...register("countryId")}
                >
                  {dataCountry?.map((country) => {
                    return (
                      <option
                        className="w-4/12"
                        placeholder="Select a country"
                        key={country.id}
                        value={country.id}
                      >
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              )}
            </label>

            <p className="w-full text-center lg:text-left">
              Créez votre annonce :
            </p>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Nom de votre logement :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                {...register("name", {})}
              />
            </label>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Numéro de téléphone :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                {...register("phoneNumber", {})}
              />
            </label>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Prix part nuit :</span>
              <input
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                type="text"
                {...register("priceByNight", {})}
              />
            </label>
            <label className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
              <span className="w-4/12">Type de logement :</span>
              <select
                className="border border-gray-600 w-4/12  outline-none focus:outline-none rounded-sm px-4  text-xs"
                {...register("type", {})}
              >
                <option value="SURFCAMP">SURFCAMP</option>
                <option value="HOUSE">HOUSE</option>
                <option value="SURFSCHOOL">SURFSCHOOL</option>
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

            <div className="text-BlueCamp lg:text-sm my-4 w-full flex justify-start font-bold">
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
                Créez votre annonce
              </span>
              <p className="w-full my-10 text-center">
                Notre mission est de vous fournir la meilleure epérience qui
                soit.
                <br />
                Pour ce, nous avons besoin d’en savoir un peu plus sur ce que
                vous proposez.
                <br />
                Dites-en nous un peu plus sur votre logement.
              </p>
            </div>
            {id && (
              <div className="w-full flex">
                <div>Mettre à jour mes Informations :</div>
              </div>
            )}
            <div className="flex w-full">
              <div className="w-full flex items-center justify-center align-middle h-full">
                <p>Vous n&apos;êtes pas connecté ? Par</p>
                <button
                  className="px-1 font-bold"
                  onClick={() => router.push("/login")}
                >
                  <p>ici !</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
