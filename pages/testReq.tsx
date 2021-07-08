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

export default function testReq({
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
}): JSX.Element {
  const { getAllUsers } = useQuery<User[]>("users", () => user.getAll());

  const { getAllProperties } = useQuery<Property[]>("properties", () =>
    property.getAll()
  );
  const { getAllAddresses } = useQuery<Address[]>("addresses", () =>
    address.getAll()
  );
  const { getAllCities } = useQuery<City[]>("cities", () => city.getAll());

  const { getAllComments } = useQuery<Comment[]>("comments", () =>
    comment.getAll()
  );

  const { getAllCountries } = useQuery<Country[]>("countries", () =>
    country.getAll()
  );
  const { getAllFeatures } = useQuery<Feature[]>("features", () =>
    feature.getAll()
  );
  const { getAllCityPictures } = useQuery<CityPicture[]>("cityPictures", () =>
    cityPictures.getAll()
  );
  const { getAllCountryPictures } = useQuery<CountryPicture[]>(
    "countryPictures",
    () => countryPictures.getAll()
  );
  const { getAllPropertyPictures } = useQuery<PropertyPicture[]>(
    "propertyPictures",
    () => propertyPictures.getAll()
  );

  useEffect(() => {
    // console.log(data);
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
