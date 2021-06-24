import Image from "next/image";

import { useState, useEffect, useCallback } from "react";

import MyButton from "../components/button/MyButton";
import Value from "../components/value/Value";
import SliderMobile from "../components/slider/sliderMobile";
import SliderDesktop from "../components/slider/sliderDesktop";

import imgContact from "../public/imgcontact.jpg";

const hostButton = { inputbutton: "DEVENIR HÔTE" };

const valueTeam = {
  titleteam: "La Team Surfcamp.fr",
  textteam:
    "Notre équipe est constituée de surfeurs amateurs et professionnels. Une bande de copains originaires du Sud-Ouest de la France qui ont grandit dans les vagues, se sont laissés rôtir au soleil et grignoté par le sel. Mais bon sang, qu’est-ce qu’on adore ça !",
  titlevalue: "Nos valeurs",
  textvalue:
    "Chez surfcamp.fr, nous essayons de transmettre les valeurs qui nous sont propres et chères. Le développement de notre plateforme doit impérativement se faire dans les respects des principes suivants : Le respect de l’homme en tant qu’être humain, la pratique responsable et raisonnable vis à vis de l’écologie et Le sport et le découverte de soi",
  titlecontact: "Amis surfeurs, contactez-nous !",
  textcontact:
    "Parce que nous sommes en constante recherche de l’amélioration de nos services, de qualité d’article et de véracité d’informations, n’hésitez pas à nous contacter dans le cas où vous voudriez nous faire un retour d’expérience !",
};

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  useEffect(() => {
    const media = window.matchMedia(`(max-width :${width}px)`);
    media.addListener(updateTarget);
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeListener(updateTarget);
  }, []);
  return targetReached;
};

export default function Home(): JSX.Element {
  const isBreakingpoint = useMediaQuery(375);
  return (
    <div>
      {/* <section className="flex bg-no-repeat h-screen overflow-hidden bg-center bg-contain">
        <div className="h-full">
          {isBreakingpoint ? (
            <Image src={bgMobile} alt="bg desktop" />
          ) : (
            <Image src={bgDesktop} alt="bg mobile" />
          )}
        </div>
      </section> */}
      <section className="bg-BlueCamp text-white p-10 text-xs sm:text-base z-20">
        <p className="flex text-center">
          {`Notre site répertorie tous les tips à connaitre par pays et par spot.
          Vous retrouverez notamment les infos concernant les auberges, les
          hôtels, les hébergements et les commodités sur place, l’ambiance, le
          train de vie local en fonction de la destination.`}
        </p>
        <br></br>
        <p className="flex text-center">
          {`Vous cherchez des informations sur votre prochaine destination surf ?
          Partir en vacances dans un pays, en vous renseignant sur logements ou
          les surfs camps à proximité ? Réserver un surfcamp pour adolescent,
          avec chambre double ou en dortoir ? Avec Surfcamp.fr, vous n’avez qu’à
          vous laisser guider pas par pays et spot par spot pour trouver toutes
          les informations dont vous aurez besoin.`}
        </p>
        <br></br>
        <p className="flex text-center">
          {`Bon à savoir : Chacun des surf camps que nous référençons sur notre
          site est attesté valide et professionnel. En navigant sur notre site,
          vous retrouverez aussi bien des surf camps que des écoles de surf
          proposant des stages ou des cours de surf à la carte. Vous verrez que
          certains surf camps ne proposent pas seulement des cours de surf, mais
          également du yoga, des expériences de groupe, des voyages pour
          explorer les environs et beaucoup d’autres activités annexes. Chacun
          de ces établissement à sa place sur notre site et lorsqu’un surf camp
          propose de tels services, ceux-ci seront mentionnés dans sa fiche.`}
        </p>
      </section>
      <section className="text-gray-600 p-10 text-xs sm:text-base">
        <h2 className="flex justify-center pb-4 text-xl">
          {`          Votre surf camp par pays
`}{" "}
        </h2>
        <p className="flex text-center p-4">
          {`   Recherchez votre surf camp dans les pays les plus réputés pour le surf
          ! Surf trip entre ami ou stage de surf en surf camp, retrouvez
          notamment le Maroc, le Portugal, le Costa Rica, l'Espagne, l'Indonésie
          et plein d'autres destinations surf !`}
        </p>
      </section>
      <section>
        {isBreakingpoint ? <SliderMobile /> : <SliderDesktop />}
      </section>
      <section className="bg-BlueCamp text-white p-10 text-xs sm:text-base">
        <h2 className="flex justify-center pb-4 text-xl">
          {`          Votre surf camp par ville
`}{" "}
        </h2>
        <p className="flex text-center p-4">
          {`  Découvrez l'expérience surf qui vous convient en recherchant une
          destination par ville, parmi les meilleurs spots au monde ! Pour
          chaque ville, retrouvez toutes les infos sur le spot de surf de vos
          rêves avant de partir !`}
        </p>
        {isBreakingpoint ? <SliderMobile /> : <SliderDesktop />}
      </section>

      <section className="hidden sm:block p-10 text-xs sm:text-base ">
        <h2 className="flex justify-center pb-4 text-xl text-gray-600">
          {`          Votre surf camp en parcourant le monde !
`}{" "}
        </h2>
        <p className="flex text-center p-4 text-gray-600">
          {` Découvrez l'expérience surf qui vous convient en recherchant une
          destination par ville, parmi les meilleurs spots au monde ! Pour
          chaque ville, retrouvez toutes les infos sur le spot de surf de vos
          rêves avant de partir !`}
        </p>
        <p>{`-Map Google-`}</p>
      </section>
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
      <section className="sm:justify-evenly">
        <Value {...valueTeam} />
      </section>
    </div>
  );
}
