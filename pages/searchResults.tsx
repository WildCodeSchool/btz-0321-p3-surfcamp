import React from "react";
import DisplayCard from "../components/Displaycard/DisplayCard";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Card2 from "../components/CardPattern/card2";

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
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
        <div className="hidden sm:flex  // w-full h-1/4  ">
          <GoogleMap />
        </div>
      </div>
    </>
  );
}
