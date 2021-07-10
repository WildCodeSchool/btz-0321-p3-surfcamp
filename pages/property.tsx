import React, { useState } from "react";
import Image from "next/image";
import Hossegor from "../public/Images/Hossegor.jpg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Profile(): JSX.Element {
 




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

      <section className="AMENITIES--------------------------------">
        <div className="flex mt-12 justify-between">
          <div className="flex flex-col space-y-5 text-sm text-justify">
            <div className="flex space-x-4">
              <div className="h-10 w-1/12 bg-gray-400 "></div>
              <p className="w-11/12">
                Logement entier Vous aurez le logement (appartement) rien que
                pour vous.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="h-10 w-1/12 bg-gray-400 "></div>
              <p className="w-11/12">
                Nettoyage renforcé Cet hôte s&apos;engage à appliquer le
                processus de nettoyage renforcé en 5 étapes d&apos;SurfCamp. En
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
                Équipements du quotidien L&apos;hôte a équipé ce logement pour
                les séjours longue durée. Les équipements suivants sont inclus :
                cuisine, parking gratuit et chauffage.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="h-10 w-1/12 bg-gray-400 "></div>
              <p className="w-11/12">
                Règlement intérieur L&apos;hôte n&apos;autorise pas les animaux
                de compagnie ou les fêtes, et le logement est non-fumeur. En
                voir plus
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row md:justify-around">
        <section className="EQUIPMENT--------------------------------">
          <div className=" flex flex-col space-y-2 mt-10">
            <span>Equipements</span>
            <div className="flex space-x-4  justify-around">
              <div className="flex space-x-4">
                <div className="h-10 w-10 bg-gray-400 "></div>
                <p className="w-11/12">cuisine</p>
              </div>
              <div className="flex space-x-4">
                <div className="h-10 w-10 bg-gray-400 "></div>
                <p className="w-11/12">douche privée</p>
              </div>
            </div>
            <div className="flex space-x-4  justify-around">
              <div className="flex space-x-4">
                <div className="h-10 w-10 bg-gray-400 "></div>
                <p className="w-11/12">cuisine</p>
              </div>
              <div className="flex space-x-4">
                <div className="h-10 w-10 bg-gray-400 "></div>
                <p className="w-11/12">douche privée</p>
              </div>
            </div>
            <div className="flex space-x-4  justify-around">
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
        <section className="A SAVOIR---------------------------------">
          <div className="flex flex-col mt-10 ">
            <div className="flex flex-col ">
              <span>À savoir</span>
              <div className="flex flex-col space-y-2 mt-5 ">
                <div className="flex space-x-4 ">
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
                  <p className="w-11/12">Pas d&apos;animaux</p>
                </div>
                <div className="flex space-x-4">
                  <div className="h-10 w-1/12 bg-gray-400 "></div>
                  <p className="w-11/12">Pas de fête </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="MAP--------------------------------------">
        <div className="flex flex-col">
          <span className="text-left  font-bold ">Emplacement</span>
          <p className="text-left ">Anglet</p>
          <div className="flex flex-col bg-gray-600 w-full h-96 m-1 p-2"></div>
        </div>
      </section>

      <section className="PRIX ------------------------------------">
        <div className="flex flex-col bg-BlueCamp rounded-md  p-2 sm:px-20 text-white lg:mt-10 lg:mx-40">
          <form className=" h-full flex justify-end items-center m-5">
            <div className="px-4 flex flex-col">
              <DatePicker
                className="w-full text-center mr-8 p-1  text-gray-600  text-sm font-bold flex flex-col rounded-md"
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                isClearable
                withPortal
                dateFormat="dd/MM/yyyy"
                placeholderText="Arrivée / Départ"
                minDate={new Date()}
              />
            </div>
            <div className=" h-full">
              <button className="h-full w-full p-1 px-4 border border-white rounded-md focus:outline-none font-bold md:text-sm text-sm">
                <a href="/property">Rechercher</a>
              </button>
            </div>
          </form>
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

