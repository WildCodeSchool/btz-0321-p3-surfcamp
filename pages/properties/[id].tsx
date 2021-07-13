import React from "react";
import Image from "next/image";
import Hossegor from "../../public/Images/Hossegor.jpg";
import { property } from "../../API/requests";
import { Property } from "../../interfaces";
import { GetServerSideProps } from "next";
import Amenities from "../../components/propertypage/amenities";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const resProperty = await property.getOne(context.params.id);
  return { props: { ...resProperty } };
};

export default function PropertyId({
  id,
  name,
  description,
  type,
  priceByNight,
  availability,
  addressId,
  phoneNUmber,
  createdAt,
  userId,
  address,
}: Property): JSX.Element {
  return (
    <div className="flex flex-col w-full text-BlueCamp h-full px-5 mb-16 md:px-20 lg:px-64">
      <section className="TETE ANNONCE-----------------------------">
        <div className="h-full  pt-16 flex flex-col mt-12 ">
          <span className="text-left  font-bold  text-xl">{name}</span>
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
            <p>{description}</p>
          </div>
          <div className="">
            <p>{type}</p>
          </div>
          <div className="text-justify mt-5">
            <p>{description}</p>
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
            <span className="text-left  font-bold ">Recapitulatif</span>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex border border-white w-full rounded-md justify-between p-4">
              <p>Prix</p>
              <p>{priceByNight}/ Nuit</p>
            </div>
            <div className="flex border border-white w-full rounded-md justify-between p-4">
              <p>Frais du service</p>
              <p>15$</p>
            </div>

            <div>
              <div className="flex  w-full   justify-between ">
                <p>TOTAL:</p>
                <p>265$</p>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="flex border border-white rounded-md justify-center p-4">
                <a href="/property">Je Contacte</a>
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
