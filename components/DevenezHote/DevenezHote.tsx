import React from "react";
import Image from "next/image";
import imgContact from "../../public/Images/imgcontact.jpg";
import MyButton from "../button/MyButton";
export default function DevenezHote(): JSX.Element {
  const hostButton = { inputbutton: "DEVENIR HÔTE" };

  return (
    <div>
      <section className="bg-BlueCamp  text-white w-full  text-xs sm:text-base flex flex-col sm:flex-row">
        <div className="flex flex-col lg:flex-row justify-between align-middle items-center">
          <div className="lg:w-4/12 py-4 text-xs md:text-base p-10  justify-between align-middle sm:flex-col sm:items-center">
            <h2 className="flex w-full pb-4 text-base text-left sm:pt-10">
              {` Surf camp, Surf house ? Devenez hôte !`}
            </h2>
            <p className="flex text-left  sm:pt-10">
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
          <div className="flex items-end justify-end">
            <Image src={imgContact} alt="background surf image" />
          </div>
        </div>
      </section>
    </div>
  );
}
