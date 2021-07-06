import React from "react";
import Image from "next/image";
import imgContact from "../../public/imgcontact.jpg";
import MyButton from "../button/MyButton";
export default function DevenezHote(): JSX.Element {
  const hostButton = { inputbutton: "DEVENIR HÔTE" };

  return (
    <div>
      <section className="bg-BlueCamp text-white  text-xs sm:text-base flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-10 sm:flex sm:flex-col sm:items-center">
          <h2 className="flex justify-center pb-4 text-xl text-center sm:pt-10">
            {` Surf camp, Surf house ? Devenez hôte !`}
          </h2>
          <p className="flex text-left sm:pt-10">
            {`  Vous gérez un ou plusieurs surf camp ? Vous mettez à disposition
            votre surf house près d'un spot, et cherchez à développer votre
            business hors saison ?`}{" "}
            <br />{" "}
            {`N'hésitez plus, devenez hôte
            gratuitement sur surfcamp.fr !`}
            <br />
            <br />
            {` Surfcamp.fr est la première plateforme de réservation pour
            les vacances surf. En vous inscrivant chez nous, vous gagnez en
            visibilité et permettez aux surfeurs du monde entier de découvrir
            votre formidable établissement !`}{" "}
            <br />
            {`   Vous n'avez qu'à cliquer sur le bouton ci-dessous et vous laisser
            guider par le formulaire d'inscription.`}
          </p>
          <br />
          <div className="flex justify-center pt-10">
            <MyButton {...hostButton} />
          </div>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center">
          <Image src={imgContact} alt="background surf image" />
        </div>
      </section>
    </div>
  );
}
