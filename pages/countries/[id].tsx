import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Country: {id}</p>;
};

export default Country;
