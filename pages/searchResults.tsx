import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import GoogleMap from "../components/GoogleMap/GoogleMap";
import Card from "../components/CardPattern/card";
import ResultSEO from "../components/resultSEO/resultSEO";
import { property } from "../API/requests";
import { Property } from "../interfaces";

export default function searchResults({
  properties,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <>
      <div className=" flex  w-full h-full top-10 fixed  ">
        <div className="sm:w-1/2 w-full h-full overflow-y-auto ">
          <div className="mb-24">
            {properties?.map((property) => {
              return <Card key={property.id} {...property} />;
            })}
          </div>
        </div>

        <div className="hidden sm:flex w-1/2 h-full flex-col">
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

export const getServerSideProps: GetServerSideProps<{
  properties: Property[];
}> = async (ctx) => {
  const {
    query: { query },
  } = ctx;

  const properties = await property.search(query as string);

  return { props: { properties } };
};
