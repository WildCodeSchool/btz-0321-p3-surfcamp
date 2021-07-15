import axios from "axios";
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

const API_URL = process.env.NEXT_PUBLIC_DATAAPI_URL;
export const user = {
  getAll: (): Promise<User[]> =>
    axios.get(`${API_URL}/users`).then((res) => res.data),

  getOne: (id: string): Promise<User> =>
    axios.get(`${API_URL}/users/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/users/${id}`).then((res) => res.data),

  create: ({ user }: { user: string }): Promise<User> =>
    axios.post(`${API_URL}/users`, user).then((res) => res.data),

  update: ({ user, id }: { user: User; id?: string }): Promise<User> => {
    if (!id) throw new Error("Id can't be undefined");
    return axios.put(`${API_URL}/users/${id}`, user).then((res) => res.data);
  },
};

export const property = {
  getAll: (): Promise<Property[]> =>
    axios.get(`${API_URL}/properties`).then((res) => res.data),

  getOne: (id: string): Promise<Property> =>
    axios.get(`${API_URL}/properties/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/properties/${id}`).then((res) => res.data),

  create: ({ property }: { property: string }): Promise<Property> =>
    axios.post(`${API_URL}/properties`, property).then((res) => res.data),

  update: ({
    property,
    id,
  }: {
    property: Property;
    id?: string;
  }): Promise<null> =>
    axios.put(`${API_URL}/properties/${id}`, property).then((res) => res.data),

  search: (query: string): Promise<Array<Property>> =>
    axios
      .get(`${API_URL}/properties/search/?query=${query}`)
      .then((res) => res.data),
};

export const address = {
  getAll: (): Promise<Address[]> =>
    axios.get(`${API_URL}/addresses`).then((res) => res.data),

  getOne: (id: string): Promise<Address> =>
    axios.get(`${API_URL}/addresses/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/addresses/${id}`).then((res) => res.data),

  create: ({ address }: { address: string }): Promise<User> =>
    axios.post(`${API_URL}/addresses`, address).then((res) => res.data),

  update: ({ address, id }: { address: Address; id?: string }): Promise<null> =>
    axios.put(`${API_URL}/addresses/${id}`, address).then((res) => res.data),
};

export const city = {
  getAll: (): Promise<City[]> =>
    axios.get(`${API_URL}/cities`).then((res) => res.data),

  getOne: (id: string): Promise<City> =>
    axios.get(`${API_URL}/cities/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/cities/${id}`).then((res) => res.data),

  create: ({ cities }: { cities: string }): Promise<User> =>
    axios.post(`${API_URL}/cities`, cities).then((res) => res.data),

  update: ({ cities, id }: { cities: City; id?: string }): Promise<null> =>
    axios.put(`${API_URL}/cities/${id}`, cities).then((res) => res.data),

  getCityPictures: (id: string): Promise<City> =>
    axios.get(`${API_URL}/cities/${id}/citypictures`).then((res) => res.data),
};

export const comment = {
  getAll: (): Promise<Comment[]> =>
    axios.get(`${API_URL}/comments`).then((res) => res.data),

  getOne: (id: string): Promise<Comment> =>
    axios.get(`${API_URL}/comments/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/comments/${id}`).then((res) => res.data),

  create: ({ comments }: { comments: string }): Promise<Comment> =>
    axios.post(`${API_URL}/comments`, comments).then((res) => res.data),

  update: ({
    comments,
    id,
  }: {
    comments: Comment;
    id?: string;
  }): Promise<null> =>
    axios.put(`${API_URL}/comments/${id}`, comments).then((res) => res.data),
};

export const country = {
  getAll: (): Promise<Country[]> =>
    axios.get(`${API_URL}/countries`).then((res) => res.data),

  getOne: (id: string): Promise<Country> =>
    axios.get(`${API_URL}/countries/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/countries/${id}`).then((res) => res.data),

  create: ({ countries }: { countries: string }): Promise<Country> =>
    axios.post(`${API_URL}/countries`, countries).then((res) => res.data),

  update: ({
    countries,
    id,
  }: {
    countries: Country;
    id?: string;
  }): Promise<null> =>
    axios.put(`${API_URL}/countries/${id}`, countries).then((res) => res.data),
};

export const feature = {
  getAll: (): Promise<Feature[]> =>
    axios.get(`${API_URL}/features`).then((res) => res.data),

  getOne: (id: string): Promise<Feature> =>
    axios.get(`${API_URL}/features/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/features/${id}`).then((res) => res.data),

  create: ({ features }: { features: string }): Promise<Feature> =>
    axios.post(`${API_URL}/features`, features).then((res) => res.data),

  update: ({
    features,
    id,
  }: {
    features: Feature;
    id?: string;
  }): Promise<null> =>
    axios.put(`${API_URL}/features/${id}`, features).then((res) => res.data),
};
export const cityPicture = {
  getAll: (): Promise<CityPicture[]> =>
    axios.get(`${API_URL}/citypictures`).then((res) => res.data),

  getOne: (id: string): Promise<CityPicture> =>
    axios.get(`${API_URL}/citypictures/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/citypictures/${id}`).then((res) => res.data),

  create: ({ citypicture }: { citypicture: string }): Promise<CityPicture> =>
    axios.post(`${API_URL}/citypictures`, citypicture).then((res) => res.data),

  update: ({
    citypicture,
    id,
  }: {
    citypicture: CityPicture;
    id?: string;
  }): Promise<null> =>
    axios
      .put(`${API_URL}/citypictures/${id}`, citypicture)
      .then((res) => res.data),
};
export const countryPicture = {
  getAll: (): Promise<CountryPicture[]> =>
    axios.get(`${API_URL}/countrypictures`).then((res) => res.data),

  getOne: (id: string): Promise<CountryPicture> =>
    axios.get(`${API_URL}/countrypictures/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/countrypictures/${id}`).then((res) => res.data),

  create: ({
    countrypicture,
  }: {
    countrypicture: string;
  }): Promise<CountryPicture> =>
    axios
      .post(`${API_URL}/countrypictures`, countrypicture)
      .then((res) => res.data),

  update: ({
    countrypicture,
    id,
  }: {
    countrypicture: CountryPicture;
    id?: string;
  }): Promise<null> =>
    axios
      .put(`${API_URL}/countrypictures/${id}`, countrypicture)
      .then((res) => res.data),
};
export const propertyPicture = {
  getAll: (): Promise<PropertyPicture[]> =>
    axios.get(`${API_URL}/propertypictures`).then((res) => res.data),

  getOne: (id: string): Promise<PropertyPicture> =>
    axios.get(`${API_URL}/propertypictures/${id}`).then((res) => res.data),

  delete: ({ id }: { id: string }): Promise<null> =>
    axios.delete(`${API_URL}/propertypictures/${id}`).then((res) => res.data),

  create: ({
    propertypicture,
  }: {
    propertypicture: string;
  }): Promise<PropertyPicture> =>
    axios
      .post(`${API_URL}/propertypictures`, propertypicture)
      .then((res) => res.data),

  update: ({
    propertypicture,
    id,
  }: {
    propertypicture: PropertyPicture;
    id?: string;
  }): Promise<null> =>
    axios
      .put(`${API_URL}/propertypictures/${id}`, propertypicture)
      .then((res) => res.data),
};
