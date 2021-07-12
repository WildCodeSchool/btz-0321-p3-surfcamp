import React from "react";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Card from "../components/CardPattern/card";
import ResultSEO from "../components/resultSEO/resultSEO";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { property } from "../API/requests";
import { Property } from "../interfaces";

export default function searchResults(): JSX.Element {
  const router = useRouter();
  const { city } = router.query;
  const { data, error, isLoading } = useQuery<Property[]>("properties", () =>
    property.search(`${city}`)
  );

  if (isLoading) return <div>Loading... </div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <>
      <div className=" flex  w-full h-full top-10 fixed  ">
        <div className="w-1/2 h-full overflow-y-auto ">
          <div className="mb-24">
            {data?.map((property) => {
              return <Card key={property.id} {...property} />;
            })}
          </div>
        </div>
        <div
          className="hidden
 sm:flex  // w-1/2 h-full flex-col "
        >
          <div className="w-full h-full">
            <GoogleMap />
          </div>
          <div className="bg-BlueCamp text-white text-center w-1/2 h-1/2 fixed bottom-0">
            <ResultSEO />
          </div>
        </div>
      </div>
    </>
  );
}
