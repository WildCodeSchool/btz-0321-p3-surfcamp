import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

import "react-datepicker/dist/react-datepicker.css";

import Hossegor from "../public/Hossegor.jpg";
interface IProfile {
  firstName?: string;
  lastName?: string;
  Email?: string;
  phoneNumber?: string;
  birthDate?: string;
  about?: string;
}

export default function Profile(): JSX.Element {
  const { id } = useSelector((state: any) => state.user);
  const { data } = useQuery("user", () =>
    axios({ method: "GET", url: `http://localhost:5000/users/${id}` })
  );
  const { register, handleSubmit } = useForm();
  const [birthDate, setBirthDate] = useState<Date | [Date, Date] | null>(
    new Date()
  );
  const [error, setError] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const onSubmit = async (data: IProfile) => {
    await axios({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_DATAAPI_URL}/users/${id}`,
      data: {
        email: data.Email,
        firstname: data.firstName && data.firstName,
        lastname: data.lastName && data.lastName,
        birthDate: birthDate && birthDate,
        phoneNumber: data.phoneNumber && data.phoneNumber,
      },
    })
      .then(() => setIsModal(true))
      .catch(() => setError("Echec de la mise à jour du profil"));
  };
  if (error)
    return (
      <Modal setError={setError} setIsModal={setIsModal} message={error} />
    );

  return (
    <div className="flex flex-col w-full text-BlueCamp h-full px-5 mb-16">
      <div className="h-full  pt-16 flex flex-col   //?// min-h-screen items-center align-middle ">
        <span className="text-left  font-bold  text-xl">
          Surf Camp Anglet, Logement avec cours decouverte
        </span>
        <div className="flex w-full">
          <div className="flex flex-col bg-gray-600 w-full h-96 m-1 p-2 justify-between">
            <div className="flex justify-between">
              <div className="">icons</div>
              <div className="">share</div>
            </div>
            <div className="">
              <Image
                src={Hossegor}
                layout="responsive"
                height={"650px"}
                alt="hoss"
              />
            </div>
            <div className="flex justify-end">
              <div className="">rating</div>
              <div className="">(25)Commentaires</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <section className="DESCRIPTION">
            <div className="flex flex-col">
              <div className="description article mt-5">
                <p>Enfants/adultes</p>
              </div>
              <div className="">
                <p>4voyageur blablabla</p>
              </div>
              <div className="text-justify mt-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus quia eius excepturi vel saepe? Reiciendis,
                  perferendis. Accusamus officiis magni esse quasi. Sed placeat
                  labore eaque quos aspernatur. Rerum, unde! Veniam aspernatur
                  asperiores earum odio temporibus atque mollitia nisi pariatur
                  quas cumque magnam nostrum adipisci ipsa beatae provident,
                  error laudantium eligendi.
                </p>
              </div>
            </div>
          </section>
          <section className="AMENITIES">
            <div className="flex mt-12 justify-between mb-14">
              <div className="flex flex-col space-y-5 text-sm text-justify">
                <div className="flex space-x-4">
                  <div className="h-10 w-1/12 bg-gray-400 "></div>
                  <p className="w-11/12">
                    Logement entier Vous aurez le logement (appartement) rien
                    que pour vous.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-1/12 bg-gray-400 "></div>
                  <p className="w-11/12">
                    Nettoyage renforcé Cet hôte s'engage à appliquer le
                    processus de nettoyage renforcé en 5 étapes d'SurfCamp. En
                    voir plus
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-1/12 bg-gray-400 "></div>
                  <p className="w-11/12">
                    Un hôte expérimenté SurfCamp Anglet dispose est un membre
                    certifié de nôtre communauté
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-1/12 bg-gray-400 "></div>
                  <p className="w-11/12">
                    Équipements du quotidien L'hôte a équipé ce logement pour
                    les séjours longue durée. Les équipements suivants sont
                    inclus : cuisine, parking gratuit et chauffage.
                  </p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-1/12 bg-gray-400 "></div>
                  <p className="w-11/12">
                    Règlement intérieur L'hôte n'autorise pas les animaux de
                    compagnie ou les fêtes, et le logement est non-fumeur. En
                    voir plus
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="EQUIPMENT flex flex-col space-y-2">
              <div className="flex space-x-4 flex justify-around">
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-400 "></div>
                  <p className="w-11/12">cuisine</p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-400 "></div>
                  <p className="w-11/12">douche privée</p>
                </div>
              </div>
              <div className="flex space-x-4 flex justify-around">
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-400 "></div>
                  <p className="w-11/12">cuisine</p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-400 "></div>
                  <p className="w-11/12">douche privée</p>
                </div>
              </div>
              <div className="flex space-x-4 flex justify-around">
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-400 "></div>
                  <p className="w-11/12">cuisine</p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-10 bg-gray-400 "></div>
                  <p className="w-11/12">douche privée</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col mt-5 ">
              <div className="flex flex-col">
                <div className="">
                  <p>À savoir</p>
                </div>
                <div className="flex flex-col space-y-2 mt-5">
                  <div className="flex space-x-4">
                    <div className="h-10 w-1/12 bg-gray-400 "></div>
                    <p className="w-11/12">Arrivée: après 17:00</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-10 w-1/12 bg-gray-400 "></div>
                    <p className="w-11/12">Depart: 10:00</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-10 w-1/12 bg-gray-400 "></div>
                    <p className="w-11/12">Non fumeur</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-10 w-1/12 bg-gray-400 "></div>
                    <p className="w-11/12">Pas d'animaux</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="h-10 w-1/12 bg-gray-400 "></div>
                    <p className="w-11/12">Pas de fête </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col">
              <span className="text-left  font-bold ">Emplacement</span>
              <p className="text-left ">Anglet</p>
              <div className="flex flex-col bg-gray-600 w-full h-96 m-1 p-2"></div>
            </div>
          </section>
          <section>
            <div className="flex flex-col">
              <span className="text-left  font-bold ">Calandrier</span>
              <p className="text-left ">Du 14/08/21 au 18/08/21</p>
              <div className="flex flex-col bg-gray-600 w-full h-96 m-1 p-2"></div>
            </div>
          </section>
          <section>
            <div className="flex flex-col bg-BlueCamp rounded-md h-full p-2 text-white">
              <div className="flex justify-between">
                <span className="text-left  font-bold ">Prix</span>
                <span className="text-left  font-bold ">71$/N</span>
              </div>
              <div className="p-4 space-y-4">
                <div className="flex border border-white w-full rounded-md justify-between p-4">
                  <p>Arrivée le:</p>
                  <p>14/08/2021</p>
                </div>
                <div className="flex border border-white w-full rounded-md justify-between p-4">
                  <p>Depart le:</p>
                  <p>16/08/2021</p>
                </div>
                <div className="flex border border-white w-full rounded-md justify-between p-4">
                  <p>Nombre de surfeurs</p>
                  <p>3</p>
                </div>
                <div>
                  <div className="flex w-full  justify-between ">
                    <p>Logement:</p>
                    <p>250$</p>
                  </div>
                  <div className="flex  w-full  justify-between space-y-2 ">
                    <p>Frais du service</p>
                    <p>15$</p>
                  </div>
                  <div className="flex  w-full   justify-between ">
                    <p>TOTAL:</p>
                    <p>265$</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="flex border border-white rounded-md justify-center p-4">
                    <a href="/property">Je Réserve</a>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col mt-5">
              <span className=" flex  font-bold justify-center ">
                Conditions d'annulation
              </span>
              <div className="space-y-4 mt-5">
                <p className="">
                  Annulez avant 5:00 PM le 3 juin et obtenez un remboursement
                  total, à l'exception des 30 premiers jours et des frais de
                  service.
                </p>
                <a href="/property" className="font-bold">
                  En voir plus...
                </a>
                <p className="">Santé et sécurité</p>
                <p className="">
                  S'engage à appliquer le processus de nettoyage renforcé de
                  SurfCamp.
                </p>
                <p className="">
                  Les consignes d'Airbnb en matière de distanciation physique et
                  d'autres consignes liées au COVID-19 s'appliquent.
                </p>

                <a href="/property" className="font-bold">
                  En voir plus...
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
