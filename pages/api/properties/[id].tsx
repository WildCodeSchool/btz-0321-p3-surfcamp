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

export default function getOneProperty(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (id === Property[0].id) {
    res.status(200).send(Property);
  } else {
    res.status(404).send({ message: "Property doesn't seem to exist" });
  }
}
