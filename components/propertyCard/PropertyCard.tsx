import React from "react";

export default function PropertyCard() {
  return (
    <div className="w-full">
      <div className="bg-white w-1/2 h-[250px] rounded-md flex flex-row shadow-md">
        <div className="flex flex-col w-9/12 mx-2 my-1">
          <div className="text-base text-gray-700">
            <p>France</p>
          </div>
          <div className="flex flex-row justify-between text-xl font-semibold mt-2">
            <p>Biarritz</p>
            <p>prix/nuit</p>
          </div>
          <div className="text-base flex flex-row justify-between mt-2">
            <p>7j Surfcamp lodge a Biarritz</p>
            <p>icones</p>
          </div>
          <div className="text-base mt-8">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis p
            </p>
          </div>
          <div className="flex flex-row text-xs justify-between mt-5">
            <div className="flex flex-row">
              <p>i</p>
              <p>n* personnes</p>
            </div>
            <div className="flex flex-row text-xs justify-between">
              <p>i</p>
              <p>n* jours</p>
            </div>
            <div className="flex flex-row text-xs">
              <p>*</p>
              <p>comments (*)</p>
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-gray-400 rounded-r-md"></div>
      </div>
    </div>
  );
}
