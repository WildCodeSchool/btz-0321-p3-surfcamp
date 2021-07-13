import React from "react";
import Image from "next/image";
import Hossegor from "../public/Images/Hossegor.jpg";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery } from "react-query";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import Amenities from "../components/propertypage/amenities";
import property from "../API/requests";
import { Property } from "../interfaces";

export default function Profile(): JSX.Element {
  useQuery<Property>("property", () => property.getOne());

  const [property, setProperty] = useState();

  console.log(property);

  return (
    <div className="flex flex-col w-full text-BlueCamp h-full px-5 mb-16 md:px-20 lg:px-64">
      <section className="TETE ANNONCE-----------------------------">
        <div className="h-full  pt-16 flex flex-col mt-12 ">
          <span className="text-left  font-bold  text-xl">
            Surf Camp Anglet, Logement avec cours decouverte
          </span>
          <div className="flex w-full flex-col mt-2">
            <div className="flex justify-between">
              <div className="">icons</div>
              <div className="">share</div>
            </div>
            <div className="flex flex-col w-full m-1 p-2 justify-between">
              <div className="">
                <Image
                  src={Hossegor}
                  layout="responsive"
                  height={"270px"}
                  alt="hoss"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <div className="">rating</div>
              <div className="">Commentaires (25)</div>
            </div>
          </div>
        </div>
      </section>
      <section className="DESCRIPTION------------------------------">
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
              Temporibus quia eius excepturi vel saepe? Reiciendis, perferendis.
              Accusamus officiis magni esse quasi. Sed placeat labore eaque quos
              aspernatur. Rerum, unde! Veniam aspernatur asperiores earum odio
              temporibus atque mollitia nisi pariatur quas cumque magnam nostrum
              adipisci ipsa beatae provident, error laudantium eligendi.
            </p>
          </div>
        </div>
      </section>
      <Amenities />

      <section className="MAP--------------------------------------">
        <div className="flex flex-col">
          <span className="text-left  font-bold ">Emplacement</span>
          <p className="text-left ">Anglet</p>
          <div className="flex flex-col bg-gray-600 w-full h-96 m-1 p-2"></div>
        </div>
      </section>

      <section className="PRIX ------------------------------------">
        <div className="flex flex-col bg-BlueCamp rounded-md  p-2 sm:px-20 text-white lg:mt-10 lg:mx-40">
          <form className=" h-full flex justify-end items-center m-5"></form>
          <div className="flex justify-between mx-4">
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
      <section className="CONDITIONS APPLICABLES ------------------">
        <div className="flex flex-col mt-5">
          <div className="flex flex-col space-y-4 mt-5 md:flex-row md:justify-around md:p-8 md:space-x-52">
            <div className="space-y-5">
              <span className="font-bold">Conditions d&apos;annulation</span>
              <p className="text-justify">
                Annulez avant 5:00 PM le 3 juin et obtenez un remboursement
                total, à l&apos;exception des 30 premiers jours et des frais de
                service.
              </p>
              <a href="/property" className="font-bold">
                En voir plus...
              </a>
            </div>
            <div className="space-y-5">
              <span className="font-bold">Santé et sécurité</span>
              <p className="text-justify">
                S&apos;engage à appliquer le processus de nettoyage renforcé de
                SurfCamp.
              </p>
              <p className="">
                Les consignes d&apos;Airbnb en matière de distanciation physique
                et d&apos;autres consignes liées au COVID-19 s&apos;appliquent.
              </p>

              <a href="/property" className="font-bold">
                En voir plus...
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
