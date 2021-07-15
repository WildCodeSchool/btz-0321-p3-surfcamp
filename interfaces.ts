export interface Property {
  id: string;
  name: string;
  description: string;
  type: "HOUSE" | "SURFSCHOOL" | "SURFCAMP";
  priceByNight: string;
  availability: "AVAILABLE" | "PENDING";
  addressId: string;
  phoneNUmber: string;
  createdAt: string;
  userId: string;
  address: Address;
}

export interface PropertyInput {
  name: string;
  description: string;
  type: "HOUSE" | "SURFSCHOOL" | "SURFCAMP";
  priceByNight: string;
  addressId?: string;
  phoneNumber: string;
  userId: string;
  address: string;
}

export interface PropertyWithAddress {
  id: string;
  name: string;
  description: string;
  type: "HOUSE" | "SURFSCHOOL" | "SURFCAMP";
  priceByNight: string;
  availability: "AVAILABLE" | "PENDING";
  addressId: string;
  phoneNUmber: string;
  createdAt: string;
  userId: string;
  address: Address;
}

export interface AddressProperty {
  id: string;
  zipcode: string;
  city: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryCode: string;
  createdAt: string;
  addressId: string;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  picture: string;
  role: Role;
  birthDate: Date;
  phoneNumber: string;
  createdAt: Date;
  addressId?: string;
}

type Role = "USER" | "ADMIN" | "SUPERADMIN" | "RENTER";

export interface Address {
  id: string;
  zipcode: string;
  cityId: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryId: string;
  userId?: string;
  propertyId?: string;
  city: City;
  country: Country;
}

export interface AddressInput {
  zipcode: string;
  street: string;
  streetNumber: string;
  lat: string;
  long: string;
  countryId: string;
  cityId: string;
  userId?: string;
  propertyId?: string;
  city: City;
  country: Country;
}

export interface City {
  id: string;
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

export interface CityInput {
  name: string;
}

export interface Comment {
  id: string;
  comment: string;
  rate: number;
  userId: string;
  reservationId: string;
  propertyId?: string;
  roomId?: string;
}

export interface Country {
  id: string;
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

export interface CountryInput {
  name: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  countryCode: string;
  title: string;
  textSeo: string;
}

export interface CityPicture {
  id: string;
  name: string;
  url: string;
  cityId: string;
}
export interface CountryPicture {
  id: string;
  name: string;
  url: string;
  cityId: string;
}

export interface PropertyPicture {
  id: string;
  name: string;
  description: string;
  url: string;
  propertyId: string;
}
