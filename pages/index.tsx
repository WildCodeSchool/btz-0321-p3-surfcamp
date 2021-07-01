import React from "react";
import Carroussel from "../components/Carroussel/Carroussel";
import MainGoogleMap from "../components/MainGoogleMap/MainGoogleMap";
import DevenezHote from "../components/DevenezHote/DevenezHote";
import Value from "../components/value/Value";
import TextSEOMain from "../components/TextSEOMain/TextSEOMain";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <TextSEOMain />
      <Carroussel take="1" ressource="countrypictures" />
      <Carroussel take="4" ressource="citypictures" />
      <MainGoogleMap />
      <DevenezHote />
      <section className="sm:justify-evenly">
        <Value />
      </section>
      <Footer />
    </div>
  );
}
