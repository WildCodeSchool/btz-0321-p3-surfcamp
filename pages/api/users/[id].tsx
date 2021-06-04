import { NextApiRequest, NextApiResponse } from "next";

const faker = require("faker");

// fake user in dev environnement
const myUser: IUsers[] = [
  {
    id: "1",
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

export default function getOneUser(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (id === myUser[0].id) {
    res.status(200).send(myUser);
  } else {
    res.status(404).send({ message: "User doesn't seem to exist" });
  }
}
