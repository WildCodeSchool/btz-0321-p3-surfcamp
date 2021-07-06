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
      <div className=" flex  w-full h-full top-10 fixed  ">
        <div className="w-1/2 h-full overflow-y-auto ">
          <DisplayCard />
          <div className="mb-24">
            {data.map((property) => {
              return <Card key={property.id} {...property} />;
            })}
          </div>
        </div>
        <div className="hidden sm:flex  // w-1/2 h-full flex-col ">
          <div className="w-1/2 h-1/2">
            <GoogleMap />
          </div>
         
          <div className="bg-BlueCamp text-white text-center w-1/2 h-1/3 fixed bottom-0">
            <ResultSEO />
          </div>  
        </div>
      </div>
    </>
  );
}
