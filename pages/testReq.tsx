import {
  property,
  user,
  address,
  city,
  comment,
  country,
  feature,
  cityPicture,
  countryPicture,
  propertyPicture,
} from "../API/requests";
import { useQuery } from "react-query";
import { useEffect } from "react";
import {
  Property,
  User,
  Address,
  City,
  Comment,
  Country,
  Feature,
  CityPicture,
  CountryPicture,
  PropertyPicture,
} from "../interfaces";
import { GetServerSideProps } from "next";

interface testReq {
  users: string[];
  properties: string[];
  addresses: string[];
  cities: string;
  comments: string;
  countries: string;
  features: string;
  cityPictures: string;
  countryPictures: string;
  propertyPictures: string;
}

export default function testReq(props: testReq): JSX.Element {
  const {
    users,
    properties,
    addresses,
    cities,
    comments,
    countries,
    features,
    cityPictures,
    countryPictures,
    propertyPictures,
  } = props as testReq;

  useQuery<User[]>("users", () => user.getAll());

  useQuery<Property[]>("properties", () => property.getAll());

  useQuery<Address[]>("addresses", () => address.getAll());

  useQuery<City[]>("cities", () => city.getAll());

  useQuery<Comment[]>("comments", () => comment.getAll());

  useQuery<Country[]>("countries", () => country.getAll());

  useQuery<Feature[]>("features", () => feature.getAll());

  useQuery<CityPicture[]>("cityPictures", () => cityPictures.getAll());

  useQuery<CountryPicture[]>("countryPictures", () => countryPictures.getAll());

  useQuery<PropertyPicture[]>("propertyPictures", () =>
    propertyPictures.getAll()
  );

  useEffect(() => {
    console.log({
      users,
      properties,
      addresses,
      cities,
      comments,
      countries,
      features,
      cityPictures,
      countryPictures,
      propertyPictures,
    });
  });

  return (
    <div>
      <div>TEST REQUESTS ROUTES FROM API: RESULTS ARE IN CONSOLE.LOG!</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await user.getAll();
  const properties = await property.getAll();
  const addresses = await address.getAll();
  const cities = await city.getAll();
  const comments = await comment.getAll();
  const countries = await country.getAll();
  const features = await feature.getAll();
  const cityPictures = await cityPicture.getAll();
  const countryPictures = await countryPicture.getAll();
  const propertyPictures = await propertyPicture.getAll();
  return {
    props: {
      users,
      properties,
      addresses,
      cities,
      comments,
      countries,
      features,
      cityPictures,
      countryPictures,
      propertyPictures,
    },
  };
};
