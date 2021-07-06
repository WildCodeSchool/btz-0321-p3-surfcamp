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
