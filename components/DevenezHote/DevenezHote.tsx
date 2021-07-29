import React from "react";
import Image from "next/image";
import imgContact from "../../public/images/imgcontact.jpg";
import MyButton from "../button/MyButton";
export default function DevenezHote(): JSX.Element {
  const hostButton = { inputbutton: "DEVENIR HÔTE" };

  return (
    <div>
      <section className="bg-BlueCamp  text-white w-full text-base flex border-t border-white">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="md:w-2/3 w-full text-base p-10 sm:flex-col sm:items-center text-center">
            <h2 className="flex justify-center w-full px-4 text-xl font-bold pb-4 text-center ">
              {` Surf camp, Surf house ? Devenez hôte !`}
            </h2>
            <p className="flex text-center  sm:pt-10">
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
          <div className="flex w-1/3 h-full">
            <div className="w-full h-full relative">
              <Image
                src={imgContact}
                alt="background surf image"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
