import React from "react";

export default function PropertyCard() {
  return (
    <div>
      <div className="bg-white w-11/12 h-44 rounded-md flex flex-row">
        <div className="w-7/12 mx-2 my-1">
          <div className="text-xs">
            <p>France</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Biarritz</p>
            <p>prix/nuit</p>
          </div>
          <div className="text-xs flex flex-row justify-between">
            <p>7j Surfcamp lodge a Biarritz</p>
            <p>icones</p>
          </div>
          <div className="text-xs mt-3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              adipisci eveniet.{" "}
            </p>
          </div>
          <div className="">details</div>
        </div>
        <div className="w-5/12 bg-gray-400 rounded-r-md">image</div>
      </div>
    </div>
  );
}
