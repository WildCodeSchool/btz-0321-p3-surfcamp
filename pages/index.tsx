import React,{useState} from "react";
import Carroussel from '../components/Carroussel/Carroussel'
import MainGoogleMap from "../components/MainGoogleMap/MainGoogleMap";
import DevenezHote from "../components/DevenezHote/DevenezHote";
import Value from "../components/value/Value";
import TextSEOMain from "../components/TextSEOMain/TextSEOMain";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/searchBar/SearchBar";

export default function Home(): JSX.Element {
  return (
    <div>
      <SearchBar />
      <TextSEOMain />
      <Carroussel ressource="countrypictures"/>
      <Carroussel ressource="citypictures"/>
      <MainGoogleMap />
      <DevenezHote />
      <section className="sm:justify-evenly">
        <Value/>
      </section>
      <Footer />
    </div>
  );
}
