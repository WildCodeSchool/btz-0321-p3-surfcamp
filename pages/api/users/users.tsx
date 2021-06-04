import { NextApiRequest, NextApiResponse } from "next";

const faker = require("faker");

const myUser: IUsers[] = [
  {
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.image.avatar(),
    role: faker.lorem.word(),
    birthDate: faker.date.past(),
    status: faker.lorem.word(),
    mobilePhone: faker.phone.phoneNumber(),
  },
];

const myUsers: IUsers[] = [
  {
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.image.avatar(),
    role: faker.lorem.word(),
    birthDate: faker.date.past(),
    status: faker.lorem.word(),
    mobilePhone: faker.phone.phoneNumber(),
  },
  {
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.image.avatar(),
    role: faker.lorem.word(),
    birthDate: faker.date.past(),
    status: faker.lorem.word(),
    mobilePhone: faker.phone.phoneNumber(),
  },
  {
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.image.avatar(),
    role: faker.lorem.word(),
    birthDate: faker.date.past(),
    status: faker.lorem.word(),
    mobilePhone: faker.phone.phoneNumber(),
  },
  {
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.image.avatar(),
    role: faker.lorem.word(),
    birthDate: faker.date.past(),
    status: faker.lorem.word(),
    mobilePhone: faker.phone.phoneNumber(),
  },
  {
    id: faker.datatype.uuid(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    image: faker.image.avatar(),
    role: faker.lorem.word(),
    birthDate: faker.date.past(),
    status: faker.lorem.word(),
    mobilePhone: faker.phone.phoneNumber(),
  },
];

export default function routeUsersApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).send(myUsers);
  } else if (req.method === "POST") {
    res.status(201).send(myUser);
  } else if (req.method === "PUT") {
    res.status(201).send(myUser);
  } else if (req.method === "DELETE") {
    res.status(204);
  } else {
    res.status(500).send({ message: "Fail !" });
  }
}
