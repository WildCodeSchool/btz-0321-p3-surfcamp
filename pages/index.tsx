import React from "react";

import CarrousselMain from "../components/carrousselCountry/carrousselCountry";
import MainGoogleMap from "../components/MainGoogleMap/MainGoogleMap";
import DevenezHote from "../components/DevenezHote/DevenezHote";

export default function Home(): JSX.Element {
  return (
    <div>
      <CarrousselMain />

      <MainGoogleMap />
      <DevenezHote />
    </div>
  );
}
