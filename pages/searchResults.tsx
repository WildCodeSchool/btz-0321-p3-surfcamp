import React from "react";
import DisplayCard from "../components/Displaycard/DisplayCard";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import CardPattern from "../components/CardPattern/CardPattern";

export default function searchResults(): JSX.Element {
  return (
    <>
      <div className=" flex  w-full h-full top-20 fixed  ">
        <div className="w-full h-full overflow-y-auto ">
          {/*  <div>
            {Filter && }
          </div> */}
          <DisplayCard />
          <div className="">
            <CardPattern />
            <CardPattern />
            <CardPattern />
            <CardPattern />
          </div>
        </div>
        <div className="w-full h-1/2 ">
          <GoogleMap />
        </div>
      </div>
    </>
  );
}
