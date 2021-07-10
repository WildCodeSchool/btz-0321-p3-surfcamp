import React from "react";

export default function TextSEOMain(): JSX.Element {
  return (
    <div className="w-full bg-BlueCamp flex flex-col items-center align-middle justify-center">
      <section className=" font-light text-white p-5 flex flex-col items-center align-middle justify-center text-xs ">
        <p className="flex w-full text-center">
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
      ;
    </div>
  );
}
