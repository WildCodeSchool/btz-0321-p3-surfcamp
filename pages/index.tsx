import React from "react";
import MainGoogleMap from "../components/MainGoogleMap/MainGoogleMap";
import DevenezHote from "../components/DevenezHote/DevenezHote";
import Value from "../components/value/Value";
import TextSEOMain from "../components/TextSEOMain/TextSEOMain";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CarouselSlick from "../components/CarouselSlick/CarouselSlick";
import CarouselSlickPhone from "../components/CarouselSlick/CarouselPhone";

export default function Home(): JSX.Element {
  return (
    <div className="w-full h-full flex flex-col items-center align-middle justify-center">
      <Header />
      <TextSEOMain />
      <div className="w-full   flex flex-col items-center align-middle justify-center px-5 py-10">
        <h4 className="w-full lg:w-8/12 text-center">
          Votre surf camp par Pays
        </h4>
        <div className="w-full lg:w-8/12 text-center">
          {`Recherchez votre surf camp dans les pays les plus réputés pour le surf
          ! Surf trip entre ami ou stage de surf en surf camp, retrouvez
          notamment le Maroc, le Portugal, le Costa Rica, l'Espagne,
          l'Indonésie et plein d'autres destinations surf !`}
        </div>
        <div className="w-full h-full hidden md:flex justify-center">
          <CarouselSlick />
        </div>
        <div className="w-full h-full flex justify-center md:hidden">
          <CarouselSlickPhone />
        </div>
      </div>
      <div className="w-full  flex flex-col items-center align-middle justify-center bg-BlueCamp px-5 py-10">
        <h4 className="w-full text-white text-center">
          Votre surf camp par Ville
        </h4>
        <div className="w-full lg:w-8/12 text-white text-center flex justify-center">
          {`Découvrez l'expérience surf qui vous convient en recherchant une
          destination par ville, parmi les meilleurs spots au monde ! Pour
          chaque ville, retrouvez toutes les infos sur le spot de surf de vos
          rêves avant de partir !`}
        </div>
        <div className="w-full h-full hidden md:flex justify-center">
          <CarouselSlick />
        </div>
        <div className="w-full h-full flex justify-center md:hidden">
          <CarouselSlickPhone />
        </div>
      </div>
      <MainGoogleMap />
      <DevenezHote />
      <section className="sm:justify-evenly">
        <Value />
      </section>
      <Footer />
    </div>
  );
}
