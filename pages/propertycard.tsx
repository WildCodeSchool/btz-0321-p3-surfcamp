import React from "react";
import DisplayCard from "../components/Displaycard/DisplayCard";

import Card from "../components/CardPattern/card";

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
          </div>
        </div>
      </div>
    </>
  );
}
