import React from "react";

import CarrousselMain from "../components/carrousselCountry/carrousselCountry";
import MainGoogleMap from "../components/MainGoogleMap/MainGoogleMap";
import DevenezHote from "../components/DevenezHote/DevenezHote";
import Value from "../components/value/Value";

import TextSEOMain from "../components/TextSEOMain/TextSEOMain";
import CarrousselCity from "../components/CarrousselCity/CarrousselCity";

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

export default function Home(): JSX.Element {
  return (
    <div>
      <CarrousselMain />

      <MainGoogleMap />
      <DevenezHote />
      <TextSEOMain />
      <CarrousselCity />

      <section className="sm:justify-evenly">
        <Value {...valueTeam} />
      </section>
    </div>
  );
}
