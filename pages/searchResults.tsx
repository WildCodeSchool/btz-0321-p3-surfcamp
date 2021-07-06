import React from "react";
import DisplayCard from "../components/Displaycard/DisplayCard";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Card from "../components/CardPattern/card";
import ResultSEO from "../components/resultSEO/resultSEO";

export default function searchResults(): JSX.Element {
  return (
    <>
      <div className=" flex  w-full h-full top-20 fixed  ">
        <div className="w-full h-full overflow-y-auto ">
          {/*  <div>
            {Filter && }
          </div> */}
          <DisplayCard />
          <div className="mb-24">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="hidden sm:flex  // w-full h-full flex-col ">
          <div className="w-full">
            <GoogleMap />
          </div>
          <div className="bg-BlueCamp text-white text-center w-full h-1/2 ">
            <ResultSEO />
          </div>
        </div>
      </div>
    </>
  );
}
