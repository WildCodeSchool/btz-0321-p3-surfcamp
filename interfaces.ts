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
