import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { Address, AddressInput } from "../../interfaces";
import { address } from "../../API/requests";

export default function AddressHostForm(): JSX.Element {
  const mutation = useMutation<Address, AxiosError, AddressInput>((data) =>
    address.create({ ...data })
  );

  console.log(mutation);

  const onSubmit = (data) => {
    const payload = { ...data, userId: id, phoneNumber: "0666121213" };

    mutation.mutate(payload);
  };

  return <div>{data}</div>;
}
