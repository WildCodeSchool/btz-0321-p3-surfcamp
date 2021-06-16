import Image from "next/image";
import Countrycard from "../components/countrycard/Countrycard";
import Citycard from "../components/citycard/Citycard";
import MyButton from "../components/button/MyButton";

const France = {
  country: "/Pays.webp",
  titlecountry: "France",
  titlecity: "Biarritz",
  city: "/Taghazout.webp",
};

const hostButton = { inputbutton: "DEVENIR HÔTE" };

export default function Home(): JSX.Element {
  return (
    <div>
      <header></header>
      <section className="flex items-center content-center">
        <Image
          src="/surfbg.jpg"
          alt="background surf image"
          width={375}
          height={812}
        />
      </section>
      <section className="bg-BlueCamp text-white p-10 text-xs">
        <p className="flex text-center">
          Notre site répertorie tous les tips à connaitre par pays et par spot.
          Vous retrouverez notamment les infos concernant les auberges, les
          hôtels, les hébergements et les commodités sur place, l’ambiance, le
          train de vie local en fonction de la destination.{" "}
        </p>
        <br></br>
        <p className="flex text-center">
          Vous cherchez des informations sur votre prochaine destination surf ?
          Partir en vacances dans un pays, en vous renseignant sur logements ou
          les surfs camps à proximité ? Réserver un surfcamp pour adolescent,
          avec chambre double ou en dortoir ? Avec Surfcamp.fr, vous n’avez qu’à
          vous laisser guider pas par pays et spot par spot pour trouver toutes
          les informations dont vous aurez besoin.
        </p>
        <br></br>
        <p className="flex text-center">
          Bon à savoir : Chacun des surf camps que nous référençons sur notre
          site est attesté valide et professionnel. En navigant sur notre site,
          vous retrouverez aussi bien des surf camps que des écoles de surf
          proposant des stages ou des cours de surf à la carte. Vous verrez que
          certains surf camps ne proposent pas seulement des cours de surf, mais
          également du yoga, des expériences de groupe, des voyages pour
          explorer les environs et beaucoup d’autres activités annexes. Chacun
          de ces établissement à sa place sur notre site et lorsqu’un surfcamp
          propose de tels services, ceux-ci seront mentionnés dans sa fiche.
        </p>
      </section>
      <section className="text-gray-600 p-10 text-xs">
        <h2 className="flex justify-center pb-4 text-xl">
          Votre Surfcamp par pays
        </h2>
        <p className="flex text-center ">
          Recherchez votre surf camp dans les pays les plus réputés pour le surf
          ! Surf trip entre ami ou stage de surf en surf camp, retrouvez
          notamment le Maroc, le Portugal, le Costa Rica, l'Espagne, l'Indonésie
          et plein d'autres destinations surf !
        </p>
      </section>
      <section className="">
        <Countrycard {...France} />
      </section>
      <section className="bg-BlueCamp text-white  p-10 text-xs">
        <h2 className="flex justify-center pb-4 text-xl">
          Votre Surfcamp par ville
        </h2>
        <p className="flex text-center">
          Découvrez l'expérience surf qui vous convient en recherchant une
          destination par ville, parmi les meilleurs spots au monde ! Pour
          chaque ville, retrouvez toutes les infos sur le spot de surf de vos
          rêves avant de partir !
        </p>
      </section>
      <section className="relative m-0">
        <Citycard {...France} />
      </section>
      <section className="bg-BlueCamp text-white  p-10 text-xs">
        <h2 className="flex justify-center pb-4 text-lg text-center">
          Surfcamp, Surfhouse ? Devenez hôte !{" "}
        </h2>
        <p className="flex text-center">
          Vous gérez un ou plusieurs surf camp ? Vous mettez à disposition votre
          surf house près d'un spot, et cherchez à développer votre business
          hors saison ? <br /> N'hésitez plus, devenez hôte gratuitement sur
          surfcamp.fr !
          <br />
          <br /> Surfcamp.fr est la première plateforme de réservation pour les
          vacances surf. En vous inscrivant chez nous, vous gagnez en visibilité
          et permettez aux surfeurs du monde entier de découvrir votre
          formidable établissement ! <br />
          Vous n'avez qu'à cliquer sur le bouton ci-dessous et vous laisser
          guider par le formulaire d'inscription.
        </p>
        <br />
        <div className="flex justify-center pt-4">
          <MyButton {...hostButton} />
        </div>
      </section>

      {/* <section className="relative">
        <div>
          <h2>Surfer en France</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet nisl vitae dolor elementum pulvinar vel et eros. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Aliquam nibh
            odio, mollis sed nisl ut, tincidunt lobortis eros. Suspendisse
            potenti. Suspendisse potenti. Phasellus quis justo non eros
            venenatis vehicula. Aenean in velit ornare, placerat ex nec,
            vestibulum erat.
          </p>
        </div>
      </section>
      <section className="relative">
        <div className="flex flex-wrap">
          <Citycard {...Biarritz} />
          <Citycard {...Hossegor} />
          <Citycard {...Hendaye} />
          <Citycard {...Lacanau} />
          <Citycard {...LaTorche} />
          <Citycard {...Nantes} />
        </div>
      </section> */}
      <footer></footer>
    </div>
  );
}
