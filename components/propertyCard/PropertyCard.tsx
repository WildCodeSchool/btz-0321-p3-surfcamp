import React from "react";
import Image from "next/image";

import beach from "../../public/images/beachhosue.jpeg";

export default function PropertyCard(): JSX.Element {
  return (
    <div className="w-1/2 h-1/2">
      <div className="grid grid-cols-2 grid-rows-4 bg-gray-200">
        <div id="title" className="grid grid-cols-2 grid-rows-2 col-span-1">
          <h1 className="col-span-2">pays</h1>
          <h2>city</h2>
          <p>price</p>
        </div>
        <div
          id="subtitle"
          className="flex justify-around col-span-1 col-start-1"
        >
          <div>7j lodge Biarritz</div>
          <div>icons</div>
        </div>
        <div id="desc" className="col-span-1 col-start-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          corrupti quasi ex ratione ad ipsa facere minus corporis dolores
          eligendi.
        </div>
        <div id="infos" className="flex col-span-1 col-start-1">
          <div>voyageurs</div>
          <div>duration</div>
          <div>comments</div>
        </div>
        <div id="image" className="col-start-2 row-span-4 row-start-1">
          <Image
            className="object-cover"
            src={beach}
            alt="beach house"
            // width={500}
            // height={500}
          />
        </div>
      </div>

      <div className="bg-white w-1/2 h-[250px] rounded-md flex flex-row shadow-md ml-2">
        <div className="flex flex-col w-9/12 mx-2 my-1">
          <div className="text-base text-gray-700">
            <p>France</p>
          </div>
          <div className="flex flex-row justify-between text-xl font-semibold mt-2">
            <p>Biarritz</p>
            <p>prix/nuit</p>
          </div>
          <div className="border-b pb-2">
            <div className="text-base flex flex-row justify-between mt-2 ">
              <p>7j Surfcamp lodge a Biarritz</p>
              <p>icones</p>
            </div>
          </div>
          <div className="text-base mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis p
            </p>
          </div>
          <div className="flex flex-row text-xs justify-between mt-7">
            <div className="flex flex-row">
              <p>i</p>
              <p>n* personnes</p>
            </div>
            <div className="flex flex-row text-xs justify-between">
              <p>i</p>
              <p>n* jours</p>
            </div>
            <div className="flex flex-row text-xs ">
              <p>*</p>
              <p>comments (*)</p>
            </div>
          </div>
        </div>
        <div className="w-[330px] bg-gray-400 rounded-r-md">
          <Image
            src={beach}
            alt="beach house"
            // width={500}
            // height={500}
          />
        </div>
      </div>
    </div>
  );
}
