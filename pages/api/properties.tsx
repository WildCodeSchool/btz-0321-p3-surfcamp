import { NextApiRequest, NextApiResponse } from "next";

const faker = require("faker");

const Property = [
  {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(3),
    description: faker.lorem.paragraph(),
    type: faker.lorem.word(1),
    priceByNight: faker.finance.amount(),
    status: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
  },
];

const Properties = [
  {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(3),
    description: faker.lorem.paragraph(),
    type: faker.lorem.word(1),
    priceByNight: faker.finance.amount(),
    status: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(3),
    description: faker.lorem.paragraph(),
    type: faker.lorem.word(1),
    priceByNight: faker.finance.amount(),
    status: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(3),
    description: faker.lorem.paragraph(),
    type: faker.lorem.word(1),
    priceByNight: faker.finance.amount(),
    status: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(3),
    description: faker.lorem.paragraph(),
    type: faker.lorem.word(1),
    priceByNight: faker.finance.amount(),
    status: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.lorem.word(3),
    description: faker.lorem.paragraph(),
    type: faker.lorem.word(1),
    priceByNight: faker.finance.amount(),
    status: faker.datatype.boolean(),
    image: faker.image.imageUrl(),
  },
];

export default function PropertiesApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).send(Properties);
  } else if (req.method === "PUT") {
    res.status(201).send(Property);
  } else if (req.method === "POST") {
    res.status(201).send(Property);
  } else if (req.method === "DELETE") {
    res.status(204);
  } else {
    res.status(500).send({ message: "YOU MISSED SOMETHING" });
  }
}
