import React from "react";
import DisplayCard from "../components/Displaycard/DisplayCard";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Card from "../components/CardPattern/card";
import ResultSEO from "../components/resultSEO/resultSEO";
import { useQuery } from "react-query";
import { Property } from "../interfaces";

export default function searchResults(): JSX.Element {
  const { data, error, isLoading } = useQuery<Property[]>("properties", () =>
    fetch(`${process.env.NEXT_PUBLIC_DATAAPI_URL}/properties?limit=20`).then(
      (res) => res.json()
    )
  );

  if (isLoading) return <div>Loading... </div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  return (
    <>
      <div className=" flex  w-full h-full top-20 fixed  ">
        <div className="w-full h-full overflow-y-auto ">
          <DisplayCard />
          <div className="mb-24">
            {data.map((property) => {
              return <Card key={property.id} {...property} />;
            })}
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
