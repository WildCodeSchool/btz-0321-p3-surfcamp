import React from "react";
import { useState, useEffect } from "react";
import Carroussel from "../components/Carroussel/Carroussel";
import MainGoogleMap from "../components/MainGoogleMap/MainGoogleMap";
import DevenezHote from "../components/DevenezHote/DevenezHote";
import Value from "../components/value/Value";
import TextSEOMain from "../components/TextSEOMain/TextSEOMain";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/searchBar/SearchBar";
import useWindowDimension from "../hooks/useWindowDimension";

export default function Home(): JSX.Element {
  const [take, setTake] = useState(4);
  const { width } = useWindowDimension();

  useEffect(() => {
    if (width < 768 || window.innerWidth < 768) {
      setTake(1);
    } else {
      setTake(4);
    }
  }, []);
  console.log(width);

  return (
    <div>
      <SearchBar />
      <TextSEOMain />
      <div className="py-24">
        <Carroussel take={`${take}`} ressource="countrypictures" />
      </div>
      <div className="bg-BlueCamp py-24">
        <Carroussel take={`${take}`} ressource="citypictures" />
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
